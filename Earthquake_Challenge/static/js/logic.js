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


let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
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

// let airportData = "https://raw.githubusercontent.com/jveilleux2314/Mapping_Earthquakes/main/majorAirports.json";

// Accessing the Toronto airline routes GeoJSON URL.
let torontoData = "https://raw.githubusercontent.com/jveilleux2314/Mapping_Earthquakes/main/torontoRoutes.json";

// Grabbing our GeoJSON data.
d3.json(torontoData).then(function(data) {
    console.log(data);

    //  Create your own style
    // Create a style for the lines.
    // let myStyle = {
    //     color: "#ffffa1",
    //     weight: 2
    // }
    //  Then remove color & weight and add : style:myStyle within the code below to read easier


    // Creating a GeoJSON layer with the retrieved data.
    L.geoJson(data, {
            color: "#ffffa1",
            weight: 2,
            onEachFeature: function(feature, layer) {
                layer.bindPopup("<h3> Airline: " + feature.properties.airline + " </h3> <hr> <h3> Destination:" +
                    feature.properties.dst + "</h3>");
            }
        })
        .addTo(map);
});