var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongodb = require('mongodb');
var router = express.Router();
var https = require('https');
var app = express();

/*
   Mongodb setup
*/
var url = 'mongodb://127.0.0.1:27017/pushNotifyDB';
var MongoClient = mongodb.MongoClient;

//setting up express
app.use(bodyParser.urlencoded({
  extended: false,
  limit: '50mb'
}));
app.use(bodyParser.json({
  limit: '50mb'
}));
app.use(cors());
app.use(express.static('public'));

app.post('/login', function(req, res) {
  var userName = req.body.userName;
  var password = req.body.password;

  console.log(userName + " " + password);

  res.send("success");
})

/*
https.createServer(options, app).listen(8005, function() {
  console.log('running on port 8005');
});
*/
app.listen(8005, function() {
  console.log("Local Running");
});
