// Add console.log to check to see if our code is working.
console.log("working");

// in the [] brakets 40.7 & -94.5 = center, 4 = zoom. lambda func to combine
// Create the map object with a center and zoom level.

// let map = L.map('mapid').setView([40.7, -94.5], 4);

// Create the map object with center at the San Francisco airport.

// We create the dark view tile layer that will be an option for our map.
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});


let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY

});


// Create a base layer that holds both maps.
let baseMaps = {
    Street: streets,
    Dark: dark
};



let map = L.map('mapid', {
    center: [30, 30],
    zoom: 2,
    layers: [streets]
})

L.control.layers(baseMaps).addTo(map);




// streets.addTo(map);

let airportData = "https://raw.githubusercontent.com/jveilleux2314/Mapping_Earthquakes/main/majorAirports.json";


// Grabbing our GeoJSON data.
d3.json(airportData).then(function(data) {
    console.log(data);

    // Creating a GeoJSON layer with the retrieved data.
    L.geoJson(data).addTo(map);

});