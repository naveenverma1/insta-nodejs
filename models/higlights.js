const mongoose = require('mongoose');




const highlightsSchema = new mongoose.Schema({
  //  _id: mongoose.Schema.Types.ObjectId,
profilepic: {
    type:String,
    required : true,   
},
highlightname : {
    type: String,
    required : true,   
},
createdat : {
    type : Date,
    default :Date.now
},

})

var Highlights=module.exports = mongoose.model('highligts',bookmarkSchema);