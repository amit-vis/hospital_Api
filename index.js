const express = require('express');
const app = express();
const port = 3000
const db = require('./config/mongoose');
const passport = require('passport');
const passportJWT = require('./config/passport_Jwt_stratergy');
const bodyParser = require('body-parser');

app.use(express.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())


app.use('/', require('./routes'));

app.listen(port, function(err){
    if (err){
        console.log("Error in finding port", err);
    };
    console.log("port is running on port: ", port);
})