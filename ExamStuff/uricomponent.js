$(document).ready(function () {
	"use strict"

	var button = $('#send-button');
	button.click(function () {
		var userTextInput1 = $('#text-input1');
		var userTextInput2 = $('#text-input2');
		var userText1 = userTextInput1.val();
		var userText2 = userTextInput2.val();

		if(!userText1 || ! userText2){
			$('#info-div').html("ERROR: Please enter key and value");
		}
		else{
			var uri = "http://echo.jsontest.com/"+ encodeURIComponent(userText1)+"/"+encodeURIComponent(userText2);
			$.ajax(uri,{
	  		method: "GET"
			}).then(function(data){
				$('#info-div').html("JSON: "+JSON.stringify(data));

			});
		}

	});

});
