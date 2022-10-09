import { useMap } from "react-leaflet";
import L from "leaflet";
import { useEffect } from "react";
import legendData from  './../data/dataLegend'  

const Legend = (props) => {
    const mapInstance = useMap();

    var data = legendData.spei
    if (props.dataIndex === 'spei'){
      data = legendData.spei
    }else if(props.dataIndex === 'cdd_mpi' ||  'cdd_era' ){
      data = legendData.cdd_mpi
    }
    var color = data.color

    const interval = (data.max - data.min)/8
    const twoDegit = parseFloat(interval).toFixed(2)
    
    useEffect(() => {
    // get color depending on population density value
    const getColor = d => {
      return d > data.min + 7*interval
        ? color[0]
        : d > data.min + 6*interval
        ? color[1]
        : d > data.min + 5*interval
        ? color[2]
        : d > data.min + 4*interval
        ? color[3]
        : d > data.min + 3*interval
        ? color[4]
        : d > data.min + 2*interval
        ? color[5]
        : d > data.min + interval
        ? color[6]
        : d > data.min
        ? color[7]
        : color[8]
    };

    const legend = L.control({ position: "bottomright" });

    legend.onAdd = () => {
      const div = L.DomUtil.create("div", "info legend");
      const grades = 
      [
        (data.min + 7*twoDegit).toFixed(2), 
        (data.min + 6*twoDegit).toFixed(2), 
        (data.min + 5*twoDegit).toFixed(2), 
        (data.min + 4*twoDegit).toFixed(2), 
        (data.min + 3*twoDegit).toFixed(2), 
        (data.min + 2*twoDegit).toFixed(2), 
        (data.min + 1*twoDegit).toFixed(2),
        data.min
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
            (to ? " &ndash; " + to : " > ")
        );
      }

      div.innerHTML = labels.join("<br>");
      return div;
    };

    legend.addTo(mapInstance);

    return () => legend.remove();
  } , [props.dataIndex]);
  return null;
};

export default Legend;
