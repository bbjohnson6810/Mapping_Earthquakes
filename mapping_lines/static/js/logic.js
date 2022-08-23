// check to see if the code is working.
console.log("working");

// create the map object
// let map = L.map("mapid").setView([40.7, -94.5], 4);

// alternative map object
let myMap = L.map("map", {
	center: [37.6213, -122.3790],
	zoom: 5
  });

  let line = [
    [33.9416, -118.4085], // LAX
    [37.6213, -122.3790], // SFO
    [40.7899, -111.9791], // SLC
    [47.4502, -122.3088]  // SEA
  ];

  L.polyline(line, {
    color: "yellow"
  }).addTo(myMap);

//  create the tile layer to serve as map background
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/satellite-streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});

// add tile layer to the map.
streets.addTo(myMap);



console.log("still working");