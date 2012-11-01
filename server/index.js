/*global module:false __dirname:false */
var config = require('./config'),
	express = require('express'),
	app = express();

app.configure('development', function () {
	console.log('In development mode');
	app.use(express['static'](__dirname + '/../src'));
});

app.configure('production', function () {
	console.log('In production');
	app.use(express['static'](__dirname + '/../dist'));
});

app.listen(config.port, config.host);
console.log('Listening on ' + config.host + ':' + config.port);

module.exports = app;
