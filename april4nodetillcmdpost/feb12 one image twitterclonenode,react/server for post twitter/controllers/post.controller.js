const  post = require('../models/post');
const mongoose = require('mongoose');
const mediaType =["video","photo"];
// var objectID = require('mongoose').ObjectID

/////////create post ////////////////
const createPost = async function (req, res) {

let mtype;
    if(req.file){
       mtype= req.file.mimetype.split('/')[0],
       mpath=req.file.path
    }
    else{
mtype='',
mpath=''
    }
    let err, poster,users;

    const reqbody = req.body;

    let location=[parseFloat(reqbody.l),parseFloat(reqbody.ll)];
        var objectId = mongoose.Types.ObjectId();
    
            reqPost = new post({
                _id:objectId,
              body:reqbody.body,
              visible:reqbody.visible,
              user:req.user,
              location:location,
              media:{
                mediatype:mtype,
                mediasource:mpath
              }
    
    
             });


    var objectId = mongoose.Types.ObjectId();
                reqPost._id=objectId;
    [err, poster] = await to(post.create(reqPost));
    
    if (err) {
        return res.json({err})
    } else {
        if (poster) {
            [err,users]= await to(post.find({_id:objectId}).sort({createdAt:-1})
            .populate( 'user' ,'-password'))

            console.log("hi",reqPost)
            console.log("hi",req.file)
           
            

            if (err)
            {
                return res.json({message: 'Something went wrong',err})
   
            }
            ReS(res,{ message: " post your list",poster:users[0]},200)

        }
    }
}
module.exports.createPost = createPost;





/////////////getallpost for common//////////////////
const getallpostcommon = async function (req, res) {


    
    [err, outofstock] = await to(post.find({}).sort({createdAt:-1}).populate('user','-password'))
 
     if (err || outofstock === null) {
         ReS(res,{ message: " post  not  exists in your list" },404)
 
     }
     else {
 
         if(outofstock){
             ReS(res,{ result:"successfully get your post details",message: outofstock },200)
 }
         else {
             return ReE(res, err, 500)
         }
     }
 }
 
 module.exports.getallpostcommon = getallpostcommon;
 


 /////////////getallpost for particular user//////////////////

 const getallpostsuser = async function (req, res) {


    
    [err, outofstock] = await to(post.find({user:req.user}).sort({createdAt:-1}).populate('user','-password'))
 
     if (err || outofstock === null) {
         ReS(res,{ message: " post  not  exists in your list" },404)
 
     }
     else {
 
         if(outofstock){
             ReS(res,{ result:"successfully get your post details",message: outofstock },200)
 }
         else {
             return ReE(res, err, 500)
         }
     }
 }
 
 module.exports.getallpostsuser = getallpostsuser;
 
  
//////////get onepost for user ///////////
const getoneposts = async function (req, res) {
    const  userid = req.user;

    const  postid = req.params.id;

    if(postid === 'undefined' || postid === ''){
        return ReE(res, {message:"please enter your postid"}, 500)
     }
 
    [err, outofstock] = await to(post.find({_id: postid,user:userid}).populate('user','-password'))
 
     if (err || outofstock === null) {
         ReS(res,{ message: " post  not  exists in your list" },404)
 
     }
     else {
 
         if(outofstock){
            ReS(res,{result:"successfully get your post details",message: outofstock},200)
 }
         else {
             return ReE(res, err, 500)
         }
     }
 }
 
 module.exports.getoneposts = getoneposts;
 
 
 
 

/////////update particular post for user /////////////
 const updatepost = async function (req, res) {

    
    let postid = req.params.id;
    let postvalue = req.body.body;


    if(postid === 'undefined' || postid === ''){
        return ReE(res, {message:"please enter your postid"}, 500)
     }

     if(postvalue === 'undefined' || postvalue === ''){
        return ReE(res, {message:"please enter your postvalue"}, 500)
     }
        
        [err, notexists] = await to(post.find({ _id:postid }))

        if (err || notexists === null)
        return ReE(res,{ message: "sorry you are given post id not exits" },404)

        else {
            [err, updated] = await to(post.update({ _id: postid },{$set:{body:postvalue}}))
        }
        if (updated) {

            [err, updateddatum] = await to(post.find({ _id: postid }).populate('user','-password'))
            return ReS(res, { message: 'postupdated', result: updateddatum }, 200)
        }
        else {
            return ReE(res, err, 500)
        }
    }

    
module.exports.updatepost = updatepost;

//////delete one post for user /////
const deleteonepost = async function (req, res) {
    let id = req.params.id
    let err,removedata,removed;

    if (typeof id === 'undefined' || id === '') {
        return ReE(res, { message: 'id was not entered' }, 400)
    }
    else {
        [err, removedata] = await to(post.find({ _id: id }));
       
        if (err || removedata === null || removedata.length<1)
            return ReS(res,{ message: "sorry you are given post not exits" },404);
       
        else{
        [err, removed] = await to(post.find({ _id: id }).remove());

        if (removed) {
       
            return ReS(res, { message: 'Successfully Deleted' }, 200)
        }else {
            return ReE(res, err, 500)
        }
    }
    }
}

module.exports.deleteonepost = deleteonepost;





/////////getoneWithupdatetrend /////

