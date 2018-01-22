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
var url = 'mongodb://127.0.0.1:27017/urbanScienceHybridApp';
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

  login(userName, result(err, result) {
    if (err) {
      res.send(err);
    } else if (result) {
      //do password checks
      //if Success
      res.send(true);
    }
  })
})

app.post('/submitForm', function(req, res) {
  var form = req.body.form;

  submitForm(form, function(err, result) {
    if (err) {
      res.send(err);
    } else if (result) {
      res.send(true);
    }
  })
})

app.post('/getAllForms', function(req, res) {
  getAllForms(function(err, result) {
    if (err) {
      res.send(err);
    } else if (result) {
      res.send(result);
    }
  })
})

/*
https.createServer(options, app).listen(8005, function() {
  console.log('running on port 8005');
});
*/
app.listen(8005, function() {
  console.log("Local Running");
});

login(userName, callback) {
  MongoClient.connect(url, function(err, db) {
    if (err) {
      console.log(err);
    } else {
      console.log("We are connected to UserAccounts");
    }
    var collection = db.collection('UserAccounts');
    collection.findOne({
      "account.userName": userName
    }, function(err, result) {
      if (err) {
        console.log(err);
      } else if (result) {
        callback(result);
      }
    });
    db.close();
  });
}

submitForm(form, callback) {
  MongoClient.connect(url, function(err, db) {
    if (err) {
      console.log(err);
    } else {
      console.log("We are connected to submit form");
    }
    var collection = db.collection('Forms');
    collection.insert(form, function(err, result) {
      if (err) {
        console.log(err);
      } else if (result) {
        callback(result);
      }
    });
    db.close();
  });
}

getAllForms(callback) {
  MongoClient.connect(url, function(err, db) {
    if (err) {
      console.log(err);
    } else {
      console.log("We are connect to get all forms");
    }
    var collection = db.collection('Forms');
    collection.find().toArray(function(err, result) {
      if (err) {
        callback(err);
      } else if (result) {
        callback(result);
      }
    });
  })
}
