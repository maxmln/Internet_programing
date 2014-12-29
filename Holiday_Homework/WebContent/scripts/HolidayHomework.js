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
	
	// Task 11
	function appendToList(list, post) {
		var newElement = $("<li/>");
		newElement.text(post.title);
		list.append(newElement);
	}
	
	function getPosts(response) {
		var list = $("ul#posts");
		var i = 0;

		$.each(response, function() {
			appendToList(list, this);
			if(++i >= 5) {
				return false;
			}
		});
	}
	$.ajax("http://jsonplaceholder.typicode.com/posts", {
		method: "GET"
	}).then(getPosts);
	
   
	
	var checkForText = function() {
                var name = $("input#textinput").val();
               // Task 12
                if(!name) {
                        alert("you must enter text");
                        return;
                }else{
                // Task 13
                         $.ajax('http://jsonplaceholder.typicode.com/posts', {
                                  method: 'POST',
                                  data: {
                                            title: 'newTitle',
                                            body: name,
                                            userId: 1,
                                  }
                                }).then(function(data) {
                                        console.log("Data send")
                                        
                                        //Task 14 and 15
                                        var id = ($(data).attr("id"))
                                        $.ajax('http://jsonplaceholder.typicode.com/posts'+id, {
                                                method: "GET"  
                                                }).then(function(dataResponse){
                                                        var list = $("#posts");
                                                        var i = 0;
                                                                var newElement = $("<li>");
                                                                newElement.append($(dataResponse).attr("body"));
                                                                newElement.append("</li>")
                                                                newElement.append("<button id='xbtn'>x</button>")
                                                                list.append(newElement);
                                                               
                                                       
                                                });
                });
        }
};
 $("button#addbutton").click(checkForText);
});
