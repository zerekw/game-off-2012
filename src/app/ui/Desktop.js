define([
	"dojo/_base/declare",
	"dijit/_WidgetBase",
	"dijit/_TemplatedMixin",
	"dojo/text!./templates/Desktop.html",
	"dijit/layout/BorderContainer",
	"dijit/layout/ContentPane"
], function(declare, _WidgetBase, _TemplatedMixin, template, BorderContainer, ContentPane){
	return declare([_WidgetBase, _TemplatedMixin], {
		baseClass: "app",
		templateString: template,
		socket: null
	});
});
