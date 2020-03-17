const mongoose = require('mongoose');




const followingSchema = new mongoose.Schema({
  //  _id: mongoose.Schema.Types.ObjectId,
  user: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'user', 
    //required: true
    
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
  following:{
      type: String
  }
})

var Following=module.exports = mongoose.model('following',followingSchema);