// Add console.log to check to see if our code is working.
console.log("working");

// in the [] brakets 40.7 & -94.5 = center, 4 = zoom. lambda func to combine
// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([40.7, -94.5], 4);

// same code but expanded :
// let map = L.map("mapid", {
//   center: [
//     40.7, -94.5
//   ],
//   zoom: 4
// });

// We create the tile layer that will be the background of our map.
// got code from : https://leafletjs.com/examples/quick-start/ and assigned it to variable

let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    // id: 'mapbox/streets-v11',
    // tileSize: 512,
    // zoomOffset: -1,
    accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);
