import jQuery from "jquery"
import google from "google-map-react"
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
