const mongoose = require('mongoose');
const repliesSchema = new mongoose.Schema({
  userid : {
      type : String
  },
 text: {
     type : String
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
  comments: { 

    type: mongoose.Schema.Types.ObjectId, 
    ref: 'comments', 
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
var Replies=module.exports = mongoose.model('replies',repliesSchema);