const mongoose = require('mongoose');

const hashSchema = mongoose.Schema({
   userid: {
       type : String,
       required : true,   
   },
    hashtags :{ 
       type :  String,
       required : true,   
    }
});


var Hashtags=module.exports = mongoose.model('hash', hashSchema);