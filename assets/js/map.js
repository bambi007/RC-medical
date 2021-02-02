mapboxgl.accessToken = 'pk.eyJ1IjoibWljaGFsZHppZWNoY2lhcnoiLCJhIjoiY2toYzIzdmNtMDBwMzJybnVzNnp0ajdrcCJ9.cZyu39ZuA2HWEkn2Z4fMmA';

var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/dark-v10', // stylesheet location
  center: [19.875416456499636, 50.102019778299535], // starting position [lng, lat]
  zoom: 11 // starting zoom
});

var geojson = {
  type: 'FeatureCollection',
  features: [{
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [19.837415, 50.116314]
    },
    properties: {
      title: 'Adres magazynu',
      description: 'KMC-Services, ul.Komandosów 12, 32-085 Modliniczka'

    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [19.912880, 50.088611]
    },
    properties: {
      title: 'Adres biura',
      description: 'ul. Mehoffera 10, 31-322 Kraków'
    }
  },
  ]
};

geojson.features.forEach(function (marker) {

  var el = document.createElement('div');
  el.className = 'marker';

  new mapboxgl.Marker(el)
    .setLngLat(marker.geometry.coordinates)
    .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
      .setHTML('<h3>' + marker.properties.title + '</h3><p>' + marker.properties.description + '</p>'))
    .addTo(map);
});