import { useMap } from "react-leaflet";
import L from "leaflet";
import { useEffect } from "react";
import legendData from  './../data/dataLegend'  

const Legend = () => {
    const mapInstance = useMap();
    const interval = (legendData.spei.max - legendData.spei.min)/8
    const twoDegit = parseFloat(interval).toFixed(2)
    useEffect(() => {
    // get color depending on population density value
    const getColor = d => {
      return d > legendData.spei.min + 7*interval
        ? "#FFEDA0"
        : d > legendData.spei.min + 6*interval
        ? "#FED976"
        : d > legendData.spei.min + 5*interval
        ? "#FED976"
        : d > legendData.spei.min + 4*interval
        ? "#FEB24C"
        : d > legendData.spei.min + 3*interval
        ? "#FD8D3C"
        : d > legendData.spei.min + 2*interval
        ? "#FC4E2A"
        : d > legendData.spei.min + interval
        ? "#E31A1C"
        : d > legendData.spei.min
        ? "#BD0026"
        : "#800026"
    };

    const legend = L.control({ position: "bottomright" });

    legend.onAdd = () => {
      const div = L.DomUtil.create("div", "info legend");
      const grades = 
      [
        // legendData.spei.min.toFixed(2),
        // (legendData.spei.min + interval).toFixed(2), 
        // (legendData.spei.min + 2*interval).toFixed(2), 
        // (legendData.spei.min + 3*interval).toFixed(2), 
        // (legendData.spei.min + 4*interval).toFixed(2), 
        // (legendData.spei.min + 5*interval).toFixed(2), 
        // (legendData.spei.min + 6*interval).toFixed(2), 
        // (legendData.spei.min + 7*interval).toFixed(2)

        (legendData.spei.min + 7*twoDegit).toFixed(2), 
        (legendData.spei.min + 6*twoDegit).toFixed(2), 
        (legendData.spei.min + 5*twoDegit).toFixed(2), 
        (legendData.spei.min + 4*twoDegit).toFixed(2), 
        (legendData.spei.min + 3*twoDegit).toFixed(2), 
        (legendData.spei.min + 2*twoDegit).toFixed(2), 
        (legendData.spei.min + 1*twoDegit).toFixed(2),
        legendData.spei.min
      ];

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
            (to ? " &ndash; " + to : "+")
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
