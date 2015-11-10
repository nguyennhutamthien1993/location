$(document).ready(function(){
  var map = new google.maps.Map(document.getElementById('maps'), {
      zoom: 12,
      center: new google.maps.LatLng(locations[0].latitude, locations[0].longitude),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });



    for (var i = 0; i < size; i++) {  
      var marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i].latitude, locations[i].longitude),
        map: map
      });
      var infowindow = new google.maps.InfoWindow();
      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i].address);
          infowindow.open(map, marker);
        }
      })(marker, i));
    };

});