
// require
const express = require('express');
const http = require('http');
const dotenv = require('dotenv');
const colors = require('colors');
const pageroute = require('./routes/pageroute')


// setup environment
dotenv.config();
const port = process.env.PORT || 4040;

// init express
const app = express();

//manage data
app.use(express.json());
app.use(express.urlencoded({ extended : false }));

//static folder
app.use('/public', express.static('public'));

// route
app.use( pageroute)

//server listen
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`.bgGreen.black);
})