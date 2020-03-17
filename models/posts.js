const mongoose = require('mongoose');

const postsSchema = mongoose.Schema({
    name:{
      type : String,
      required : true,   
    },
    picture : {
      type : String,
      required : true,   
    },
    caption : {
      type :String,
      required : true   
    },
    sponsered: {
      type : String,
      required : true,   
    },
    viewsandlikes: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'likes', 
      required: true  
    },
    posttype: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'posttype', 
      required: true
    },
    comments: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'comments', 
      required: true
    
    },
    hashtags: { 

      type: mongoose.Schema.Types.ObjectId, 
      ref: 'hashtags', 
      required: true
    
    },
    message: { 

      type: mongoose.Schema.Types.ObjectId, 
      ref: 'message', 
      required: true
    
    }, user: { 

      type: mongoose.Schema.Types.ObjectId, 
      ref: 'user', 
      required: true
    },
    bookmark: { 

      type: mongoose.Schema.Types.ObjectId, 
      ref: 'posttype', 
      required: true
    
    },
    date : {
      type : Date,
      default :Date.now
  }
    
    
});


var Posts=module.exports = mongoose.model('Posts', cattSchema);