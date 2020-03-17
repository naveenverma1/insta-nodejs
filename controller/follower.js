const express = require('express')
const jwt =require("jsonwebtoken")
const router = express.Router();
const followers = express("../models/followers.js")
const User = express("../models/user.js")
//const verify = require('./verifytoke')

const dontenv = require('dotenv');
dontenv.config();

var thiscontroller= {}

thiscontroller.follow = async function(req,res,next){


    const cc=new  followers({
        //  _id: mongoose.Types.ObjectId(),
           user: req.body.userId,
           username : req.body.username  // for trial  i will erase later
           

       });
   

       
       followers.init()
       try{
        const saved =await cc.save();
        res.send({
                     message: 'you are followed by this user',
                     following: {
                        // _id: cc._id,
                         username: cc.username,
                        
                     }
                 });

    }catch (err){
        res.status(400).send(err);
    }
}



thiscontroller.data = async function(req,res,next){
    var pageNo = parseInt(req.query.pageNo)
    var size = 5;
    const query = {}
    if(pageNo<0|| pageNo==0){
        res.json({"error" : true,"message" :"inavlid page number"})
    }
    query.skip= size*(pageNo-1)
    query.limit =  size


      following
      .find({} ,{} ,{query})
      .select('_id username')
// .populate('category', '_id name')
.populate('user')
.exec()
.then(followings => {
    const response = {
        count: followings.length,
        followings: followings.map(following => {
            return {
                username: following.username
            }
        })
    };

    res.status(200).json({
        count : followings.length,
        followings : followings
    });
})
.catch(error => {
    res.send(error)
   // next(error);
})        
}
module.exports = thiscontroller;