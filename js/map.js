
var currentPosition ={lat:0, lng:0}
jQuery(document).ready(function() {
  
  venue_latlng = [36.1509, -95.9464];
  

  
  //satellite
  // map = L.mapbox.map('my_arbitrary_id', 'jdungan.map-y7hj3ir7').setView(venue_latlng,16);
  //200OK
  map = L.mapbox.map('my_arbitrary_id', 'username44.hbhcfpoe').setView(venue_latlng,16);

  var distWatchID,
      posOptions = {enableHighAccuracy: true},
      user_marker = L.userMarker([0,0], {pulsing:true, accuracy:100,smallIcon:true}).addTo(map),
      new_position = function(pos) {
          var pos_accuracy = pos.coords.accuracy;
          map.user_position = new L.LatLng(pos.coords.latitude, pos.coords.longitude);
          user_marker.setLatLng(map.user_position);
          user_marker.setAccuracy(pos_accuracy);
          map.setView(map.user_position,18)

      },
      appPosFail = function (err) {
          if (err){
              console.warn('ERROR(' + err.code + '): ' + err.message);
          }
      },
     
     //beginning of things that Sam added
      tIcon = L.icon({
    iconUrl: 'img/Toilet.png',
    shadowUrl: 'img/Toilet_drop.png',
    iconSize:     [30, 30], // size of the icon
    shadowSize:   [16, 32], // size of the shadow
    iconAnchor:   [22, 20], // point of the icon which will correspond to marker's location
    shadowAnchor: [9, 22],  // the same for the shadow
    popupAnchor:  [-7, -20] // point from which the popup should open relative to the iconAnchor
}),
      tulsaLoc = L.marker([36.1522, -95.9464], {icon: tIcon}).addTo(map);
                  
      tulsaLoc.bindPopup("Pop up is <i>amazing</i>");
		
		//end of things that Sam added
		
		//copypaste start
		$(document).ready(function () {
    updateContainer();
    $(window).resize(function() {
        updateContainer();
    });
});
function updateContainer() {
    var $containerHeight = $(window).height();
    if ($containerHeight <= 818) {
        $('.my_arbitrary_id').css({
            position: 'static',
            bottom: 'auto',
            left: 'auto'
        });
    }
    if ($containerHeight > 819) {
        $('.my_arbitrary_id').css({
            position: 'absolute',
            bottom: '3px',
            left: '0px'
        });
    }
}
//copypaste end
		
	  distWatchID = navigator.geolocation.watchPosition(new_position, appPosFail, posOptions);       


});
  
  
