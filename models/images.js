const mongoose = require('mongoose');




const imageSchema = new mongoose.Schema({
  //  _id: mongoose.Schema.Types.ObjectId,
  user: { 

    type: mongoose.Schema.Types.ObjectId, 
    ref: 'user', 
  },
count : {
    type: String,
    required : true,   
},
image  : {
    type :String,
    required : true,   
},
quality : {
    type : String,
    required : true,   
},
size  : {
    type :String
}
})

var Images=module.exports = mongoose.model('image',imageSchema);