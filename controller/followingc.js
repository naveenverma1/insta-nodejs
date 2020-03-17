const express = require('express')
// const jwt =require("jsonwebtoken")
// const router = express.Router();
 const following = require("../models/following.js")
const User = require("../models/user.js")
//const verify = require('./verifytoke')

const dontenv = require('dotenv');
dontenv.config();


var thiscontroller ={}
thiscontroller.data = async function(req,res,next){

    var body = req.body
      
    console.log(body)

    
     User.updateOne(
        { _id:body._id },
        { $push:{followers:body.followers}},function(err,data)
     
     
{
          if(err)
       {

         res.status(401).json({massege:"mongoose error"}) 

       }
  
           else
       {
            console.log(data)
          res.status(200).json({data})

        }
    })
}

//  const cc=new  following({
//         //  _id: mongoose.Types.ObjectId(),
//            user: req.body.userId,
//           // username : req.body.username  // for trial  i will erase later

//        });
//        following.init()
//        try{
//         const saved =await cc.save();
//         res.send({
//                      message: 'you are follwing this user',


//                      following: {
//                          user: cc.user,
//                       // username: cc.username
//                      }
//                  });

//     }catch (err){
//         res.status(400).send(err);
//     }

// }


    // User.findOne({ name: req.body.name }, function(err, user) {

    //     user.followers.push(req.user._id);
    //     var followedUser = user._id;
    //     user.save(function(err){
    //         if(err){
    //             //Handle error
    //             //send error response
    //             res.status(400).send(err);
    //         }
    //         else
    //         {
    //             // Secondly, find the user account for the logged in user
    //             User.findOne({ name: req.user.name }, function(err, user) {
    
    //                 user.following.push(followedUser);
    //                 user.save(function(err){
    //                     if(err){
    //                         //Handle error
    //                         //send error response
    //                         res.status(400).send(err);
    //                     }
    //                     else{
    //                         //send success response
    //                         res.json({
    //                             message: "fewwww"
    //                         })
    //                     }

    //                 });
    //             });
    //         }
    //     });
    //     res.status(400).send(err)}
   
    // );

    // const cc=new  following({
    //     //  _id: mongoose.Types.ObjectId(),
    //        user: req.body.userId,
    //       // username : req.body.username  // for trial  i will erase later

    //    });
    //    following.init()
    //    try{
    //     const saved =await cc.save();
    //     res.send({
    //                  message: 'you are follwing this user',


    //                  following: {
    //                      user: cc.user,
    //                   // username: cc.username
    //                  }
    //              });

    // }catch (err){
    //     res.status(400).send(err);
    // }


thiscontroller.data = async function(req,res,next){
    //  const perPage = 9;
    // // //    //TODO: refactor below code further
    //    const page = req.params.page;
    

//  var pageNo = parseInt(req.query.pageNo)
//     var size = 5;
//     const query = {}
//     if(pageNo<0|| pageNo==0){
//         res.json({"error" : true,"message" :"inavlid page number"})
//     }
//     query.skip= size*(pageNo-1)
//     query.limit =  size
    //   .skip(perPage * page)
    //    .limit(perPage)
//     following
//       .find()
//       //.select('_id username')
// // .populate('category', '_id name')
// .populate('user')
// .exec()
// .then(followings => {
//     const response = {
//         count: followings.length,
//         followings: followings.map(following => {
//             return {
//                 username: following.username
//             }
//         })
//     };
//     res.status(200).json({
//         count : followings.length,
//         followings : followings,
//        // pages: count / perPage
//     });
// })
// .catch(error => {
//     res.send(error)
//    // next(error);
// })  


body=req.query;
    
User.find().
populate('followers').
exec(function (err, messege) {
  if (err) return handleError(err);
  console.log('The author is %s', messege.followers);
  res.status(200).json({data: messege.followers,
    count:messege.followers.length},
   )
})



}

module.exports = thiscontroller;