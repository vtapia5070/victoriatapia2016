var express = require('express'),
router = express.Router(),
nodemailer = require('nodemailer'),
config = require('../config.js'),
http = require('http'),
passport = require('passport'),
GoogleStrategy = require('passport-google-oauth').OAuth2Strategy,
queryString = require('querystring'),
smtpTransport;


// exports.smtpTransport = nodemailer.createTransport("SMTP", {
//   service: "Gmail",
//     auth: {
//       XOAuth2: {
//         user: config.user,
//         clientId: config.client_id,
//         clientSecret: config.client_secret,
//         refreshToken: '',
//         accessToken: '',
//         //timeout: config.access_timeout - Date.now()
//       }
//     }
//   });

router.post('/post', function(req, res, next) {
  // var mailOptions = {
  //   from: req.body.email,
  //   to: config.user,
  //   subject: "Blog response from " + req.body.name,
  //   text : "From: " + req.body.name + "\n Email: "+ req.body.email +
  //   "\n Message:\n" + req.body.text
  // };
  // smtpTransport.sendMail(mailOptions, function(error, response){
  //   if(error){
  //     console.log("error is:", error);
  //     res.end("error: message not sent");
  //   }else{
  //     console.log("Message sent: " + response.message);
      res.end("message sent");
  //   }
  //   smtpTransport.close();
  // });
});

// router.get('/auth/google', passport.authenticate('google', 
//   { scope : 'https://mail.google.com/' }));

// router.get('/auth/google/callback',
//   passport.authenticate('google', {
//     successRedirect : '/',
//     failureRedirect : '/'
//   }));
// router.get('/login', function(req, res, next) {

//   console.log('get received... data: ', req.body);
//   res.send("this is a successful response to a get Req");
// });

module.exports = router;
