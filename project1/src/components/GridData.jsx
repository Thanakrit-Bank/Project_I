import {GeoJSON, Popup, FeatureGroup} from 'react-leaflet' 
import React, { useState,useEffect } from 'react'
import legendData from  './../data/dataLegend'  

function GridData(props) {
    // const [url, setUrl] = useState('http://127.0.0.1:5000/get_spei/Amnat Charoen&1902-02')
    // const [url, seturl] = useState('http://127.0.0.1:5000/get_province/Chiang Mai')
    // const [url, seturl] = useState('http://127.0.0.1:5000/get_grid')
    const [data, setData] = useState([])
    const url = 'http://127.0.0.1:5000/get_spei/'.concat(props.pName).concat('&1902-02')
    const interval = (legendData.spei.max - legendData.spei.min)/8

    useEffect(()=>{
        setData([])
        fetchData(url)
        console.log(url);
    },[props.pName])

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
        if(data.properties.index < legendData.spei.min + interval){
            myStyleGrid.fillColor = '#FFEDA0'
        }else if(data.properties.index < legendData.spei.min + 2*interval){
            myStyleGrid.fillColor = '#FED976'
        }else if(data.properties.index < legendData.spei.min + 3*interval){
            myStyleGrid.fillColor = '#FEB24C'
        }else if(data.properties.index < legendData.spei.min + 4*interval){
            myStyleGrid.fillColor = '#FD8D3C'
        }else if(data.properties.index < legendData.spei.min + 5*interval){
            myStyleGrid.fillColor = '#FC4E2A'
        }else if(data.properties.index < legendData.spei.min + 6*interval){
            myStyleGrid.fillColor = '#E31A1C'
        }else if(data.properties.index < legendData.spei.min + 7*interval){
            myStyleGrid.fillColor = '#BD0026'
        }else {
            myStyleGrid.fillColor = '#800026'
        }
        
        return (
        <GeoJSON key={data.properties.grid_id}  data={data} style={myStyleGrid}>
            {console.log(data)}
            <Popup> {Math.round(data.properties.index*1000)/1000} </Popup>
        </GeoJSON>)
        })}
        {console.log(props.pName)}
        {console.log(url)}
        {console.log('return')}
    </FeatureGroup> 
  )
}



export default GridData