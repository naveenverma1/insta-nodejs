const mongoose = require('mongoose');
const adminSchema = new mongoose.Schema({
    name: {
        type :String,
        required : true,
    },
    email: {
        type: String,
       required : true,
       unique : true,
       index : true,
       match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
       
    },
    password : {
        type : String,
        required : true,
        match :/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/         
    },
    phonenumber:{
        type : String,
        match: /^[0-9]{10}$/   
    },
    date : {
        type : Date,
        default :Date.now
    }
})
 var admin =  module.exports= mongoose.model('admin',adminSchema);