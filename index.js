const express = require('express');
const app = express();
const port = 3000
const db = require('./config/mongoose');

app.use(express.json());

app.use('/', require('./routes'));

app.listen(port, function(err){
    if (err){
        console.log("Error in finding port", err);
    };
    console.log("port is running on port: ", port);
})