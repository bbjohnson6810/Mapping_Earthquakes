// check to see if the code is working.
console.log("working");

// Create the map object with a center and zoom level.
//let map = L.map("mapid", {
//    center: [40.7, -94.5],
//    zoom: 4
//  });

let map = L.map('mapid').setView([40.7, -94.5], 4);

// tile layer to serve as map background
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});

// add background layer to the map
streets.addTo(map);

console.log("still working")