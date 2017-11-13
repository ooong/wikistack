var express = require('express');
var app = express();
var morgan = require('morgan');
var fs = require('fs');
var path = require('path');
var bodyParser = require('body-parser');
var nunjucks = require('nunjucks');
var env = nunjucks.configure('views', {noCache: true});
var models = require('./models/index.js')               //connects to models-index.js





app.set('view engine', 'html');
app.engine('html', nunjucks.render);


app.use(express.static(__dirname + '/public'))

// app.get('/', function (req, res, next) {
// 	res.
// })


app.listen(3000, function () {
	console.log('listening on port 3000') ;
});
