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
			var uri = "http://api.openweathermap.org/data/2.5/weather?q="+ encodeURIComponent(userText);
	
			$.ajax(uri,{
	  		method: "GET"
			}).then(function(data){
	
			if(data.cod=="404"){
				$('#info-div').html("City not found");
			}
			else{
				var sunriseCode = JSON.stringify(data.sys.sunrise);
				var sunsetCode = JSON.stringify(data.sys.sunset);
				var sunriseHours = new Date(sunriseCode * 1000).getUTCHours()+2;
				var sunriseMinutes = new Date(sunriseCode * 1000).getUTCMinutes();
				var sunsetHours = new Date(sunsetCode * 1000).getUTCHours()+2;
				var sunsetMinutes = new Date(sunsetCode * 1000).getUTCMinutes();

				var tempMin = (JSON.stringify(data.main.temp_min)-273.150).toFixed(2);
				var tempMax = (JSON.stringify(data.main.temp_max)-273.150).toFixed(2);

				var windSpeed = JSON.stringify(data.wind.speed);

				$('#info-div').html("Weather data:<br/>"+"Sunrice: "+sunriseHours+":"+sunriseMinutes+"<br/>" + "Sunset: "+sunsetHours+":"+sunsetMinutes+"<br/>" + "min temp: "+tempMin+"<br/>" + "max temp: "+tempMax+"<br/>" + "wind speed: "+windSpeed);
			}
			});
		}

	});

});
