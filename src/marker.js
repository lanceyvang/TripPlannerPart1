const mapboxgl = require("mapbox-gl");

const markerDomEl = document.createElement("div"); // Create a new, detached DIV
markerDomEl.style.width = "32px";
markerDomEl.style.height = "39px";
markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

let markerImgObj = {
    activity: "http://i.imgur.com/WbMOfMl.png",
    hotel: "http://i.imgur.com/D9574Cu.png",
    restaurant: "http://i.imgur.com/cqR6pUI.png"
}

module.exports = function(markerImg, coordinates) {
  markerDomEl.style.backgroundImage = `url(${markerImgObj[markerImg]})`;
  console.log(markerDomEl.style.backgroundImage, `url(${markerImgObj[markerImg]})`);
  return new mapboxgl.Marker(markerDomEl).setLngLat(coordinates).addTo(map);
};