const mongoose = require('mongoose');




const emojiSchema = new mongoose.Schema({
  //  _id: mongoose.Schema.Types.ObjectId,
  emoji: {
      type :String,
      required : true,   
  }
})

var Emoji=module.exports = mongoose.model('emoji',emojiSchema);