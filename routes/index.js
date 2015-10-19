var express = require('express'),
router = express.Router(),
http = require('http'),
queryString = require('querystring'),
Firebase = require("firebase");

var onComplete = function(error) {
  if (error) {
    console.log('Synchronization failed', error);
  } else {
    console.log('Synchronization succeeded', error);
  }
};

var ref = new Firebase("https://amber-inferno-6109.firebaseio.com/");

var getTime = function () {
  var d = new Date(); 
  var hours = d.getHours();
  if (hours > 12) {
    hours-=12;
  }
  var date = d.getMonth() + '/' + d.getDate() + '/' + d.getFullYear();
  var time = hours + ' : ' + d.getMinutes();
  return  date + ' ' + time;
};

router.post('/post', function(req, res, next) {
  console.log("post req.body is", req.body);
  var newMessageRef = ref.push();
  newMessageRef.set({
    name: req.body.name,
    email: req.body.email,
    message: req.body.text,
    time: getTime()
  }, function(error) {
    if (error) {
      console.log('Synchronization failed', error);
    } else {
      res.send("message sent!");
      console.log('Synchronization succeeded', error);
    }
  });
});
router.get('/home', function (req, res, next){

}, function(error) {
    if (error) {
      console.log('Synchronization failed', error);
    } else {
      res.send("success");
      console.log('Synchronization succeeded', error);
    }
  });
router.get('/config.js', function (req, res, next){

}, function(error) {
    if (error) {
      console.log(error);
    } else {
      res.send("success");
      console.log( error);
    }
  });

module.exports = router;
