import { GeoJSON, Popup, FeatureGroup } from 'react-leaflet' 
import React, { useState, useEffect } from 'react'
import * as turf from '@turf/turf'

const Grid = (props) => {
  const [data, setData] = useState([])

  // API url
  const url_grid = ""
  const url_shp = ""

  var dataIndex = ""

  // if (props.dataIndex === 'ecearth_rcp85_CDD' || props.dataIndex ===  'ecearth_rcp45_CDD' ){
  //   dataIndex = legendData.indices.ecearth_rcp85_CDD
  // } else if (props.dataIndex === 'ecearth_rcp85_CSDI' || props.dataIndex ===  'ecearth_rcp45_CSDI' ){
  //     dataIndex = legendData.indices.ecearth_rcp85_CSDI
  // } else if (props.dataIndex === 'ecearth_rcp85_CWD' || props.dataIndex ===  'ecearth_rcp45_CWD' ){
  //     dataIndex = legendData.indices.ecearth_rcp85_CWD
  // } else if (props.dataIndex === 'ecearth_rcp85_PRCPTOT' || props.dataIndex ===  'ecearth_rcp45_PRCPTOT' ){
  //     dataIndex = legendData.indices.ecearth_rcp85_PRCPTOT
  // } else if (props.dataIndex === 'ecearth_rcp85_R10mm' || props.dataIndex ===  'ecearth_rcp45_R10mm' ){
  //     dataIndex = legendData.indices.ecearth_rcp85_R10mm
  // } else if (props.dataIndex === 'ecearth_rcp85_RX1day' || props.dataIndex ===  'ecearth_rcp45_RX1day' ){
  //     dataIndex = legendData.indices.ecearth_rcp85_RX1day
  // } else if (props.dataIndex === 'ecearth_rcp85_TMEANmean' || props.dataIndex ===  'ecearth_rcp45_TMEANmean' ){
  //     dataIndex = legendData.indices.ecearth_rcp85_TMEANmean
  // }

  var color = dataIndex.color
  
  const interval = (dataIndex.max - dataIndex.min)/8

  useEffect(()=>{
    setData([])
    fetchData(url_grid, url_shp)
    console.log(url_grid);
  }, [])

  function fetchData(url_grid, url_shp) {
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
                fillOpacity: 0.9,
                fillColor: 'white',
                borderColor: 'black'
            }

            if (data.properties.time_index){
                setCenter(data.geometry.coordinates[0][0])
                props.setTimeSeriesData(data.properties.time_series)
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
                myStyleGrid.fillColor = color[0]
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

export default Grid