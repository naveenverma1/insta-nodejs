// "use strict"

// const express = require('express')
// const jwt =require("jsonwebtoken")
// const router = express.Router();
// const User = require('../models/user')
// const bcrypt = require('bcryptjs')
// //var Joi = require('@hapi/joi');
// const verify = require('../verifytoken')
// const dontenv = require('dotenv');
// dontenv.config();



// var maincontroller= {}



// var handleDatabaseResponse = function(res, err, data, next) {
//     if (err) {
//       next(err);
//     } else {
//       if (data === null) {
//         res.send(404, 'Not found');
//       } else {
//         res.send(data);
//       }
//     }
//   };
// maincontroller.data = async function(req,res){
//     User.findById(req.params.id, function(err, user) {
//         user.name = req.body.name;
       
//         user.email = req.body.email;
//         user.save(function(err) {
//           handleDatabaseResponse(res, err, user, next);
//         });
//       });
// }

// module.exports = maincontroller;

    
