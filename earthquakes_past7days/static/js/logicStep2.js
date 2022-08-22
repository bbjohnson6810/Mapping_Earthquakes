// check to see if the code is working.
console.log("working");


//  create the tile layer to serve as map background
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});

// dark tile layer
let satStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
maxZoom: 18,
id: 'mapbox/satellite-streets-v11',
tileSize: 512,
zoomOffset: -1,
accessToken: API_KEY
});

// Create a base layer that holds both maps.
let baseMaps = {
  "Street": streets,
  "Satellite": satStreets
};

//  map object
let myMap = L.map('map', {
  center: [30, 0],
  zoom: 1.5,
  layers: [streets]
})

// function to return style data
function styleInfo(feature) {
  return {
    opacity: 1,
    fillOpacity: 1,
    fillColor: "#ffae42",
    color: "#000000",
    radius: getRadius(feature.properties.mag),
    stroke: true,
    weight: 0.5
  };
}

// function to get circle radius based on magnitude
// Earthquakes with a magnitude of 0 will be plotted with a radius of 1.
function getRadius(magnitude) {
  if (magnitude === 0) {
    return 1;
  }
  return magnitude * 4;
}

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(myMap);


let quakes = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

// Grabbing our GeoJSON data.
d3.json(quakes).then(function(data) {
  // Creating a GeoJSON layer with the retrieved data.
  L.geoJSON(data, {

    // We turn each feature into a circleMarker on the map.
    
    pointToLayer: function(feature, latlng) {
                console.log(data);
                return L.circleMarker(latlng);
            },
          style: styleInfo
        }).addTo(myMap);
    });

