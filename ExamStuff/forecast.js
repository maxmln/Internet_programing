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
	
			if(!data.list){
				$("#temps").empty();
				$('#temps').append("City not found");
			}
			else{
				$("#temps").empty();
				console.log(data);
				for(var i=0;i<data.list.length;i++){
					console.log(data.list[i].temp);
					//$("#temps").append("<li>day "+i+" : "+(JSON.stringify(data.list[i].temp.day) - 273)+" min: "+(JSON.stringify(data.list[i].temp.min) - 273)+" clouds: "+JSON.stringify(data.list[i].clouds)+"</li>");
					var newElement = $("<li>"+JSON.stringify(data.list[i].deg)+"</li>");
					$('#temps').append(newElement);
				}
			}
			});
		}
	});
});
