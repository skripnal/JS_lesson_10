$(document).ready(function(){
    var validate = false;

    $('#inputAge').bind('keyup', function(){
        var elem = $('#inputAge');
            if (elem.val() === '') {
                elem.css('background-color', '');
                validate = false;
            } else if (isNaN(elem.val()) || elem.val() < 1 || elem.val() > 100) {
                elem.css('background-color', 'rgba(255, 0, 0, 0.377)');
                validate = false;
            } else {
                elem.css('background-color', 'rgba(0, 255, 13, 0.377)');
                validate = true;
            }
    }); 

    $('#inputGET').bind('click', function(){
        if(validate){
            var userData = {
                lName: $('#inputLastName').val(),
                    fName: $('#inputFirstName').val(),
                    age: $('#inputAge').val(),
                    address: $('#inputAddress').val()
            }
            $.ajax({
                type: "GET",
                contentType: 'application/json',
                url: "http://localhost:3000/userGet?lName="+ userData.lName + "&fName="+userData.fName+"&age="+userData.age+"&address="+userData.address,
                success: function(userData){
                    console.log('success');
                    console.log(JSON.stringify(userData));
                    $('#divGET').html(userData);
                }
            });
        }
    });

    $('#inputPOST').bind('click', function(){
        if(validate){
            var userData = {
                    lName: $('#inputLastName').val(),
                    fName: $('#inputFirstName').val(),
                    age: $('#inputAge').val(),
                    address: $('#inputAddress').val()
            }
            $.ajax({
                type: "POST",
                data: JSON.stringify(userData),
                contentType: 'application/json',
                url: "http://localhost:3000/userPost",
                success: function(data){
                    console.log('success');
                    console.log(JSON.stringify(data));
                    $('#divPOST').html(data);
                }
            });
        }
    });

});