import { useMap } from "react-leaflet";
import L from "leaflet";
import { useEffect } from "react";

const Legend = () => {
    const mapInstance = useMap();
  useEffect(() => {
    // get color depending on population density value
    const getColor = d => {
      return d > 1200
        ? "#800026"
        : d > 1100
        ? "#BD0026"
        : d > 1000
        ? "#E31A1C"
        : d > 900
        ? "#FC4E2A"
        : d > 800
        ? "#FD8D3C"
        : d > 700
        ? "#FEB24C"
        : d > 600
        ? "#FED976"
        : "#FFEDA0";
    };

    const legend = L.control({ position: "bottomright" });

    legend.onAdd = () => {
      const div = L.DomUtil.create("div", "info legend");
      const grades = [0, 600, 700, 800, 900, 1000, 1100, 1200];
      let labels = [];
      let from;
      let to;

      for (let i = 0; i < grades.length; i++) {
        from = grades[i];
        to = grades[i + 1];

        labels.push(
          '<i style="background:' +
            getColor(from + 1) +
            '"></i> ' +
            from +
            (to ? "&ndash;" + to : "+")
        );
      }

      div.innerHTML = labels.join("<br>");
      return div;
    };

    legend.addTo(mapInstance);
  } , []);
  return null;
};

export default Legend;
