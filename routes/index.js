var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/', function(req, res, next) {
  console.log('get received... data: ', req.body);
   // db.findAll()
   // .then(function(results){
      res.send("this is a successful response to a get Req");
    //})
   //.catch(function(err){
      //console.log("catch error index.js", err);
   //})
});
module.exports = router;
