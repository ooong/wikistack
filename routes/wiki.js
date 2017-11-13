var express = require('express');
var router = express.Router();
module.exports = router;

console.log('we are in wiki!')

router.get('/', function(req, res, next) {
  console.log('trying to GET something!', req)
  res.send('got to GET /wiki/');
});

router.post('/', function(req, res, next) {
  res.send('got to POST /wiki/');
});

router.get('/add', function(req, res, next) {
  res.render('addpage'); //send  html string back
  //render(view(path), obj to render, callback function(invokes next when error))
});
