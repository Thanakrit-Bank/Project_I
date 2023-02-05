import React, { useState, useEffect} from 'react'
import { GeoJSON, Popup, FeatureGroup } from 'react-leaflet' 
import * as turf from '@turf/turf'
import dataIndex from '../../data/dataLegend'

const Grid = (props) => {
    const [data, setData] = useState([])
    
    // const url_grid = 'http://127.0.0.1:8000/get_index/'.concat(props.dataindex,'&',props.pName,'&',props.date,'&',props.index_folder)
    // const url_shp = 'http://127.0.0.1:5000/get_province/'.concat(props.pName)
    
    var dataindex = dataIndex.indices.CDD 

    // if (props.dataindex === 'ecearth_rcp85_CDD' || props.dataindex ===  'ecearth_rcp45_CDD' ){
    //     dataindex = legendData.indices.ecearth_rcp85_CDD
    // } else if (props.dataindex === 'ecearth_rcp85_CSDI' || props.dataindex ===  'ecearth_rcp45_CSDI' ){
    //     dataindex = legendData.indices.ecearth_rcp85_CSDI
    // } else if (props.dataindex === 'ecearth_rcp85_CWD' || props.dataindex ===  'ecearth_rcp45_CWD' ){
    //     dataindex = legendData.indices.ecearth_rcp85_CWD
    // } else if (props.dataindex === 'ecearth_rcp85_PRCPTOT' || props.dataindex ===  'ecearth_rcp45_PRCPTOT' ){
    //     dataindex = legendData.indices.ecearth_rcp85_PRCPTOT
    // } else if (props.dataindex === 'ecearth_rcp85_R10mm' || props.dataindex ===  'ecearth_rcp45_R10mm' ){
    //     dataindex = legendData.indices.ecearth_rcp85_R10mm
    // } else if (props.dataindex === 'ecearth_rcp85_RX1day' || props.dataindex ===  'ecearth_rcp45_RX1day' ){
    //     dataindex = legendData.indices.ecearth_rcp85_RX1day
    // } else if (props.dataindex === 'ecearth_rcp85_TMEANmean' || props.dataindex ===  'ecearth_rcp45_TMEANmean' ){
    //     dataindex = legendData.indices.ecearth_rcp85_TMEANmean
    // }
   

    // // SPI
    // else if (props.dataindex === 'ensemble85_spi_m1' || props.dataindex ===  'ensemble45_spi_m1' ){
    //     dataindex = legendData.spi.ensemble85_spi_m1
    // } else if (props.dataindex === 'ensemble85_spi_m3' || props.dataindex ===  'ensemble45_spi_m3' ){
    //     dataindex = legendData.spi.ensemble85_spi_m3
    // } else if (props.dataindex === 'ensemble85_spi_m6' || props.dataindex ===  'ensemble45_spi_m6' ){
    //     dataindex = legendData.spi.ensemble85_spi_m6
    // } else if (props.dataindex === 'ensemble85_spi_m9' || props.dataindex ===  'ensemble45_spi_m9' ){
    //     dataindex = legendData.spi.ensemble85_spi_m9
    // } else if (props.dataindex === 'ensemble85_spi_m12' || props.dataindex ===  'ensemble45_spi_m12' ){
    //     dataindex = legendData.spi.ensemble85_spi_m12
    // } else if (props.dataindex === 'ensemble85_spi_m24' || props.dataindex ===  'ensemble45_spi_m24' ){
    //     dataindex = legendData.spi.ensemble85_spi_m24
    // } else if (props.dataindex === 'ensemble85_spi_m36' || props.dataindex ===  'ensemble45_spi_m36' ){
    //     dataindex = legendData.spi.ensemble85_spi_m36
    // } else if (props.dataindex === 'ensemble85_spi_m48' || props.dataindex ===  'ensemble45_spi_m48' ){
    //     dataindex = legendData.spi.ensemble85_spi_m48
    // } else if (props.dataindex === 'ensemble85_spi_m60' || props.dataindex ===  'ensemble45_spi_m60' ){
    //     dataindex = legendData.spi.ensemble85_spi_m60
    // }
    var color = dataindex.color
    
    const interval = (dataindex.max - dataindex.min)/8
    
    useEffect(()=>{
        const reqOptions ={
                  method:"GET", 
                  headers:{"x-access-token": "test"},
                }
        setData([])
        // fetchData(url_grid)
        fetch('http://127.0.0.1:8000/get_index/ecearth_rcp45_CDD&Thailand&Sun Jan 01 2006 00:00:00 GMT+0700,Sat Dec 01 2007 00:00:00 GMT+0700&indices', reqOptions)
        .then(r => r.json())
        .then(data => setData(data))
        .catch(error => console.log(error.message))
        // console.log(url_grid);
    },[props.area])

    const setCenter = (coordinate) => {
        // props.SetViewOnChange(coordinate)
        // console.log(coordinate)
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

            if(data.properties.index < dataindex.min){
                myStyleGrid.fillColor = color[8]
            }else if(data.properties.index < dataindex.min + interval){
                myStyleGrid.fillColor = color[7]
            }else if(data.properties.index < dataindex.min + 2*interval){
                myStyleGrid.fillColor = color[6]
            }else if(data.properties.index < dataindex.min + 3*interval){
                myStyleGrid.fillColor = color[5]
            }else if(data.properties.index < dataindex.min + 4*interval){
                myStyleGrid.fillColor = color[4]
            }else if(data.properties.index < dataindex.min + 5*interval){
                myStyleGrid.fillColor = color[3]
            }else if(data.properties.index < dataindex.min + 6*interval){
                myStyleGrid.fillColor = color[2]
            }else if(data.properties.index < dataindex.min + 7*interval){
                myStyleGrid.fillColor = color[1]
            }else if(data.properties.index < dataindex.min + 8*interval){
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