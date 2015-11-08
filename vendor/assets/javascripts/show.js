$(document).ready(function(){
  var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 12,
      center: new google.maps.LatLng(latitude, longitude),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });
  
  var marker = new google.maps.Marker({
      position: new google.maps.LatLng(latitude, longitude),
      map: map
    });
  var infowindow = new google.maps.InfoWindow();

  google.maps.event.addListener(marker, 'click', (function(marker) {
        return function() {
          infowindow.setContent(address);
          infowindow.open(map, marker);
        }
      })(marker));
});
