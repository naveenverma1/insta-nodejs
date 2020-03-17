const mongoose = require('mongoose');




const videosSchema = new mongoose.Schema({
  //  _id: mongoose.Schema.Types.ObjectId,

  user: { 

    type: mongoose.Schema.Types.ObjectId, 
    ref: 'user', 
    
  },
  duration : {
      type : String,
      required : true,   
  },
  count : {
      type: String,
      required : true,   
  },
  video  : {
      type :String,
      required : true,   
  },
  quality : {
      type : String,
     
  },
  size  : {
      type :String,
        

      
  }
})

var Videos=module.exports = mongoose.model('videos',videosSchema);