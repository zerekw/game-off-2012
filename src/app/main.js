/**
 * This is our main application file, where all the everything else gets spun up. Woo!
 */
define([
	"socket.io",
	"./ui/Desktop"
], function(io, AppUI){
	var app = {};

	// Make a UI!
	app.init = function(){
		// Set up our socket
		var socket = this.socket = io.connect();

		// Instantiate our primary UI
		var ui = this.ui = new AppUI({
			socket: socket
		}).placeAt(document.body);
		ui.startup();
	};

	return app;
});
