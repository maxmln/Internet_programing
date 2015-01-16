$(document).ready(function () {
	"use strict"

	var button = $('#send-button');
	button.click(function () {
		var userTextInput = $('#text-area');
		var userText = userTextInput.val();
		if(!userText){
			$('#info-div').html("ERROR: Enter text");
		}
		else{
			$.ajax('http://headers.jsontest.com/jsontest?service=MD5', {
				type: 'POST',
				data: {
					text: userText,	
				},
				success: function (data) {
					$("#info-div").empty();
					$('#info-div').append("<li>The MD5 of "+data.original+" is "+data.md5+"</li>");
				}
			});
		}
	});
});
