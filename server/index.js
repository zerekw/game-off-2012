/*global module:false __dirname:false */
var config = require('./config'),
	express = require('express'),
	app = express(),
	server = require('http').createServer(app),
	io = require('socket.io').listen(server);

app.configure('development', function () {
	console.log('In development mode');
	app.use(express['static'](__dirname + '/../src'));
});

app.configure('production', function () {
	console.log('In production');
	app.use(express['static'](__dirname + '/../dist'));
});

io.sockets.on('connection', function(socket){
	console.log('Connection!');
});

server.listen(config.port, config.host);
console.log('Listening on ' + config.host + ':' + config.port);

module.exports = app;
