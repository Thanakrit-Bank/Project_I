import { useEffect } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";
import legendData from  './../data/dataLegend'  

const Legend = (props) => {

  const mapInstance = useMap();

  var data = legendData.indices_bak.rcp45_PRCPTOT
  // Indices_bak
  if (props.dataIndex === 'rcp85_TMEANmean' || props.dataIndex ===  'rcp45_TMEANmean' ){
    data = legendData.indices_bak.rcp85_TMEANmean
  } else if (props.dataIndex === 'rcp85_PRCPTOT' || props.dataIndex ===  'rcp45_PRCPTOT' ){
    data = legendData.indices_bak.rcp85_PRCPTOT
  } 
  
  // Indices
  else if (props.dataIndex === 'rcp85_CDD' || props.dataIndex ===  'rcp45_CDD' ){
    data = legendData.indices.rcp85_CDD
  } else if (props.dataIndex === 'rcp85_CSDI' || props.dataIndex ===  'rcp45_CSDI' ){
    data = legendData.indices.rcp85_CSDI
  } else if (props.dataIndex === 'rcp85_CWD' || props.dataIndex ===  'rcp45_CWD' ){
    data = legendData.indices.rcp85_CWD
  } else if (props.dataIndex === 'rcp85_DTR' || props.dataIndex ===  'rcp45_DTR' ){
    data = legendData.indices.rcp85_DTR
  } else if (props.dataIndex === 'rcp85_FD0' || props.dataIndex ===  'rcp45_FD0' ){
    data = legendData.indices.rcp85_FD0
  } else if (props.dataIndex === 'rcp85_FD16' || props.dataIndex ===  'rcp45_FD16' ){
    data = legendData.indices.rcp85_FD16
  } else if (props.dataIndex === 'rcp85_ID0' || props.dataIndex ===  'rcp45_ID0' ){
    data = legendData.indices.rcp85_ID0
  } else if (props.dataIndex === 'rcp85_PRCPTOT' || props.dataIndex ===  'rcp45_PRCPTOT' ){
    data = legendData.indices.rcp85_PRCPTOT
  } else if (props.dataIndex === 'rcp85_R10mm' || props.dataIndex ===  'rcp45_R10mm' ){
    data = legendData.indices.rcp85_R10mm
  } else if (props.dataIndex === 'rcp85_R20mm' || props.dataIndex ===  'rcp45_R20mm' ){
    data = legendData.indices.rcp85_R20mm
  } else if (props.dataIndex === 'rcp85_R25mm' || props.dataIndex ===  'rcp45_R25mm' ){
    data = legendData.indices.rcp85_R25mm
  } else if (props.dataIndex === 'rcp85_R95p' || props.dataIndex ===  'rcp45_R95p' ){
    data = legendData.indices.rcp85_R95p
  } else if (props.dataIndex === 'rcp85_R99p' || props.dataIndex ===  'rcp45_R99p' ){
    data = legendData.indices.rcp85_R99p
  } else if (props.dataIndex === 'rcp85_RX1day' || props.dataIndex ===  'rcp45_RX1day' ){
    data = legendData.indices.rcp85_RX1day
  } else if (props.dataIndex === 'rcp85_RX5day' || props.dataIndex ===  'rcp45_RX5day' ){
    data = legendData.indices.rcp85_RX5day
  } else if (props.dataIndex === 'rcp85_SDII' || props.dataIndex ===  'rcp45_SDII' ){
    data = legendData.indices.rcp85_SDII
  } else if (props.dataIndex === 'rcp85_SU25' || props.dataIndex ===  'rcp45_SU25' ){
    data = legendData.indices.rcp85_SU25
  } else if (props.dataIndex === 'rcp85_SU35' || props.dataIndex ===  'rcp45_SU35' ){
    data = legendData.indices.rcp85_SU35
  } else if (props.dataIndex === 'rcp85_TMAXmean' || props.dataIndex ===  'rcp45_TMAXmean' ){
    data = legendData.indices.rcp85_TMAXmean
  } else if (props.dataIndex === 'rcp85_TMEANmean' || props.dataIndex ===  'rcp45_TMEANmean' ){
    data = legendData.indices.rcp85_TMEANmean
  } else if (props.dataIndex === 'rcp85_TMINmean' || props.dataIndex ===  'rcp45_TMINmean' ){
    data = legendData.indices.rcp85_TMINmean
  } else if (props.dataIndex === 'rcp85_TN10P' || props.dataIndex ===  'rcp45_TN10P' ){
    data = legendData.indices.rcp85_TN10P
  } else if (props.dataIndex === 'rcp85_TN90P' || props.dataIndex ===  'rcp45_TN90P' ){
    data = legendData.indices.rcp85_TN90P
  } else if (props.dataIndex === 'rcp85_TNn' || props.dataIndex ===  'rcp45_TNn' ){
    data = legendData.indices.rcp85_TNn
  } else if (props.dataIndex === 'rcp85_TNx' || props.dataIndex ===  'rcp45_TNx' ){
    data = legendData.indices.rcp85_TNx
  } else if (props.dataIndex === 'rcp85_TR20' || props.dataIndex ===  'rcp45_TR20' ){
    data = legendData.indices.rcp85_TR20
  } else if (props.dataIndex === 'rcp85_TR25' || props.dataIndex ===  'rcp45_TR25' ){
    data = legendData.indices.rcp85_TR25
  } else if (props.dataIndex === 'rcp85_TX10P' || props.dataIndex ===  'rcp45_TX10P' ){
    data = legendData.indices.rcp85_TX10P
  } else if (props.dataIndex === 'rcp85_TX90P' || props.dataIndex ===  'rcp45_TX90P' ){
    data = legendData.indices.rcp85_TX90P
  } else if (props.dataIndex === 'rcp85_TXn' || props.dataIndex ===  'rcp45_TXn' ){
    data = legendData.indices.rcp85_TXn
  } else if (props.dataIndex === 'rcp85_TXx' || props.dataIndex ===  'rcp45_TXx' ){
    data = legendData.indices.rcp85_TXx
  } else if (props.dataIndex === 'rcp85_WSDI' || props.dataIndex ===  'rcp45_WSDI' ){
    data = legendData.indices.rcp85_WSDI
  }

  // SPI
  else if (props.dataIndex === 'ensemble85_spi_m1' || props.dataIndex ===  'ensemble45_spi_m1' ){
    data = legendData.spi.ensemble85_spi_m1
  } else if (props.dataIndex === 'ensemble85_spi_m3' || props.dataIndex ===  'ensemble45_spi_m3' ){
    data = legendData.spi.ensemble85_spi_m3
  } else if (props.dataIndex === 'ensemble85_spi_m6' || props.dataIndex ===  'ensemble45_spi_m6' ){
    data = legendData.spi.ensemble85_spi_m6
  } else if (props.dataIndex === 'ensemble85_spi_m9' || props.dataIndex ===  'ensemble45_spi_m9' ){
    data = legendData.spi.ensemble85_spi_m9
  } else if (props.dataIndex === 'ensemble85_spi_m12' || props.dataIndex ===  'ensemble45_spi_m12' ){
    data = legendData.spi.ensemble85_spi_m12
  } else if (props.dataIndex === 'ensemble85_spi_m24' || props.dataIndex ===  'ensemble45_spi_m24' ){
    data = legendData.spi.ensemble85_spi_m24
  } else if (props.dataIndex === 'ensemble85_spi_m36' || props.dataIndex ===  'ensemble45_spi_m36' ){
    data = legendData.spi.ensemble85_spi_m36
  } else if (props.dataIndex === 'ensemble85_spi_m48' || props.dataIndex ===  'ensemble45_spi_m48' ){
    data = legendData.spi.ensemble85_spi_m48
  } else if (props.dataIndex === 'ensemble85_spi_m60' || props.dataIndex ===  'ensemble45_spi_m60' ){
    data = legendData.spi.ensemble85_spi_m60
  }
  var color = data.color

  const interval = (data.max - data.min)/8
  const textSplit = props.dataIndex.split('_')
    
  useEffect(() => {
    // get color depending on population density value
    if (textSplit[1] === 'spi') {
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

    } else if (textSplit[0].substring(0, 3) === 'rcp') {
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