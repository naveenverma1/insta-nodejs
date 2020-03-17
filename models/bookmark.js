const mongoose = require('mongoose');




const bookmarkSchema = new mongoose.Schema({
  //  _id: mongoose.Schema.Types.ObjectId,

  posttype: { 

    type: mongoose.Schema.Types.ObjectId, 
    ref: 'posttype', 
    required: true
  
  }
  
})

 var Bookmark =module.exports = mongoose.model('bookmark',bookmarkSchema);