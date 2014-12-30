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
	
   
	// Task 12
	var count = 0;
	var count2=0;
	$("button#addbutton").click(function() {
				
				var name = $('input#textinput').val();
               
                if(!name) {
                        alert("you must enter text");
                        return;
                }else{ //Task 13
						var newId=0;
                         $.ajax('http://jsonplaceholder.typicode.com/posts', {
                                  method: 'POST',
                                  data: {
                                            title: name,
                                            body: 'body',
                                            userId: 1,
											id: (100+count)
                                  }
                                }).then(function(data) {
                                        console.log("Data send")
										newId = data.id;
										
                                        //Task 14
                                        $.ajax('http://jsonplaceholder.typicode.com/posts'+newId, {
                                                method: "GET"  
                                                }).then(function(data2){
														count++;
                                                        var list = $("ul#posts");
														var newElement = $("<li>"+(data.title)+"</li><button id='delete"+count+"' >X</button>");
                                                        list.append(newElement);
																
														// Task 15
														
														for(var i=1;i<=count;i++){
															$("button#delete"+i).click(function(){
																// Task 16
																if (confirm("Press OK to delete") == true) {
																	$.ajax('http://jsonplaceholder.typicode.com/posts/'+(data.id), {
																		method: 'DELETE'
																	}).then(function(){
																		$("button#delete"+(i-1)).remove();	
																		$('ul#posts li:nth-last-child('+(i-1)+')').remove();
																		
																	});
						
																}
																
																//throw new Error("error");
															});
														}
                                                               
                                                       
                                                });
								});
				}
	});
	// Task 17
	
	var $element = $("<input id='newInput' />");
	var div = $("div#dynamiccontent");
	div.prepend($element);
	
	
});
