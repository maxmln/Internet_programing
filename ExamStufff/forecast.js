$(document).ready(function () {
	"use strict"

	var button = $('#send-button');
	button.click(function () {
		var userTextInput = $('#text-input');
		var userText = userTextInput.val();

		if(!userText){
			$('#info-div').html("ERROR: Please enter City");
		}
		else{
			var uri = "http://api.openweathermap.org/data/2.5/forecast/daily?q="+ encodeURIComponent(userText);
	
			$.ajax(uri,{
	  		method: "GET"
			}).then(function(data){
	
			if(data.cod=="404"){
				$('#info-div').html("City not found");
			}
			else{
				console.log(data);
				for (var i = 0; i < data.list.length; i++) {
					console.log(data.list[i]);
					var newElement = $("<li>"+JSON.stringify(data.list[i].clouds)+"</li>");
					$('#list1').append(newElement);
				};
				//$('#list1').html("Weather data:<br/>"+"Sunrice: "+sunriseHours+":"+sunriseMinutes+"<br/>" + "Sunset: "+sunsetHours+":"+sunsetMinutes+"<br/>" + "min temp: "+tempMin+"<br/>" + "max temp: "+tempMax+"<br/>" + "wind speed: "+windSpeed);
			}
			});
		}

	});

});
