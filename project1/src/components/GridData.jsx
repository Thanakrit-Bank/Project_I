import {GeoJSON, MapContainer, TileLayer, Popup, FeatureGroup,LayersControl} from 'react-leaflet' 
import React, { useState,useEffect } from 'react'


function GridData(props) {
    const [url, seturl] = useState('http://127.0.0.1:5000/get_grid')
    const [data, setData] = useState([])

    useEffect(()=>{
        fetchData(url)
    }, [])

    function fetchData(url) {
        const reqOptions ={
          method:"get", 
          headers:{"x-access-token": "test"},
        }
          let request = fetch(url, reqOptions);
          console.log('feching');
          request
            .then(r => r.json())
            .then(data => {
                setData(data)
            }, (error) => {
              console.error(error);
            });
      }
    return (
    <FeatureGroup>
        {data.map(data => {
        var myStyleGrid = {
            color: "white",
            weight: 0,
            fillOpacity: 0.75,
            fillColor: 'white',
        }
        if(data.properties.index < 600){
            myStyleGrid.fillColor = '#FFEDA0'
        }else if(data.properties.index < 700){
            myStyleGrid.fillColor = '#FED976'
        }else if(data.properties.index < 800){
            myStyleGrid.fillColor = '#FEB24C'
        }else if(data.properties.index < 900){
            myStyleGrid.fillColor = '#FD8D3C'
        }else if(data.properties.index < 1000){
            myStyleGrid.fillColor = '#FC4E2A'
        }else if(data.properties.index < 1100){
            myStyleGrid.fillColor = '#E31A1C'
        }else if(data.properties.index < 1200){
            myStyleGrid.fillColor = '#BD0026'
        }else {
            myStyleGrid.fillColor = '#800026'
        }
        
        return (
        <GeoJSON key={data.properties.grid_id}  data={data} style={myStyleGrid}>
            {/* {console.log(data)} */}
            <Popup> {Math.round(data.properties.index*1000)/1000} </Popup>
        </GeoJSON>)
        })}
    
    </FeatureGroup> 
  )
}



export default GridData