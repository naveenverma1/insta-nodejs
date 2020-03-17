const mongoose = require('mongoose');

const storiesSchema = mongoose.Schema({
  id : {
      type : Number,
      required : true,   
  },
  names : {
      type : string,
      required : true,   
  },
  profilepic : {
      type : Image,
      required : true,   
  },
  user: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'user', 
    required: true
  },
  status: {
    type: string,
  
 enum: [
unseen,
 seen,
 mute
   ]

},
date : {
  type : Date,
  default :Date.now
},
count : {
  type : Number,
  required : true,   
},
posttype: { 
  type: mongoose.Schema.Types.ObjectId, 
  ref: 'posttype', 
  required: true
}

});
productSchema.plugin(mongooseAggregatePaginate);
var Stories=module.exports = mongoose.model('stories', productSchema);