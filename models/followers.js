const mongoose = require('mongoose');




const follwersSchema = new mongoose.Schema({
  //  _id: mongoose.Schema.Types.ObjectId,
  user: { 

    type: mongoose.Schema.Types.ObjectId, 
    ref: 'user', 
    required: true
  },
  profilepic:{
    type :String
},
username: {
    type: String
},
  fullname:{
      type:String
  },
  
  following: { 

    type: mongoose.Schema.Types.ObjectId, 
    ref: 'following', 
    required: true
  }
  
})

var Folllowers=module.exports = mongoose.model('followers',follwersSchema);