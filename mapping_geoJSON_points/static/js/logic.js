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
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create a base layer that holds both maps.
let baseMaps = {
  Street: streets,
  Dark: dark
};

//  map object
let myMap = L.map('map', {
  center: [30, 30],
  zoom: 2,
  layers: [streets]
})

// add tile layer to the map.
// streets.addTo(myMap);

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(myMap);


let airportData = "static/data/majorAirports.json";

// Grabbing our GeoJSON data.
d3.json(airportData).then(function(data) {
  console.log(data);

  L.geoJSON(data, {
    onEachFeature: function(feature, layer) {
  //    console.log(layer);
      layer.bindPopup("<h4>Airport code: " + feature.properties.faa + "<hr class='solid'>" +
      "Airport name: " + feature.properties.name + "</h4>");
    }
  }).addTo(myMap);});

