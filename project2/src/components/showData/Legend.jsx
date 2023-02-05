import { useEffect } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";
import dataIndex from  '../../data/dataLegend'
import './legend.css'  

const Legend = (props) => {

  const mapInstance = useMap();

  var data = dataIndex.indices.CDD 

  var color = data.color

  const interval = (data.max - data.min)/8
  // const textSplit = props.dataIndex.split('')
    
  useEffect(() => {
    // get color depending on population density value

    // if (textSplit[2] === 'SPI') {
    if (props.dataIndex === 'spi') {
      const getColor = d => {
        return d > data.min + 9*interval
          ? color[0]
          : d > data.min + 8*interval
          ? color[1]
          : d > data.min + 7*interval
          ? color[2]
          : d > data.min + 6*interval
          ? color[3]
          : d > data.min + 5*interval
          ? color[4]
          : d > data.min + 4*interval
          ? color[5]
          : d > data.min + 3*interval
          ? color[6]
          : d > data.min + 2*interval
          ? color[7]
          : d > data.min
          ? color[8]
          : color[9]
      };

      const legend = L.control({ position: "bottomright" });

      legend.onAdd = () => {
        const div = L.DomUtil.create("div", "info legend");
        const grades = 
        [
          data.min + 8*interval,
          data.min + 7*interval, 
          data.min + 6*interval, 
          data.min + 5*interval, 
          data.min + 4*interval, 
          data.min + 3*interval, 
          data.min + 2*interval, 
          data.min + interval,
          data.min
        ];
  
        let labels = [];
        let from;
        let to;
  
        for (let i = 0; i < grades.length; i++) {
          to = grades[i];
          from = grades[i];
  
          labels.push(
            '<i style="background:' +
              getColor(from + 1) +
              '"></i>' + to 
          );
        }
  
        div.innerHTML = 
          "<h4> Legend </h4>" +
          labels.join("<br>")
          ;
        return div;
      };
  
      legend.addTo(mapInstance);
  
      return () => legend.remove();

    // } else if (textSplit[2],substring(0,3) === 'indices') {
    } else if (props.dataIndex === 'CDD') {
      const getColor = d => {
        return d > data.min + 8*interval
          ? color[0]
          : d > data.min + 7*interval
          ? color[1]
          : d > data.min + 6*interval
          ? color[2]
          : d > data.min + 5*interval
          ? color[3]
          : d > data.min + 4*interval
          ? color[4]
          : d > data.min + 3*interval
          ? color[5]
          : d > data.min + 2*interval
          ? color[6]
          : d > data.min + interval
          ? color[7]
          : d > data.min
          ? color[8]
          : color[9]
      };

      const legend = L.control({ position: "bottomright" });

      legend.onAdd = () => {
        const div = L.DomUtil.create("div", "info legend");
        const grades = 
        [
          data.min + 8*interval,
          data.min + 7*interval, 
          data.min + 6*interval, 
          data.min + 5*interval, 
          data.min + 4*interval, 
          data.min + 3*interval, 
          data.min + 2*interval, 
          data.min + interval,
          data.min
        ];
  
        let labels = [];
        let from;
        let to;
  
        for (let i = 0; i < grades.length; i++) {
          to = grades[i];
          from = grades[i + 1];
  
          labels.push(
            '<i style="background:' +
              getColor(to + 1) +
              '"></i>' 
              + (from ? "" + from.toFixed(0) : "<")
              + (to ? (i < grades.length-1 ? " &ndash; " : "")  + to.toFixed(0) : "")
              // + from.toFixed(0) 
              // + (to ? " &ndash; " + to.toFixed(0) : "")
          );
        }
  
        div.innerHTML = 
          "<h4> Legend </h4>" +
          labels.join("<br>")
          ;
        return div;
      };
  
      legend.addTo(mapInstance);
  
      return () => legend.remove();
    }
  }, [props.dataIndex]);
};

export default Legend;