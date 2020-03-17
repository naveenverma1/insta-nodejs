
const mongoose = require('mongoose');




const messageSchema = new mongoose.Schema({
  //  _id: mongoose.Schema.Types.ObjectId,

  
  id: {
      type:String,
      required : true,   
  },
  seconduserid:{
      type:String,
      required : true,   
  },
  senddate : {
    type : Date,
    default :Date.now
  },



profilepic: {
    type:String
},
soundrecorder: {
    type:String
},
like: { 

    type: mongoose.Schema.Types.ObjectId, 

    ref: 'like', 
    required: true
  },
lastseen : {
    type : Date,
    default :Date.now
},
reciveDate: {
    type : Date,
    default :Date.now
},
image : {
    type: String
},
videos: {
    type: String
},
myloc: {
    type:String
},
contact: {
    type:String
},
doc: {
    type:String
},
emoji: { 

    type: string, 
    ref: 'emoji', 
    required: true
  },
  status: {
    type: string,
  
 enum: [
blocked,
unblocked
   ]

},
senderid : {
    type : String
},recievervid : {
    type : String
}



})

var Messages=module.exports = mongoose.model('message',messageSchema);


