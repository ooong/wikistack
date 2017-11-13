var express = require('express');
var router = express.Router();
var models = require('../models');
var Page = models.Page; 
var User = models.User; 
module.exports = router;

console.log('we are in wiki!')

router.get('/', function(req, res, next) {
  console.log("redirected!");
  res.redirect('/')
  // res.send('got to GET /wiki/');
});

// router.post('/', function(req, res, next) {
//   res.send('got to POST /wiki/');
// });




router.get('/add', function(req, res, next) {
  console.log("this is router.get/add")
  res.render('addpage'); //send  html string back
  //render(view(path), obj to render, callback function(invokes next when error))
});

router.post('/add', function(req, res, next) {
  console.log("this is before Page.build");
  var page = Page.build({
    title: req.body.title,
    content: req.body.pageContent
  });
  page.save().then(function() {console.log("this is after page save")});
  res.json(page);
  // res.redirect('/');
});

router.get('/:urlTitle', function(req, res, next) {
  res.send('wiki/ ' + req.params.urlTitle);
})