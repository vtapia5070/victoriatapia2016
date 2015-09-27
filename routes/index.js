var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var config = require('../config.js')
/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
//client id 1075688047085-5ojdohkptkpsdrk3ivu7ie6jh801iag1.apps.googleusercontent.com
//client secret: HTkRws1KGozqD35vYeyRpIgx

var smtpTransport = nodemailer.createTransport("SMTP", {
  service: "Gmail",
    auth: {
      XOAuth2: {
        user: config.user,
        clientId: config.client_id,
        clientSecret: config.client_secret,
        //refreshToken: config.refresh_token,
        //accessToken: config.access_token,
        //timeout: config.access_timeout - Date.now()
      }
    }
  });


router.post('/post', function(req, res, next) {
  console.log('post received...', req.body);
  var mailOptions = {
    from: req.body.email,
    subject: "Blog response from " + req.body.name,
    text : req.body.text
  }
  console.log("this is the email format", mailOptions);
  smtpTransport.sendMail(mailOptions, function(error, response){
    if(error){
      console.log(error);
      res.end("error");
    }else{
      console.log("Message sent: " + response.message);
      res.end("sent");
    }
  });
});

router.get('/', function(req, res, next) {
  console.log('get received... data: ', req.body);
  res.send("this is a successful response to a get Req");
});

module.exports = router;
