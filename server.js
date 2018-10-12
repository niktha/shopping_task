"use strict"
var express = require('express');
var app = express();
var path = require('path');

// MIDDLEWARE TO DEFINE FOLDER FOR STATIC FILES
app.use(express.static('public'))


app.listen(7000, function(){
  console.log('app is listening on port 7000');
})
