import { useEffect } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";
import * as d3 from "d3";

const Legend2 = () => {
    // var data = [{"color":"#000004","value":0},{"color":"#02020c","value":5},{"color":"#050417","value":10},{"color":"#0a0722","value":15},{"color":"#10092d","value":20},{"color":"#160b39","value":25},{"color":"#1e0c45","value":30},{"color":"#260c51","value":35},{"color":"#2f0a5b","value":40},{"color":"#380962","value":45},{"color":"#400a67","value":50},{"color":"#490b6a","value":55},{"color":"#510e6c","value":60},{"color":"#59106e","value":65},{"color":"#61136e","value":70},{"color":"#69166e","value":75},{"color":"#71196e","value":80},{"color":"#781c6d","value":85},{"color":"#801f6c","value":90},{"color":"#88226a","value":95},{"color":"#902568","value":100},{"color":"#982766","value":105},{"color":"#a02a63","value":110},{"color":"#a82e5f","value":115},{"color":"#b0315b","value":120},{"color":"#b73557","value":125},{"color":"#bf3952","value":130},{"color":"#c63d4d","value":135},{"color":"#cc4248","value":140},{"color":"#d34743","value":145},{"color":"#d94d3d","value":150},{"color":"#df5337","value":155},{"color":"#e45a31","value":160},{"color":"#e9612b","value":165},{"color":"#ed6925","value":170},{"color":"#f1711f","value":175},{"color":"#f47918","value":180},{"color":"#f78212","value":185},{"color":"#f98b0b","value":190},{"color":"#fa9407","value":195},{"color":"#fb9d07","value":200},{"color":"#fca60c","value":205},{"color":"#fcb014","value":210},{"color":"#fbba1f","value":215},{"color":"#fac42a","value":220},{"color":"#f8cd37","value":225},{"color":"#f6d746","value":230},{"color":"#f4e156","value":235},{"color":"#f2ea69","value":240},{"color":"#f2f27d","value":245},{"color":"#f5f992","value":250}];
    
    const mapInstance = useMap();

    useEffect (() => {
        const legend = L.control({ position: "bottomright" });
        
        legend.onAdd = () => {
            const div = L.DomUtil.create("div", "info legend");
            
            var data = [
                {"color":"#d94d3d","value":0},
                {"color":"#f46d43","value":50},
                {"color":"#fdae61","value":100},
                {"color":"#fee08b","value":150},
                {"color":"#ffffbf","value":200},
                {"color":"#e6f598","value":250},
                {"color":"#abdda4","value":300},
                {"color":"#66c2a5","value":350},
                {"color":"#3288bd","value":400}
            ];
            
            var extent = d3.extent(data, d => d.value);
        
            var padding = 9;
            var width = 400;
            var innerWidth = width - (padding * 2);
            var barHeight = 8;
            var height = 40;
        
            var xScale = d3.scaleLinear()
                .range([0, innerWidth])
                .domain(extent);
        
            var xTicks = data.filter(f => f.value % 50 === 0).map(d => d.value);
        
            var xAxis = d3.axisBottom(xScale)
                .tickSize(barHeight * 2)
                .tickValues(xTicks);
        
            var svg = d3.select("body").append("svg").attr("width", width).attr("height", height);
            var g = svg.append("g").attr("transform", "translate(" + padding + ", 0)");
        
            var defs = svg.append("defs");
            var linearGradient = defs.append("linearGradient").attr("id", "myGradient");
            
            linearGradient.selectAll("stop")
                .data(data)
              .enter().append("stop")
                .attr("offset", d => ((d.value - extent[0]) / (extent[1] - extent[0]) * 100) + "%")
                .attr("stop-color", d => d.color);

            // g.append("rect")
            //     .attr("width", innerWidth)
            //     .attr("height", barHeight)
            //     .style("fill", "url(#myGradient)");

            // g.append("g")
            //     .call(xAxis)
            //     .select(".domain").remove();

            let labels = [];

            labels.push(
                '<i style="background:' 
                +
                g.append("rect")
                    .attr("width", innerWidth)
                    .attr("height", barHeight)
                    .style("fill", "url(#myGradient)") 
                +
                '"></i>' 
                +             
                g.append("g")
                    .call(xAxis)
                    .select(".domain").remove() 
            );

            div.innerHTML = 
                labels.join("<br>");
            return div;
        }

          legend.addTo(mapInstance);
      
          return () => legend.remove();
    }, [])
    
    // var data = [
    //     {"color":"#d94d3d","value":0},
    //     {"color":"#f46d43","value":50},
    //     {"color":"#fdae61","value":100},
    //     {"color":"#fee08b","value":150},
    //     {"color":"#ffffbf","value":200},
    //     {"color":"#e6f598","value":250},
    //     {"color":"#abdda4","value":300},
    //     {"color":"#66c2a5","value":350},
    //     {"color":"#3288bd","value":400}
    // ];

    // var extent = d3.extent(data, d => d.value);
    
    // var padding = 9;
    // var width = 400;
    // var innerWidth = width - (padding * 2);
    // var barHeight = 8;
    // var height = 40;

    // var xScale = d3.scaleLinear()
    //     .range([0, innerWidth])
    //     .domain(extent);

    // var xTicks = data.filter(f => f.value % 50 === 0).map(d => d.value);

    // var xAxis = d3.axisBottom(xScale)
    //     .tickSize(barHeight * 2)
    //     .tickValues(xTicks);

    // var svg = d3.select("body").append("svg").attr("width", width).attr("height", height);
    // var g = svg.append("g").attr("transform", "translate(" + padding + ", 0)");

    // var defs = svg.append("defs");
    // var linearGradient = defs.append("linearGradient").attr("id", "myGradient");
    // linearGradient.selectAll("stop")
    //     .data(data)
    //   .enter().append("stop")
    //     .attr("offset", d => ((d.value - extent[0]) / (extent[1] - extent[0]) * 100) + "%")
    //     .attr("stop-color", d => d.color);

    // // สร้างแถบสี
    // g.append("rect")
    //     .attr("width", innerWidth)
    //     .attr("height", barHeight)
    //     .style("fill", "url(#myGradient)");

    // // สร้างแกน X
    // g.append("g")
    //     .call(xAxis)
    //   .select(".domain").remove();
}

export default Legend2;