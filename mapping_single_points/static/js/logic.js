// check to see if the code is working.
console.log("working");

// create the map object
// let map = L.map("mapid").setView([40.7, -94.5], 4);

// alternative map object
let myMap = L.map("map", {
	center: [34.0522, -118.2437],
	zoom: 14
  });

// LA marker
// L.circle([34.0522, -118.2437], {
//   color: 'black',
//   fillColor: 'yellow',
//   fillOpacity: 0.5,
//   radius: 300}).addTo(myMap);

L.circleMarker([34.0522, -118.2437], {
  color: 'black',
  fillColor: '#ffffa1',
//  fillOpacity: 0.5,
  radius: 300}).addTo(myMap);

//  create the tile layer to serve as map background
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/dark-v10',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});

// add tile layer to the map.
streets.addTo(myMap);



console.log("still working");