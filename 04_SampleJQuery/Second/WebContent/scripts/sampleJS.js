$(document).ready(function(){
	"use strict"
	
	
	$("div#col1 h2 a").css("background", "purple");
	$("div#col2 h2 a").css("background", "green");
	$("div#col3 h2 a").css("background", "red");
	$("div#col4 h2 a").css("background", "blue");
	$("div#col1").css("background", "orange");
	
	$("form#searchform").css({
		"position": "relative",
		"top": "43px",
		"background": "cyan"
	});

	function mouseOver(selector, name) {
		$(selector).on("mouseenter", function() {
			console.log("mouse over - "+name);
		});
	}

	mouseOver("div.menu-top-level-menu-container ul li#menu-item-2912", "УЧИЛИЩЕ");
	mouseOver("div.menu-top-level-menu-container ul li#menu-item-2933", "ЗАЩО ТУЕС?");
	mouseOver("div.menu-top-level-menu-container ul li#menu-item-2913", "ПРИЕМ");
	mouseOver("div.menu-top-level-menu-container ul li#menu-item-2911", "СЪОБЩЕНИЯ");
	mouseOver("div.menu-top-level-menu-container ul li#menu-item-2914", "БЛОГ");



	$("div#home").css({
		"border": "1px solid black",
		"width": "1000px",
		"background": "#CCC"

	});
	 

	$('div#col3 a[href="http://www.elsys-bg.org/blog/article/sports-day-2014/"]').css("background", "yellow");
	$('div#col2 a[href="http://www.elsys-bg.org/notifications/new-deklaration-white-school/"]').css("background", "gray");
	$('div#col2 a[href="http://www.elsys-bg.org/notifications/white-school-2014-2015/"]').css("background", "magenta");
	
});