const mongoose = require('mongoose');

const postypeSchema = mongoose.Schema({
            // _id: mongoose.Schema.Types.ObjectId,

            videos: { 

              type: mongoose.Schema.Types.ObjectId, 
              ref: 'videos', 
              required: true
            },
            images: { 

              type: mongoose.Schema.Types.ObjectId, 
              ref: 'message', 
              required: true
            },
  
    gif : {
      type : String 
    },
    Ad: {
      type : String
    }
});

var Posttype=module.exports = mongoose.model('posttype', postypeSchema);