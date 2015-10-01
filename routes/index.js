var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var config = require('../config.js');
var http = require('http');
var queryString = require('querystring');


var smtpTransport = nodemailer.createTransport("SMTP", {
  service: "Gmail",
    auth: {
      XOAuth2: {
        user: config.user,
        clientId: config.client_id,
        clientSecret: config.client_secret,
        refreshToken: config.refresh_token,
        accessToken: config.access_token,
        timeout: config.access_timeout - Date.now()
      }
    }
  });

router.post('/post', function(req, res, next) {
  var mailOptions = {
    from: req.body.email,
    to: config.user,
    subject: "Blog response from " + req.body.name,
    text : "From: " + req.body.name + "\n Email: "+ req.body.email +
    "\n Message:\n" + req.body.text
  }
  console.log("this is the email format", mailOptions);
  smtpTransport.sendMail(mailOptions, function(error, response){
    if(error){
      res.end("error: message not sent");
    }else{
      console.log("Message sent: " + response.message);
      res.end("message sent");
    }
    smtpTransport.close();
  });
});

//router.get('/', function(req, res, next) {
  //console.log('get received... data: ', req.body);
  //res.send("this is a successful response to a get Req");
//});

module.exports = router;
