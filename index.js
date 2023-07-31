// require all the required moduales
const express = require('express');
const app = express();
const port = 3000
const db = require('./config/mongoose');
const passport = require('passport');
const passportJWT = require('./config/passport_Jwt_stratergy');

// use the express json
app.use(express.json());

// use express router
app.use('/', require('./routes'));

// runing the port
app.listen(port, function(err){
    if (err){
        console.log("Error in finding port", err);
    };
    console.log("port is running on port: ", port);
})