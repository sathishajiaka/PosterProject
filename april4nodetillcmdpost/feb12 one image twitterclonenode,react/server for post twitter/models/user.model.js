const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const validate = require('mongoose-validator');
const CONFIG = require('../config/config');
const {TE, to} = require('../services/util.service');
const Schema = mongoose.Schema;
const crypto = require('crypto');

const UserSchema = new mongoose.Schema({
    email: {
        type: String, required: true, unique: true, index: true, sparse: true,
        validate: [
            validate({
                validator: "isEmail",
                message: "please enter the vaild Email Id"
            })
        ],
    },
    lastName:{
        type: String,
        required: true,
    },
    firstName:{
        type:String,
        required: true,
    },
    userName: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        minlenght: 8
    },
    phone: {
        type: String, unique: true, //sparse is because now we have two possible unique keys that are optional
        validate: [
            validate({
                validator: 'isNumeric',
                arguments: [7, 20],
                message: 'Not a valid phone number.',
            })],
    },
    countryCode: {
        type: String,
    },
    _coordinates: {
        type: [Number],
        index: '2dsphere',
        default: [0, 0],
    },
    favorites:{type:Array},

    photo:{
        type:String
    },
    bio:{type:String,
        maxlength:160,
        required: true

    },
    resetPassword:{
        type: String,
        required: false
    },
    resetPasswordExpires:{
        type: Date,
        required: false
    }
}, {timestamps: true});


UserSchema.path('_coordinates').validate(function (value) {
    return (
        Array.isArray(value) &&
        value.length === 2 &&
        'number' === typeof value[0] &&
        'number' === typeof value[1]
    );
}, 'Invalid location. Should be geoJSON');

// Setters, Getters
UserSchema.virtual('location').set(function (location) {
    if ((Array.isArray(location) && location.length === 2)) {
        this._coordinates = location;
    } else if (location === Object(location) &&
        location.type && location.type === 'Point' &&
        location.coordinates && location.coordinates.length === 2
    ) {
        this._coordinates = location.coordinates;
    }
})
    .get(function () {
        return {
            "type": "Point",
            "coordinates": this._coordinates,
        }
    });



UserSchema.methods.comparePassword = async function (pw) {
    let err, pass;
    if (!this.password) TE('password not set');
    [err, pass] = await to(bcrypt.compare(pw, this.password));
    if (err) TE(err);

    if (!pass) TE('Email & password does not match.');

    return this;
};

UserSchema.methods.getJWT = function () {
    const today = new Date();
    const expirationDate = new Date(today);
    expirationDate.setDate(today.getDate() + 60);
    let expiration_time = parseInt(CONFIG.jwt_expiration);
    return "Bearer " + jwt.sign({user_id: this._id}, CONFIG.jwt_encryption, {expiresIn: expiration_time},
        {expiresIn: parseInt(expirationDate.getTime() / 1000, 10)});
};

UserSchema.methods.toWeb = function () {
    let json = this.toJSON();
    json.id = this._id;//this is for the front end
    return json;
};

UserSchema.pre('save', async function (next) {

    if (this.isModified('password') || this.isNew) {

        let err, salt, hash;
        [err, salt] = await to(bcrypt.genSalt(10));
        if (err) TE(err.message, true);

        [err, hash] = await to(bcrypt.hash(this.password, salt));
        if (err) TE(err.message, true);

        this.password = hash;

    } else {
        return next();
    }
});

UserSchema.methods.generatePasswordReset = function() {
    this.resetPassword = crypto.randomBytes(20).toString('hex');
    this.resetPasswordExpires = Date.now() + 3600000; //expires in an hour
};

mongoose.set('useFindAndModify', false);

const UserModel = module.exports = mongoose.model('User', UserSchema);