const mongoose = require('mongoose');




const messagelistSchema = new mongoose.Schema({
  //  _id: mongoose.Schema.Types.ObjectId,
  userid: {
      type:  mongoose.Schema.Types.ObjectId,
      required : true   
  },
  profilepic : {
      type: String,
      required : true  
  },
  name: {
      type :String,
      required : true  
  },
  lastmessage: {
      type :String,
      required : true   
  },
  newmessage: { type:String,
    required : true 
  },
  
})

var Messagelist=module.exports = mongoose.model('list',messagelistSchema);