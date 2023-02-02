import { useEffect } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";

const Legend = (props) => {

  const mapInstance = useMap();

  var data = ""

  // if (props.dataIndex === 'ecearth_rcp85_CDD' || props.dataIndex ===  'ecearth_rcp45_CDD' ){
  //     data = legendData.indices.ecearth_rcp85_CDD
  // } else if (props.dataIndex === 'ecearth_rcp85_CSDI' || props.dataIndex ===  'ecearth_rcp45_CSDI' ){
  //     data = legendData.indices.ecearth_rcp85_CSDI
  // } else if (props.dataIndex === 'ecearth_rcp85_CWD' || props.dataIndex ===  'ecearth_rcp45_CWD' ){
  //     data = legendData.indices.ecearth_rcp85_CWD
  // } else if (props.dataIndex === 'ecearth_rcp85_PRCPTOT' || props.dataIndex ===  'ecearth_rcp45_PRCPTOT' ){
  //     data = legendData.indices.ecearth_rcp85_PRCPTOT
  // } else if (props.dataIndex === 'ecearth_rcp85_R10mm' || props.dataIndex ===  'ecearth_rcp45_R10mm' ){
  //     data = legendData.indices.ecearth_rcp85_R10mm
  // } else if (props.dataIndex === 'ecearth_rcp85_RX1day' || props.dataIndex ===  'ecearth_rcp45_RX1day' ){
  //     data = legendData.indices.ecearth_rcp85_RX1day
  // } else if (props.dataIndex === 'ecearth_rcp85_TMEANmean' || props.dataIndex ===  'ecearth_rcp45_TMEANmean' ){
  //     data = legendData.indices.ecearth_rcp85_TMEANmean
  // }

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

    } else if (textSplit[1].substring(0, 3) === 'rcp') {
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