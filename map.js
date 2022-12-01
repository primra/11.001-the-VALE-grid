mapboxgl.accessToken =
"pk.eyJ1IjoicHJpbXJhIiwiYSI6ImNsOGRmc2ZjYzA0OGozeGwzYWllaTNqOXQifQ.1LEJ5gTJ4gS5WYOmr92-Aw";
const map = new mapboxgl.Map({
  container: "map", // Container ID
  style: "mapbox://styles/primra/clb5oh555001614nv69m3aj5p", // Map style to use
  center: [-92.250, 37.750], // Starting position [lng, lat]
  zoom: 2, // Starting zoom level
  projection: "globe",
});

 
// stylize the globe effect
map.on("style.load", () => {
  map.setFog({
    range: [1, 7],
    color: "#d6fffc",
    "horizon-blend": 0.03,
/*     "high-color": "#000000",
    "space-color": "#000000",
    "star-intensity": 0, */
  });
});

// instantiate a popup for the basemap
const basemapPopup = new mapboxgl.Popup({
    closeButton: false,
    closeOnClick: false,
  });
  

map.on("mousemove", "student-hometown", (e) => {
    console.log(e.features[0].properties.Hometown);
    // string together a number of methods to create a popup
      basemapPopup
      .setLngLat(e.lngLat)
      .setHTML(`${e.features[0].properties.Hometown}`)
      .addTo(map);
  });

map.on("mouseleave", "student-hometown", () => {
  basemapPopup.remove();
});

  