import { useMap } from "react-leaflet";
import L from "leaflet";
import { useEffect } from "react";
import legendData from  './../data/dataLegend'  

const Legend = () => {
    const mapInstance = useMap();
    const interval = (legendData.spei.max - legendData.spei.min)/8
    useEffect(() => {
    // get color depending on population density value
    const getColor = d => {
      return d > (legendData.spei.min + 7*interval).toFixed(2)
        ? "#800026"
        : d > (legendData.spei.min + 6*interval).toFixed(2)
        ? "#BD0026"
        : d > (legendData.spei.min + 5*interval).toFixed(2)
        ? "#E31A1C"
        : d > (legendData.spei.min + 4*interval).toFixed(2)
        ? "#FC4E2A"
        : d > (legendData.spei.min + 3*interval).toFixed(2)
        ? "#FD8D3C"
        : d > (legendData.spei.min + 2*interval).toFixed(2)
        ? "#FEB24C"
        : d > (legendData.spei.min + interval).toFixed(2)
        ? "#FED976"
        : "#FFEDA0";
    };

    const legend = L.control({ position: "bottomright" });

    legend.onAdd = () => {
      const div = L.DomUtil.create("div", "info legend");
      const grades = 
      [
        legendData.spei.min.toFixed(2), 
        (legendData.spei.min + interval).toFixed(2), 
        (legendData.spei.min + 2*interval).toFixed(2), 
        (legendData.spei.min + 3*interval).toFixed(2), 
        (legendData.spei.min + 4*interval).toFixed(2), 
        (legendData.spei.min + 5*interval).toFixed(2), 
        (legendData.spei.min + 6*interval).toFixed(2), 
        (legendData.spei.min + 7*interval).toFixed(2)
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
