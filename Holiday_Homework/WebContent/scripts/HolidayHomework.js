$(document).ready(function() {
	"use strict"
	// Task 2
	console.log($(".tu").attr("title"));
	// Task 3
	console.log($("#col1 p").text());
	// Task 4
	var $element = $("<li id='menu-item-last' > <a href=>new button</a></li>");
	var list = $("ul#menu-top-level-menu");
	list.append($element);
	// Task 5
	var $element = $("<div id=dynamiccontent></div>");
	var div = $("div#footer");
	div.prepend($element);
	// Task 6
	var $element = $("<input id='textinput'>");
	var div = $("div#dynamiccontent");
	div.append($element);
	// Task 7
	var $element = $("<button id='addbutton'>Add</button>");
	var div = $("div#dynamiccontent");
	div.append($element);
	// Task 8	
	var $element = $("<ul id='posts'></ul>");
	var div = $("div#dynamiccontent");
	div.append($element);
	// Task 9
	$("ul#menu-top-level-menu.menu li#menu-item-last").click(function(){
		alert("Hello World");
		// Task 10
		$("div#col2").insertBefore("div#col1");
	});
});
