var map;
var marker;
var infoWindow;
function initMap() {
    
    
       
        var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat:34.8498000, lng: 138.252500},
          zoom: 15
        });
        var infoWindow = new google.maps.InfoWindow({map: map});

        // Try HTML5 geolocation.
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

            infoWindow.setPosition(pos);
            infoWindow.setContent('あなたは今ここにいます。');
            map.setCenter(pos);
          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
        }
      

      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
      }
      
     
     
    
    
    
   var marker = new google.maps.Marker({
    position: {lat:34.839221, lng:138.133923},
    map: map,
    title: '村田石材工業'
                
  });
  
  
  
  var marker = new google.maps.Marker({
    position: {lat:34.828362, lng: 138.301704},
    map: map,
    title: 'オーケイコーポレーション'
  });
  
  var marker = new google.maps.Marker({
    position: {lat: 34.853113, lng:  138.257743},
    map: map,
    title: 'and A'
  });
  
  var marker = new google.maps.Marker({
    position: {lat: 34.856573,lng: 138.242659},
    map: map,
    title: 'ドンキホーテ　藤枝店'
  });
  
  var marker = new google.maps.Marker({
    position: {lat: 34.859619,lng: 138.310407},
    map: map,
    title: 'chees pige'
  });
  
  
  var marker = new google.maps.Marker({
    position: {lat: 34.857759, lng: 138.261356},
    map: map,
    title: 'KANNA'
  });
  
  
  var marker = new google.maps.Marker({
    position: {lat: 34.905288,lng: 138.232309},
    map: map,
    title: 'ナノミック'
  });
  
  
  var marker = new google.maps.Marker({
    position: {lat:34.870056,lng: 138.229214},
    map: map,
    title: '山田組'
  });
  
  
  var marker = new google.maps.Marker({
    position: {lat: 34.839036,lng: 138.256192},
    map: map,
    title: 'Calme et compose'
  });
  
  
  var marker = new google.maps.Marker({
    position: {lat: 35.204246,lng: 136.869936},
    map: map,
    title: '共同メディア'
  });
  
  var marker = new google.maps.Marker({
    position: {lat: 34.854338,lng: 138.254843},
    map: map,
    title: 'あおいそら。'
  });
  
  var marker = new google.maps.Marker({
    position: {lat: 34.851465,lng: 138.251264},
    map: map,
    title: '居酒屋　Go-Bowごぼう'
  });
  
  var marker = new google.maps.Marker({
    position: {lat: 34.830857,lng: 138.175088},
    map: map,
    title: '島田眼科クリニック'
  });
  
  var marker = new google.maps.Marker({
    position: {lat: 34.865205,lng: 138.265695},
    map: map,
    title: '事務器　本社'
  });
  var marker = new google.maps.Marker({
    position: {lat: 34.736899,lng:138.224244},
    map: map,
    title: 'Sense of Fun'
  });
    }

