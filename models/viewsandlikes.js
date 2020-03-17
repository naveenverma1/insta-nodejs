const mongoose = require('mongoose');




const userSchema = new mongoose.Schema({
  //  _id: mongoose.Schema.Types.ObjectId,
   views: {
       type : Number
   },
   count : {
       type : Number
   },
   user: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'user', 
    required: true
  },
follow: {
    type : String
},
date : {
    type : Date,
    default :Date.now
}

})

var Viewsandlikes=module.exports = mongoose.model('user',userSchema);