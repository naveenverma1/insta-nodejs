const router = require('express').Router();

const following = require('../models/followers')
const controler = require('../controller/follower')
const verify  = require("../verifytoken")
const multer = require('multer');


const storage = multer.diskStorage({

    destination: function (req, file, cb) {
        cb(null, 'uploads/');

    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});



// const fileFilter = (req, file, cb) => {
//     if (file.mimetype === 'image/jpeg' || file.imagetype === 'image/png') {
//         cb(null, true);
//     }
//     else {
//         cb(null, false);
//     }
// };





const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5
    }
    // fileFilter: fileFilter
});




router.post('/followme', function(req, res) {
    controler.follow(req, res);
  });
  router.get('/followers', verify,function(req, res) {
    controler.data(req, res);
  });

 


module.exports = router;