import { GeoJSON, Popup, FeatureGroup } from 'react-leaflet' 
import React, { useState, useEffect } from 'react'
import legendData from  './../data/dataLegend'  
import * as turf from '@turf/turf'

function GridData(props) {
    const [data, setData] = useState([])
    const [shp, setShp] = useState([])
    const [isLoadinga, setIsLoadinga] = useState(true)
    const [isLoadingb, setIsLoadingb] = useState(true)
    const url_grid = 'http://127.0.0.1:5000/get_index/'.concat(props.dataIndex,'&',props.pName,'&','2006-01')
    const url_shp = 'http://127.0.0.1:5000/get_province/'.concat(props.pName)
    const interval = (legendData.spei.max - legendData.spei.min)/8
    const twoDegit = parseFloat(interval).toFixed(2)
    
    useEffect(()=>{
        setData([])
        fetchData(url_grid, url_shp)
        console.log(url_grid);
    },[props.pName, props.dataIndex])

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
            setIsLoadinga(false)
        }, (error) => {
            console.error(error);
        });

        let request_shp = fetch(url_shp, reqOptions);
        console.log('feching');
        request_shp
        .then(r => r.json())
        .then(data => {
            setShp(data)
            setIsLoadingb(false)
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
                borderColor: 'black'
            }
            if(data.properties.index < legendData.spei.min + twoDegit){
                myStyleGrid.fillColor = '#FFEDA0'
            }else if(data.properties.index < legendData.spei.min + 2*twoDegit){
                myStyleGrid.fillColor = '#FED976'
            }else if(data.properties.index < legendData.spei.min + 3*twoDegit){
                myStyleGrid.fillColor = '#FEB24C'
            }else if(data.properties.index < legendData.spei.min + 4*twoDegit){
                myStyleGrid.fillColor = '#FD8D3C'
            }else if(data.properties.index < legendData.spei.min + 5*twoDegit){
                myStyleGrid.fillColor = '#FC4E2A'
            }else if(data.properties.index < legendData.spei.min + 6*twoDegit){
                myStyleGrid.fillColor = '#E31A1C'
            }else if(data.properties.index < legendData.spei.min + 7*twoDegit){
                myStyleGrid.fillColor = '#BD0026'
            }else {
                myStyleGrid.fillColor = '#800026'
            }
            // console.log(intersection);
            if (isLoadinga && isLoadingb){
                return(<div className='map-view select'>Loading.....</div>)
            }else{
                var poly1 = turf.polygon(data.geometry.coordinates)
                var poly2 = turf.polygon(shp.features.geometry.coordinates)
                var intersection = turf.intersect(poly1, poly2)
                return (
                    <div>
                        <GeoJSON key={data.properties.grid_id}  data={intersection} style={myStyleGrid}>
                            <Popup> {Math.round(data.properties.index*1000)/1000} </Popup>
                        </GeoJSON>
                    </div>
                    )
            }
            })
        }        
        <GeoJSON key={shp} data={shp}>
            {/* {console.log(shp.features.properties.id)} */}
        </GeoJSON> 
    </FeatureGroup> 
  )
}

export default GridData