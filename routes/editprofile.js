// const router = require('express').Router();

// const User = require('../models/user')
// const controler = require('../controller/usercontrolller')
// const verify  = require("../verifytoken")
// const multer = require('multer');


// const storage = multer.diskStorage({

//     destination: function (req, file, cb) {
//         cb(null, 'uploads/');

//     },
//     filename: function (req, file, cb) {
//         cb(null, file.originalname);
//     }
// });

// // const fileFilter = (req, file, cb) => {
// //     if (file.mimetype === 'image/jpeg' || file.imagetype === 'image/png') {
// //         cb(null, true);
// //     }
// //     else {
// //         cb(null, false);
// //     }
// // };


// const upload = multer({
//     storage: storage,
//     limits: {
//         fileSize: 1024 * 1024 * 5
//     }
//     // fileFilter: fileFilter
// });



//   router.post('/:_id', verify,function(req, res) {
//     controler.data(req, res);
//   });
// module.exports = router;