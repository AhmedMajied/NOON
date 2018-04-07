/* author: Mariam Ashraf*/
/*
 * @summary. getScript intialize google maps.
 * @description. this is used to get google maps api with location , display map to html , put marker on the place
 * @param: url of google maps and call back function
*/
jQuery.getScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyDknmD-bIczC5pP5WPolW9zsx8xA8Ty6Cw",initMap);
function initMap()
{
        var latitude = 30.0594838;/* Latitude {float}*/
        var longitude = 31.2934839;/* Longitude {float}*/
        var LatLng={lat: latitude, lng: longitude}; /* object contains Latitude and longitude */
        var mapOptions=/*this mapOptios Object that contains Location and google Map type that is ROADMAP and zoom*/
        {
            center: LatLng,
            zoom: 13,
            mapTypeId:google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("idiv-map-location"), mapOptions);/*send mapOptions to Html to display it*/
        new google.maps.Marker({
            position: LatLng,
            map: map,
        });/*this marker to be added to the map*/
}

/* @description. this function is used when user click on button submit to sent his message
 *                and sent his message by ajax then alert user by action
*/
$(function () {
    $(".cbtn-send").click(function () {
        var usrName = $(".cinput-name").val();/* userName String*/
        var usrMail = $(".cinput-email").val();/* userMail String*/
        var message=$(".ctextarea-message").val();/* Message String*/
        if(usrName !== "" && usrMail !== "" && message !== "")
        {
                alert(1);
                $.ajax({
                    type: 'POST',
                    url: '',/* Here Url To sent Values*/
                    data: {name:usrName, mail: usrMail , message:message},/* data to be sent*/
                    success: function (data) {
                            alert(data);/* if sent will return sent sucessfully to user else it will alert him that message failed to sent*/
                    },
                    error: function (msg)
                    {
                        alert("Sorry Fail to sent Your Message");/*if error happens alert user with error message*/
                    }
                });
        }
        else
        {
                if(usrName===""){   /* if name is empty display error message for 3 seconds*/
                        $(".cspan-error-name").text("Required");
                        $('.cspan-error-name').fadeIn('fast').delay(3000).fadeOut('slow');
                }
                if(usrMail===""){/*if email is empty display error message for 3 seconds*/
                        $(".cspan-error-email").text("Required");
                        $('.cspan-error-email').fadeIn('fast').delay(3000).fadeOut('slow');
                }
                if(message===""){/*if message is empty display error message for 3 seconds*/
                        $(".cspan-error-message").text("Required");
                        $('.cspan-error-message').fadeIn('fast').delay(3000).fadeOut('slow');
                }
             

        }
    });
});