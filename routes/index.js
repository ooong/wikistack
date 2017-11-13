var express = require('express');
var router = express.Router();
module.exports = router;

const wikiRouter = require('./wiki');
const userRouter = require('./user');
// ...
router.use('/wiki', wikiRouter);
console.log('we are in routes!')
// or, in one line: router.use('/wiki', require('./wiki'));

