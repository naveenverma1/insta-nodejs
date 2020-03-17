const express = require('express')
const app = express();

var mongoose = require('mongoose');
var bodyparser = require('body-parser')
const cors = require('cors')
const authroute = require("./routes/authroute")
const following = require("./routes/following")
const dontenv = require('dotenv');

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json())


 app.use('/uploads', express.static('uploads'));


 mongoose.connect(process.env.dbconnect, {useNewUrlParser: true,useUnifiedTopology: true});


var urlencodedParser = bodyparser.urlencoded({ extended: false })



mongoose.connection.on('connected',()=>{
    console.log('connected to databaseat at this port')
})
mongoose.connection.on('error',(err)=>{
    if(err)
    {
        console.log('error in database connection')
    } 
})

app.use('/api/user',authroute,following)
var swaggerUi = require('swagger-ui-express'),
    swaggerDocument = require('./swagger.json')

    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
   // app.use('/api/v1');


// app.use(verify.unless({
//     path: [
//       '/api/admin',
//       { url: '/', methods: ['GET', 'PUT','POST']  }
//     ]
//   }))

//app.use('/api/user',aproduct,cart,ccat)
//app.use('/api/admin',admin)


//  app.use((req, res, next) => {
//     const error = new Error();
//     error.message = 'Not Found';
//     error.status = 404;
//     next(error);
// });


// app.use((error, req, res, next) => {
//     res.status(error.status || 500).json({
//         error: error
//     });
// });

//app.use(paginate.middleware(5, 5));

app.listen(3000,() => console.log('server is running on 3000'));

module.exports = app