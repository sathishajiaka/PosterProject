const express 			= require('express');
const router 			= express.Router();
const passport      	= require('passport');
const path              = require('path');
const postController = require('../controllers/post.controller')


const Usercontroller = require('../controllers/user.controller');
const isEmpty = require('is-empty')
const cuser=require('../models/user.model')
const {to, ReE, ReS} = require('../services/util.service');

require('./../middleware/passport')(passport)
/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({status:"success", message:"Poster API", data:{"version_number":"v0.1.0"}})
});
const auth = passport.authenticate('jwt', {session: false});
require('./../middleware/passport')(passport);

router.post('/register', Usercontroller.create);
router.post('/login', Usercontroller.login);

router.put('/user', auth, Usercontroller.update);
router.get('/users', auth, Usercontroller.getAll);
router.get('/user', auth, Usercontroller.get);
router.delete('/user/:id', auth, Usercontroller.remove);

router.post('/recover',auth, Usercontroller.recover);
router.get('/rest/:resetPassword',auth, Usercontroller.reset);
router.post('/restPassword/:token',auth, Usercontroller.resetPassword);
router.post("/create",(req,res)=>{
    
  //checking the productid

  
 //validating 
  
        const reg = new news({
            profilename:req.body.profilename,
            hashtag:req.body.hashtag
          
        })
        reg.save().then(datas=>{
           ReS(res,{datas},200)
        }).catch(err=>{
            console.log(err)
        })
         
});




router.get('/showpeo',(req,res)=>{
  
 
cuser.find({},{}).sort().then(value=>{
    ReS(res,{message:"profile and posts",value},200)
  }).catch(err=>{
      console.log(err)
  })
  
});



router.get('/showpeo/:userName',(req,res)=>{
  const valu= req.params.userName;
 
cuser.find({userName:{'$regex':valu}},{userName:1},{}).then(value=>{
  if(isEmpty(value)){
    ReE( res,{message:"there is no record"},400)
  }
  else{
    ReS(  res,{message:"succesfully Found",value},200)
  }
  }).catch(err=>{
      console.log(err)
  })
  
});


router.get('/showhashtag/:hashtag',(req,res)=>{
  const valus= req.params.hashtag;
 
  cuser.find({hashtag:{'$regex':valus}},{hashtag:1}).then(value=>{   
  if(isEmpty(value)){
    ReE ( res,{message:"there is no record"},400)
   }
   else{
      ReS(res,{message:"succesfully Found",value},200)
   }
  }).catch(err=>{
      console.log(err)
  })

});

router.get('/gettimeline/:_id',(req,res)=>{
  const valus= req.params._id;
 
  cuser.find({_id:valus}).then(value=>{
  if(isEmpty(value)){
      ReE(res,{message:"there is no record"},400)
   }
   else{
      ReS(res,{message:"succesfully Found",value},200) 
   }
  }).catch(err=>{
      console.log(err)
  })

});




//////////////////////////////////////////////////



let
    multer = require('multer'),
    uuidv4 = require('uuid/v4');

// const DIR = require('../uploads');
const DIR = './uploads';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, DIR);
    },
    filename: (req, file, cb) => {
        const fileName = file.originalname.toLowerCase().split(' ').join('-');
        cb(null, uuidv4() + '-' + fileName)
    }
});

var upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
        }
    }
});





/* poster crud   */

router.post(  '/createPost',upload.single('imgCollection') ,auth,postController.createPost);
router.get(  '/getallpostcommon' ,postController.getallpostcommon);
router.get(  '/getallpost',auth ,postController.getallpostsuser);
router.get(  '/getonepost/:id',auth ,postController.getoneposts);
router.put(  '/updatepost/:id' ,auth,postController.updatepost);
router.delete(  '/deleteonepost/:id',auth ,postController.deleteonepost);
router.get('/getoneWithupdatetrend/:id',postController.getoneWithupdatetrend);
router.get('/gettrendingpost',postController.gettrendpost)


router.put('/addlike',auth,postController.addlike)
router.get('/getlike',auth,postController.getlike)

router.put('/removelike',auth,postController.removelike)


router.put('/addcmd',auth,postController.cmdpost)








module.exports = router;