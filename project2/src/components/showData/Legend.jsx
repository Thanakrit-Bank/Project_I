import { useEffect } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";
import dataIndex from  '../../data/dataLegend'
import './legend.css'  

const Legend = (props) => {

  const mapInstance = useMap();

  var data = dataIndex.indices.CDD 
  // Indices
  if (props.dataIndex === 'CDD'){
    data = dataIndex.indices.CDD
  } else if (props.dataIndex === 'CSDI' ) {
    data = dataIndex.indices.CSDI
  } else if (props.dataIndex === 'CWD' ) {
    data = dataIndex.indices.CWD
  } else if (props.dataIndex === 'DTR' ) {
    data = dataIndex.indices.DTR
  } else if (props.dataIndex === 'FD0' ) {
    data = dataIndex.indices.FD0
  } else if (props.dataIndex === 'FD16' ) {
    data = dataIndex.indices.FD16
  } else if (props.dataIndex === 'ID0' ) {
    data = dataIndex.indices.ID0
  } else if (props.dataIndex === 'PRCPTOT' ) {
    data = dataIndex.indices.PRCPTOT
  } else if (props.dataIndex === 'R10mm' ) {
    data = dataIndex.indices.R10mm
  } else if (props.dataIndex === 'R20mm' ) {
    data = dataIndex.indices.R20mm
  } else if (props.dataIndex === 'R25mm' ) {
    data = dataIndex.indices.R25mm
  } else if (props.dataIndex === 'R95p' ) {
    data = dataIndex.indices.R95p
  } else if (props.dataIndex === 'R99p' ) {
    data = dataIndex.indices.R99p
  } else if (props.dataIndex === 'RX1day' ) {
    data = dataIndex.indices.RX1day
  } else if (props.dataIndex === 'RX5day' ) {
    data = dataIndex.indices.RX5day
  } else if (props.dataIndex === 'SDII' ) {
    data = dataIndex.indices.SDII
  } else if (props.dataIndex === 'SU25' ) {
    data = dataIndex.indices.SU25
  } else if (props.dataIndex === 'SU35' ) {
    data = dataIndex.indices.SU35
  } else if (props.dataIndex === 'TMAXmean' ) {
    data = dataIndex.indices.TMAXmean
  } else if (props.dataIndex === 'TMEANmean' ) {
    data = dataIndex.indices.TMEANmean
  } else if (props.dataIndex === 'TMINmean' ) {
    data = dataIndex.indices.TMINmean
  } else if (props.dataIndex === 'TN10P' ) {
    data = dataIndex.indices.TN10P
  } else if (props.dataIndex === 'TN90P' ) {
    data = dataIndex.indices.TN90P
  } else if (props.dataIndex === 'TNn' ) {
    data = dataIndex.indices.TNn
  } else if (props.dataIndex === 'TNx' ) {
    data = dataIndex.indices.TNx
  } else if (props.dataIndex === 'TR20' ) {
    data = dataIndex.indices.TR20
  } else if (props.dataIndex === 'TR25' ) {
    data = dataIndex.indices.TR25
  } else if (props.dataIndex === 'TX10P' ) {
    data = dataIndex.indices.TX10P
  } else if (props.dataIndex === 'TX90P' ) {
    data = dataIndex.indices.TX90P
  } else if (props.dataIndex === 'TXn' ) {
    data = dataIndex.indices.TXn
  } else if (props.dataIndex === 'TXx' ) {
    data = dataIndex.indices.TXx
  } else if (props.dataIndex === 'WSDI' ) {
    data = dataIndex.indices.WSDI
  }
  // SPI
  else if (props.dataIndex.split(' ')[1] === 'month' ) {
    data = dataIndex.SPI.spi
  }

  // get color depending on population density value
  var color = data.color
  var max = data.max
  var min = data.min
  
  if (props.legendMax !== '' && props.legendMin !== ''){
      max = props.legendMax
      min = props.legendMin
  }
  console.log('data_index legendPage: ', props.dataIndex);
  console.log('data legendPage: ', min, max);
  console.log('props legendPage: ', props.legendMin, props.legendMax);


  const interval = (max - min)/8
    
  useEffect(() => {
    
    if (dataIndex.SPI.props === dataIndex.SPI.spi) {
      const getColor = d => {
        return d > min + 9*interval
          ? color[0]
          : d > min + 8*interval
          ? color[1]
          : d > min + 7*interval
          ? color[2]
          : d > min + 6*interval
          ? color[3]
          : d > min + 5*interval
          ? color[4]
          : d > min + 4*interval
          ? color[5]
          : d > min + 3*interval
          ? color[6]
          : d > min + 2*interval
          ? color[7]
          : d > min
          ? color[8]
          : color[9]
      };

      const legend = L.control({ position: "bottomright" });

      legend.onAdd = () => {
        const div = L.DomUtil.create("div", "info legend");
        const grades = 
        [
          min + 8*interval,
          min + 7*interval, 
          min + 6*interval, 
          min + 5*interval, 
          min + 4*interval, 
          min + 3*interval, 
          min + 2*interval, 
          min + interval,
          min
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
    } else if (dataIndex.indices.props === dataIndex.indices.indices) {
      const getColor = d => {
        return d > min + 8*interval
          ? color[0]
          : d > min + 7*interval
          ? color[1]
          : d > min + 6*interval
          ? color[2]
          : d > min + 5*interval
          ? color[3]
          : d > min + 4*interval
          ? color[4]
          : d > min + 3*interval
          ? color[5]
          : d > min + 2*interval
          ? color[6]
          : d > min + interval
          ? color[7]
          : d > min
          ? color[8]
          : color[9]
      };

      const legend = L.control({ position: "bottomright" });

      legend.onAdd = () => {
        const div = L.DomUtil.create("div", "info legend");
        const grades = 
        [
          min + 8*interval,
          min + 7*interval, 
          min + 6*interval, 
          min + 5*interval, 
          min + 4*interval, 
          min + 3*interval, 
          min + 2*interval, 
          min + interval,
          min
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
  }, [props.dataIndex, props.legendMax,props.legendMin, data.color, mapInstance, color, interval, min]);
};

export default Legend;