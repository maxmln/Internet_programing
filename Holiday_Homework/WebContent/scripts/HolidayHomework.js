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
});
