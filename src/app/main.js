/**
 * This is our main application file, where all the everything else gets spun up. Woo!
 */
define([], function(){
	// Our application singleton
	var app = {};

	// Not really doing... anything just yet
	app.init = function(){
		var div = document.createElement('div');
		div.innerHTML = 'Hello World!';
		document.body.appendChild(div);
	};

	return app;
});
