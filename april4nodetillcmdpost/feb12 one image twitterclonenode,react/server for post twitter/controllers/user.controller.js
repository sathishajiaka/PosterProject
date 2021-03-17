const {User} = require('../models');
const mongoose = require('mongoose');
const {to, ReE, ReS} = require('../services/util.service');
const validator = require('validator');
const {isEmail}  = validator;
const ObjectId = require('mongoose').Types.ObjectId;
const CONFIG = require('../config/config');


const create = async function (req, res) {

    const body = req.body;
    let err, user, email;

    if (typeof body.userName === 'undefined' || body.userName === '' || body.userName.length<2) {
        return ReE(res,'please enter a username with minimum 2 characters',400)
    }
    if (typeof body.firstName === 'undefined' || body.firstName === '' || body.firstName.length<3) {
        return ReE(res,'please enter a firstName with minimum 3 characters',400)
    }
    if (typeof body.lastName === 'undefined' || body.lastName === '') {
        return ReE(res,'please enter your lastName ',400)
    }
    else if (typeof body.email === 'undefined' || body.email === '' ) {
        return ReE(res,'please enter your Email Id',400)
    }
    else if (typeof body.password === 'undefined' || body.password === '' || body.password.length<6) {
        return ReE(res,'please enter a password with minimum 6 characters',400)
    }
    else if (typeof body.bio === 'undefined' || body.bio === '') {
        return ReE(res,'please enter a bio',400)
    }
    else{

        [err,email]=await to (User.findOne({email:body.email}));

        if (email!=null || err)
        {
            console.log("Email already registered");
            return ReE (res, "this email is already registered. Please login to continue.",422)
        }

        [err, user] = await to(User.create(body));

        if (err) {
            return ReS(res,err,400)
        } else {
            if (user!=null) {
                return ReS(res,{message: 'User Successfully Registered.',user:user},200)
            }
        }
    }
};
module.exports.create = create;

const login = async function(req,res){
    let err,user;
    const reqlog=req.body;

    console.log(reqlog.email);

    if(typeof reqlog.email==='undefined' || reqlog.email==='')
    {
        return ReE(res,{message:"Please enter a valid email to login"},400)
    }

    if(typeof reqlog.password==='undefined'||reqlog.password==='')
    {
        return ReE(res,{message:"Please enter your password to login"},400)
    }
    else
    {

        if(isEmail(reqlog.email)){

            [err, user] = await to(User.findOne({email:reqlog.email }));
            if(err) return ReE(res,err,400);
            if(!user) return ReE(res,{message:'Email Id is not registered. Please register your account.'},400);

            [err, user] = await to(user.comparePassword(reqlog.password));

            if(err) return ReE(res,err,422);

            else if(user!=null)
            {
                return ReS(res,{message:"user logged in successfully ",user:user,token:user.getJWT()},200)
            }
            else{
                return ReE(res,{message:"Something went wrong. Please try again"},400)
            }

        } else return ReE(res,{message:"Invalid email address. Please check your email Id "},400)


    }

};
module.exports.login = login;

const getAll = async function (req, res) {

    let err, user;

    [err, user] = await to(User.find());

    if (err) {
        return ReS(res,err,400)
    } else {
        if (user!= null) {
            return ReS(res,{users:user},200)
        }
    }
};
module.exports.getAll = getAll;

const get = async function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    let user = req.user;
    return ReS(res, { user: user.toWeb()})
};
module.exports.get = get;


const update = async function (req, res) {
    let err, user, data;
    user = req.user;
    data = req.body;

    CONFIG.editableUserFields.forEach(function (field) {
        if (typeof field === 'string' && data[field] !== undefined) {
            user[field] = data[field]
        }
    });
    if (err) {
        return ReE(res, err,400)
    }
    if(user){
        [err, user] = await to(user.save());
        return ReS(res,
            {
                message: 'Updated Successfully User.',
                user: user},200)
        }

};
module.exports.update = update;


const remove = async function (req, res) {
    if (!ObjectId.isValid(req.params.id)) {
        return ReE(res, {message: 'Please provide valid Vendor Id'}, 400)
    }
    User.findByIdAndRemove(req.params.id, (err, data) => {
        if (err) { return ReE(res, err, 400); }
        if(data){
            return ReS(res, { message: "Successfully deleted User", user: data }, 200);
        }
        else {
            return ReE(res, { message: "User not found"}, 400);

        }
    })
};
module.exports.remove = remove;


const recover = async function (req, res) {

    let email,err,user;
    email=req.body.email;

    [err,user]= await to(User.findOne({email:email}));
    if(err) {
        return ReE(res, err, 400);
    }
    if(user) {
        user.generatePasswordReset();
        user.save();
      return ReS(res, {message: 'A reset email has been sent to ' + user.resetPassword + '.' + user.resetPasswordExpires}, 200);
    //     const api_key = CONFIG.gmailGun_apikey;
    //     var domain = CONFIG.gmailGun_domain;
    //     var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
    //     let link = "http://" + req.headers.host + "/v1/reset/" + user.resetPassword;
    //     var data = {
    //         from:CONFIG.from_emailId,
    //         to: email,
    //         subject: 'Password change request',
    //         text: `Hi ${user.name} \n
    //     Please click on the following link ${link} to reset your password. \n\n
    // If you did not request this, please ignore this email and your password will remain unchanged.\n`,
    //     };
    //     mailgun.messages().send(data, function (error, body) {
    //         if (error) {
    //             console.log(error);
    //         } else {
    //             return ReS(res, {message: 'A reset email has been sent to ' + user.email + '.'}, 200);
    //         }
    //         console.log("data", body);
    //     });
    }
    else{
        return ReE(res, { message: "User not found"}, 400);
    }
};
module.exports.recover = recover;

const reset = async function (req, res) {
    let err, user;
    const resetPassword = req.params.resetPassword;
    const resetPasswordExpires = {$gt: Date.now()};

    if (!ObjectId.isValid(req.user._id)) {
        return ReE(res, { message: "user id is wrong" }, 400);
    }
    [err, user] = await to(User.findOne({resetPassword: resetPassword}));
    console.log("user",user);
    if (err) {
        return ReE(res, err, 400);
    }
    if (user) {
        return ReS(res, {message: 'Password reset token is invalid or has expired.', user: user}, 200);
    }
    else{
        return ReE(res, { message: "User not found"}, 400);
    }
};
module.exports.reset = reset;

const resetPassword = async function (req, res) {
    // const api_key = CONFIG.gmailGun_apikey;
    // var domain = CONFIG.gmailGun_domain;
    // var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});

    User.findOne({resetPassword: req.params.token, resetPasswordExpires: {$gt: Date.now()}})
        .then((user) => {
            if (!user) return res.status(401).json({message: 'Password reset token is invalid or has expired.'});

            //Set the new password
            user.password = req.body.password;
            user.resetPassword = undefined;
            user.resetPasswordExpires = undefined;

            // Save
            user.save((err) => {
                if (err) return res.status(500).json({message: err.message});
                return ReS(res, {message: 'Your password has been updated.'}, 200);

                // send email
            //     const data = {
            //         to: user.email,
            //         from: CONFIG.from_emailId,
            //         subject: "Your password has been changed",
            //         text: `Hi ${user.name} \n
            //         This is a confirmation that the password for your account ${user.email} has just been changed.\n`
            //     };
            //
            //     mailgun.messages().send(data, function (error, body) {
            //         if (error) {
            //             console.log(error);
            //         } else {
            //             return ReS(res, {message: 'Your password has been updated.'}, 200);
            //         }
            //     });
            });
        });

};
module.exports.resetPassword = resetPassword;