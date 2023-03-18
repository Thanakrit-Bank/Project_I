import { useEffect } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";
import dataIndex from  '../../data/dataLegend'
import './legend.css'  

const Legend = (props) => {

  const mapInstance = useMap();
  
  var data = dataIndex.indices.CDD 
  // Indices
  if (props.dataIndexName === 'CDD'){
    data = dataIndex.indices.CDD
  } else if (props.dataIndexName === 'CSDI' ) {
    data = dataIndex.indices.CSDI
  } else if (props.dataIndexName === 'CWD' ) {
    data = dataIndex.indices.CWD
  } else if (props.dataIndexName === 'DTR' ) {
    data = dataIndex.indices.DTR
  } else if (props.dataIndexName === 'FD0' ) {
    data = dataIndex.indices.FD0
  } else if (props.dataIndexName === 'FD16' ) {
    data = dataIndex.indices.FD16
  } else if (props.dataIndexName === 'ID0' ) {
    data = dataIndex.indices.ID0
  } else if (props.dataIndexName === 'PRCPTOT' ) {
    data = dataIndex.indices.PRCPTOT
  } else if (props.dataIndexName === 'R10mm' ) {
    data = dataIndex.indices.R10mm
  } else if (props.dataIndexName === 'R20mm' ) {
    data = dataIndex.indices.R20mm
  } else if (props.dataIndexName === 'R25mm' ) {
    data = dataIndex.indices.R25mm
  } else if (props.dataIndexName === 'R95p' ) {
    data = dataIndex.indices.R95p
  } else if (props.dataIndexName === 'R99p' ) {
    data = dataIndex.indices.R99p
  } else if (props.dataIndexName === 'RX1day' ) {
    data = dataIndex.indices.RX1day
  } else if (props.dataIndexName === 'RX5day' ) {
    data = dataIndex.indices.RX5day
  } else if (props.dataIndexName === 'SDII' ) {
    data = dataIndex.indices.SDII
  } else if (props.dataIndexName === 'SU25' ) {
    data = dataIndex.indices.SU25
  } else if (props.dataIndexName === 'SU35' ) {
    data = dataIndex.indices.SU35
  } else if (props.dataIndexName === 'TMAXmean' ) {
    data = dataIndex.indices.TMAXmean
  } else if (props.dataIndexName === 'TMEANmean' ) {
    data = dataIndex.indices.TMEANmean
  } else if (props.dataIndexName === 'TMINmean' ) {
    data = dataIndex.indices.TMINmean
  } else if (props.dataIndexName === 'TN10P' ) {
    data = dataIndex.indices.TN10P
  } else if (props.dataIndexName === 'TN90P' ) {
    data = dataIndex.indices.TN90P
  } else if (props.dataIndexName === 'TNn' ) {
    data = dataIndex.indices.TNn
  } else if (props.dataIndexName === 'TNx' ) {
    data = dataIndex.indices.TNx
  } else if (props.dataIndexName === 'TR20' ) {
    data = dataIndex.indices.TR20
  } else if (props.dataIndexName === 'TR25' ) {
    data = dataIndex.indices.TR25
  } else if (props.dataIndexName === 'TX10P' ) {
    data = dataIndex.indices.TX10P
  } else if (props.dataIndexName === 'TX90P' ) {
    data = dataIndex.indices.TX90P
  } else if (props.dataIndexName === 'TXn' ) {
    data = dataIndex.indices.TXn
  } else if (props.dataIndexName === 'TXx' ) {
    data = dataIndex.indices.TXx
  } else if (props.dataIndexName === 'WSDI' ) {
    data = dataIndex.indices.WSDI
  }
  // SPI
  else if (props.dataIndexName.split(' ')[1] === 'month' ) {
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
  // console.log('data_index legendPage: ', props.dataIndex);
  // console.log('data legendPage: ', min, max);
  // console.log('props legendPage: ', props.legendMin, props.legendMax);
  const interval = (max - min)/8
    
  useEffect(() => {
    
    if (props.dataIndexName.split(' ')[1] === 'month') {
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
              '"></i>' + to.toFixed(1) 
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
    } else {
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
            '"></i>' + to.toFixed(0)

            // '<i style="background:' +
            //   getColor(to + 1) +
            //   '"></i>' 
            //   + (from ? "" + from.toFixed(0) : "<")
            //   + (to ? (i < grades.length-1 ? " &ndash; " : "")  + to.toFixed(0) : "")

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
  }, [props.dataIndexName, props.legendMax,props.legendMin, data.color, mapInstance, color, interval, min]);
};

export default Legend;