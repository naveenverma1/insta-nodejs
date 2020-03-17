const mongoose = require('mongoose');
const commentsSchema = new mongoose.Schema({
  userid : {
      type : String,
      required : true,   

  },
  caption : {
      type :String,
      required : true,   
  },
  text : {
      type :String,
      required : true,   
  },

  replies: { 

    type: mongoose.Schema.Types.ObjectId, 
    ref: 'replies', 
    required: true
  
  },
  user: { 

    type: mongoose.Schema.Types.ObjectId, 
    ref: 'user', 
    required: true
  },
  hashtags: { 

    type: mongoose.Schema.Types.ObjectId, 
    ref: 'hashtags', 
    required: true
  },

  likes: { 

    type: mongoose.Schema.Types.ObjectId, 
    ref: 'likes', 
    required: true
  },
 

  emoji: { 

    type: mongoose.Schema.Types.ObjectId, 
    ref: 'emoji', 
    required: true
  },
  message: { 

    type: mongoose.Schema.Types.ObjectId, 
    ref: 'message', 
    required: true
  },
    date : {
        type : Date,
        default :Date.now
    }

})
var Comments=module.exports = mongoose.model('comments',commentsSchema);