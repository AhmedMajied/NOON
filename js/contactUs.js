 function myMap()
{
    var mapProp= {
        center:new google.maps.LatLng(31.508742,30.120850),
        zoom:5,
};
var map=new google.maps.Map(document.getElementById("idiv-map-location"),mapProp);
}