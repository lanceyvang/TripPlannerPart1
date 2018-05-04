const mapboxgl = require("mapbox-gl");
const buildMarker = require('./marker');

// mapboxgl.accessToken = "YOUR API TOKEN HERE";
mapboxgl.accessToken =
  "pk.eyJ1IjoibGFuY2V5dmFuZyIsImEiOiJjamdzNW1wYzYwMDF3MzNvOXdpeG53Z29wIn0.h3gT0KbwaM0JC7WQQZxxMA";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

buildMarker("hotel", [40.705317, -74.010099]);

