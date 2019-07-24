$(document).ready(function() {

});

function log() {

    var email = $('#name').val();
    var password = $('#Password').val();


    $.ajax({
        url: "http://192.168.1.112:8001/login",
        type: "GET",
        data: {
            login: login,
            password: password,

        },
        success: function(result) {
            console.log(result);
        },

        error: function() {
            alert("il y a une erreur");

        }
    });
}