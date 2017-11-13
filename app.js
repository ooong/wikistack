var express = require('express');
var app = express();
var morgan = require('morgan');
var fs = require('fs');
var path = require('path');
var bodyParser = require('body-parser');
var nunjucks = require('nunjucks');
var env = nunjucks.configure('views', {noCache: true});
var models = require('./models/index.js')          //connects to models-index.js
var routes = require('./routes'); //by default ot will go to index.js




app.set('view engine', 'html'); //(name, value)
app.engine('html', nunjucks.render);


app.use(express.static(__dirname + '/public'))
<<<<<<< HEAD

=======
app.use(function (req, res, next) {
	console.log('req.method & path: ', req.method, req.path);
	next();
})
app.use('/', routes); //actually using methods in routes
// app.get('/', function (req, res, next) {
// 	res.
// })
>>>>>>> 0a10c363b5e7613f0b6d5bb8d504440a098bb08c

// models.db.sync({})
// .then(function () {
// 	app.listen(3000, function() {
// 		console.log('listening on port TEST');
// 	})
// })
// .catch(console.error);

// app.listen(3000, function () {
// 	console.log('listening on port 3000') ;
// });

// make sure you are exporting your db from your models file
models.db.sync({force: true})
.then(function () {
    // make sure to replace the name below with your express app
    app.listen(3000, function () {
        console.log('Server is listening on port 3000!');
    });
})
.catch(console.error);
