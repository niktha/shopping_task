var express = require('express');

var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');


var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());


app.listen(1342, function(err) {
  if(err){
    return console.log("err", err);
  }
  console.log("APP API SERVER IS RUNNING IN PORT 1342");
})

