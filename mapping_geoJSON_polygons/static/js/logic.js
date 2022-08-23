// check to see if the code is working.
console.log("working");


let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'streets-v11',
      accessToken: API_KEY
  });

let satStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'satellite-streets-v11',
    accessToken: API_KEY
});

// Create a base layer that holds both maps.
let baseMaps = {
  "Streets": streets,
  "Satellite streets": satStreets
};

//  map object
let myMap = L.map('map', {
  center: [43.7, -79.34],
  zoom: 11,
  layers: [streets]
})

let myStyle = {
  color: "blue",
  fillColor: '#ffffa1',
  weight: 2
}
// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(myMap);

//  Toronto neighborhoods GeoJSON.
let torontoHoods = "static/data/torontoNeighborhoods.json";

d3.json(torontoHoods).then(function(data) {
  console.log(data);
  L.geoJSON(data, {
    style: myStyle
  }).addTo(myMap);
});