$(document).ready(function () {
	"use strict"

	var button = $('#send-button');
	button.click(function () {
		var userTextInput = $('#text-input');
		var userText = userTextInput.val();

		$.ajax('http://headers.jsontest.com/jsontest?service=validate', {
		type: 'POST',
		data: {
			json: userText,	
		}
		}).then(function (data) { 
		if (data.error) {
			$('#info-div').html("ERROR: "+data.error);
		} else { 
			$('#info-div').html("This is "+data.object_or_array);
		}
		});
	});

});