const getoneWithupdatetrend = async function (req, res) {

    const  postid = req.params.id;
  
    if (typeof postid === 'undefined' || postid === '') {
      return ReE(res, { message: 'please enter your postid' }, 401)
  }
      
      [err, outofstock] = await to(post.find({_id:postid}))
   
       if (err || outofstock === null) {
           ReS(res,{ message: " post  not  exists in your list" },401)
   
       }
       else {
   
           if(outofstock != null){
            [err,dat]  =await to(post.findByIdAndUpdate(outofstock[0]._id,{$set:{trendcount:outofstock[0].trendcount+1}}))
              ReS(res,{ result:"successfully get your post details",message: dat },200)
   }
           else {
               return ReE(res, err, 500)
           }
       }
   }
   
   module.exports.getoneWithupdatetrend = getoneWithupdatetrend;
   
   
   

const gettrendpost = async function (req, res) {


    
    [err, outofstock] = await to(post.find({}).sort({trendcount:-1}))
 
     if (err || outofstock === null) {
         ReS(res,{ message: " post  not  exists in your list" },401)
 
     }
     else {
 
         if(outofstock){
             ReS(res,{ result:"successfully get your trend post details",message: outofstock },200)
 }
         else {
             return ReE(res, err, 500)
         }
     }
 }
 
 module.exports.gettrendpost = gettrendpost;
 
 




 const addlike =async function(req,res)
 {
    // const product="5e6080c1c1e7b7198a2a2755";
    const product=req.user._id;
    //  console.log("hi",product._id)
   let ids = req.body.postid;
    
     let err,user;
     if(typeof product==='undefined'||product==='')
     {
         return res.json({message:"please select a user to add in your like list"})
     }
 
     if(typeof ids==='undefined'||ids==='')
     {
         
         return res.json({message:"post id is not defined"})
 
     }
    
 
 
     [err, duplicate] = await to(post.find({_id:ids,likes:product}))
 
     if (duplicate.length>=1) {
         res.json({ message: "you are given user already liked this post" })
 
     }
 
    
     else {
 
 
     [err,user]=await to(post.findByIdAndUpdate(ids,{$push:{likes:product}}))
 
     if(err)
     {
         return res.json({err})
     }
 
     else if(user!=null)
     {
 
             [err,users]=await to(post.findById(ids))
             console.log(ids);
             return res.json({message:"Product successfully added to like",user:users})
         
     }
 
     else{
         return res.json({message:"Something went wrong"})
     }
 }
     
 }
 
 module.exports.addlike = addlike;



 const getlike = async function(req,res){

    const postidlike=req.params.postid;
  

    let err,userwish,news;
    // if(typeof postidlike==='undefined'||postidlike==='')
    // {
    //     return res.json({message:"please enter your user id"})
    // }

    [err, userwish] = await to(post.find({likes:req.user._id,user:{_id:req.user.id}}).select('_id').populate('likes', '-password'))

    if (userwish=="") {
        res.json({ message: "you are given post is not exists in your likelist" })
    }
    else if(userwish!==""){

        console.log(userwish);
        res.json({ message: "sucessfully get all your posts likes list" ,result:userwish})
    }
    
   
    }
module.exports.getlike = getlike;



const removelike =async function(req,res)
{
    // const product= req.user;
    const product=req.user._id;
    // const product="5e6080c1c1e7b7198a2a2755";
    let ids = req.body.postid;

    let err,user;
    if(typeof product==='undefined'||product==='')
    {
        return res.json({message:"please select a user id to add in your like list"})
    }

    if(typeof ids==='undefined'||ids==='')
    {
        return res.json({message:"User id is not defined"})
    }
   

    [err, duplicate] = await to(post.find({_id:ids,likes:product}))

    if (duplicate.length<1) {
        res.json({ message: "you are given posid is not exists in your likelist" })

    }

    else {

    
    [err,user]=await to(post.findByIdAndUpdate(ids,{$pull:{likes:product}}))

    if(err)
    {
        return res.json({err})
    }

    else if(user!=null)
    {

            [err,users]=await to(post.findById(ids))

        return res.json({message:"Product successfully removed to likelist",user:users})
       
    }

    else{
        return res.json({message:"Something went wrong"})
    }
}
    
}

module.exports.removelike = removelike;





const cmdpost = async function (req, res) {
    
    // let ids = req.params.postid;
    // let postvalue = req.body.comments.commentsvalue;
    // let cmduser = req.body.comments.cmusers;
    let ids = req.body.postid;
    let cmdvalue = req.body.cmd;
    let cmduser = req.user._id;
    // console.log(cmduser)



    let err,user;
    if(typeof cmduser==='undefined'||cmduser==='')
    {
        return res.json({message:"please select a user to add in your cmd list"})
    }

    if(typeof ids==='undefined'||ids==='')
    {
        
        return res.json({message:"post id is not defined"})

    }
   

    [err, duplicate] = await to(post.find({_id:ids}))
 
    if (duplicate == null) {
        res.json({ message: "you are given post is not in this post list" })

    }

   
    else {

    

        [err,user]=await to(post.findByIdAndUpdate(ids,{$push:{comments:{cmusers:cmduser,commentsvalue:cmdvalue,cmdtime:new Date()}}}))
    if(err)
    {
        return res.json({err})
    }

    else if(user!=null)
    {

            [err,users]=await to(post.findById(ids))
            console.log(ids);
            return res.json({message:"Product successfully added to cmd",user:users})
        
    }

    else{
        return res.json({message:"Something went wrong"})
    }
}
    
}

    
module.exports.cmdpost = cmdpost;