import { GeoJSON, Popup, FeatureGroup, Polygon } from 'react-leaflet' 
import React, { useState, useEffect } from 'react'
import legendData from  './../data/dataLegend'  
import * as turf from '@turf/turf'

function GridData(props) {
    const [data, setData] = useState([])
    const [shp, setShp] = useState([])
    
    const url_grid = 'http://127.0.0.1:5000/get_index/'.concat(props.dataIndex,'&',props.pName,'&',props.date)
    const url_shp = 'http://127.0.0.1:5000/get_province/'.concat(props.pName)
    
    var dataIndex = legendData.spei
    if (props.dataIndex === 'spei'){
      dataIndex = legendData.spei
    }else if(props.dataIndex === 'cdd_mpi' ||  'cdd_era' ){
      dataIndex = legendData.cdd_mpi
    }
    var color = dataIndex.color
    
    const interval = (dataIndex.max - dataIndex.min)/8
    
    useEffect(()=>{
        setData([])
        fetchData(url_grid, url_shp)
        console.log(url_grid);
    },[props.pName, props.dataIndex, props.date])

    function fetchData(url_grid,url_shp) {
        const reqOptions ={
          method:"get", 
          headers:{"x-access-token": "test"},
        }
        
        let request_grid = fetch(url_grid, reqOptions);
        console.log('feching');
        request_grid
        .then(r => r.json())
        .then(data => {
            setData(data)
        }, (error) => {
            console.error(error);
        });

        let request_shp = fetch(url_shp, reqOptions);
        console.log('feching');
        request_shp
        .then(r => r.json())
        .then(data => {
            setShp(data)
        }, (error) => {
            console.error(error);
        });
      }

    const setCenter = (coordinate) => {
        props.SetViewOnChange(coordinate)
    }

    return (
    <FeatureGroup>
        {data.map(data => {
            var myStyleGrid = {
                color: "white",
                weight: 0,
                fillOpacity: 0.75,
                fillColor: 'white',
                borderColor: 'black'
            }

            if (data.properties.time_index){
                setCenter(data.geometry.coordinates[0][0])
            }

            if(data.properties.index < dataIndex.min){
                myStyleGrid.fillColor = color[8]
            }else if(data.properties.index < dataIndex.min + interval){
                myStyleGrid.fillColor = color[7]
            }else if(data.properties.index < dataIndex.min + 2*interval){
                myStyleGrid.fillColor = color[6]
            }else if(data.properties.index < dataIndex.min + 3*interval){
                myStyleGrid.fillColor = color[5]
            }else if(data.properties.index < dataIndex.min + 4*interval){
                myStyleGrid.fillColor = color[4]
            }else if(data.properties.index < dataIndex.min + 5*interval){
                myStyleGrid.fillColor = color[3]
            }else if(data.properties.index < dataIndex.min + 6*interval){
                myStyleGrid.fillColor = color[2]
            }else if(data.properties.index < dataIndex.min + 7*interval){
                myStyleGrid.fillColor = color[1]
            }else if(data.properties.index < dataIndex.min + 8*interval){
                myStyleGrid.fillColor = color[0]
            }else {
                myStyleGrid.fillColor = color[9]
            }
            try {
                var poly1 = turf.polygon(data.geometry.coordinates)
            } catch  {
                poly1 = turf.multiPolygon(data.geometry.coordinates)
            }
            
            return (
                <div>
                    <GeoJSON key={data.properties.grid_id}  data={poly1} style={myStyleGrid}>
                        <Popup> {Math.round(data.properties.index*1000)/1000} </Popup>
                    </GeoJSON>
                </div>
                )
            
            })
        }        
    </FeatureGroup> 
  )
}

export default GridData