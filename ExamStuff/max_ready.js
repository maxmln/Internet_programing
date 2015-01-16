 
$(document).ready(function () {
    "use strict"

    var button = $('#send-button');


    button.click(function () {

        console.log('clicked');

        var textField1 = $('#text-area1').val();
        var textField2 = $('#text-area2').val();

        
            //debugger;
            var data = {
                name: textField1,
                number: textField2,
            };
            var dataToString = JSON.stringify(data);
            $.ajax('http://172.16.18.210:18080/jsontest?service=create', {
                type: 'POST',
                contentType: "application/json",
                data : dataToString,
                success: function (data) {
                    console.log(data);
                    $('#info-div').html("Student with ID: "+JSON.stringify(data.id)+" and name "+data.name+" created");
                    if (data.error) {
                        console.log(data.error.val);
                    }
                    
                }
            });
         
        
    });

});
