const mongoose = require('mongoose');




const userSchema = new mongoose.Schema({
  //  _id: mongoose.Schema.Types.ObjectId,
    name: {
        type :String,
        required : true,
    },
    email: {
        type: String,
       required : true,
       unique : true,
       index : true,
      match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
       
    },
    password : {
        type : String,
        required : true,    
        match :/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/   
    },
    phonenumber:{
        type : String,
        match: /^[0-9]{10}$/   
    },
    date : {
        type : Date,
        default :Date.now
    },
    profilepic : {
        type : String
    },
    website:{
        type :String
    },
    bio : {
        type :String
    },
    status: {
        type: String,

     enum: [
    "activate",
     "deactivate",     
       ]
    },
    following: [{ 

        type: mongoose.Schema.Types.ObjectId, 
        ref: 'user', 
        
      }],
      followers: [{ 

        type: mongoose.Schema.Types.ObjectId, 
        ref: 'user', 
        
      }],
})

var User=module.exports = mongoose.model('user',userSchema);