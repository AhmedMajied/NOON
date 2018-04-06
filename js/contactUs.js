jQuery.getScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyDknmD-bIczC5pP5WPolW9zsx8xA8Ty6Cw",initMap);
function initMap()
{
        var latitude = 30.0594838;
        var longitude = 31.2934839;
        var LatLng={lat: latitude, lng: longitude};
        var mapOptions=
        {
            center: LatLng,
            zoom: 13,
            mapTypeId:google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("idiv-map-location"), mapOptions);
        new google.maps.Marker({
            position: LatLng,
            map: map,
        });
}