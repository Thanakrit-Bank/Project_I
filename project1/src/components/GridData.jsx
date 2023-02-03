import { GeoJSON, Popup, FeatureGroup } from 'react-leaflet' 
import React, { useState, useEffect } from 'react'
import legendData from  './../data/demolegend'  
import * as turf from '@turf/turf'

function GridData(props) {
    const [data, setData] = useState([])
    
    const url_grid = 'http://127.0.0.1:8000/get_index/'.concat(props.dataIndex,'&',props.pName,'&',props.date,'&',props.index_folder)
    // const url_shp = 'http://127.0.0.1:5000/get_province/'.concat(props.pName)
    
    var dataIndex = legendData.indices.ecearth_rcp85_TMEANmean

    if (props.dataIndex === 'ecearth_rcp85_CDD' || props.dataIndex ===  'ecearth_rcp45_CDD' ){
        dataIndex = legendData.indices.ecearth_rcp85_CDD
    } else if (props.dataIndex === 'ecearth_rcp85_CSDI' || props.dataIndex ===  'ecearth_rcp45_CSDI' ){
        dataIndex = legendData.indices.ecearth_rcp85_CSDI
    } else if (props.dataIndex === 'ecearth_rcp85_CWD' || props.dataIndex ===  'ecearth_rcp45_CWD' ){
        dataIndex = legendData.indices.ecearth_rcp85_CWD
    } else if (props.dataIndex === 'ecearth_rcp85_PRCPTOT' || props.dataIndex ===  'ecearth_rcp45_PRCPTOT' ){
        dataIndex = legendData.indices.ecearth_rcp85_PRCPTOT
    } else if (props.dataIndex === 'ecearth_rcp85_R10mm' || props.dataIndex ===  'ecearth_rcp45_R10mm' ){
        dataIndex = legendData.indices.ecearth_rcp85_R10mm
    } else if (props.dataIndex === 'ecearth_rcp85_RX1day' || props.dataIndex ===  'ecearth_rcp45_RX1day' ){
        dataIndex = legendData.indices.ecearth_rcp85_RX1day
    } else if (props.dataIndex === 'ecearth_rcp85_TMEANmean' || props.dataIndex ===  'ecearth_rcp45_TMEANmean' ){
        dataIndex = legendData.indices.ecearth_rcp85_TMEANmean
    }
   

    // SPI
    else if (props.dataIndex === 'ensemble85_spi_m1' || props.dataIndex ===  'ensemble45_spi_m1' ){
        dataIndex = legendData.spi.ensemble85_spi_m1
    } else if (props.dataIndex === 'ensemble85_spi_m3' || props.dataIndex ===  'ensemble45_spi_m3' ){
        dataIndex = legendData.spi.ensemble85_spi_m3
    } else if (props.dataIndex === 'ensemble85_spi_m6' || props.dataIndex ===  'ensemble45_spi_m6' ){
        dataIndex = legendData.spi.ensemble85_spi_m6
    } else if (props.dataIndex === 'ensemble85_spi_m9' || props.dataIndex ===  'ensemble45_spi_m9' ){
        dataIndex = legendData.spi.ensemble85_spi_m9
    } else if (props.dataIndex === 'ensemble85_spi_m12' || props.dataIndex ===  'ensemble45_spi_m12' ){
        dataIndex = legendData.spi.ensemble85_spi_m12
    } else if (props.dataIndex === 'ensemble85_spi_m24' || props.dataIndex ===  'ensemble45_spi_m24' ){
        dataIndex = legendData.spi.ensemble85_spi_m24
    } else if (props.dataIndex === 'ensemble85_spi_m36' || props.dataIndex ===  'ensemble45_spi_m36' ){
        dataIndex = legendData.spi.ensemble85_spi_m36
    } else if (props.dataIndex === 'ensemble85_spi_m48' || props.dataIndex ===  'ensemble45_spi_m48' ){
        dataIndex = legendData.spi.ensemble85_spi_m48
    } else if (props.dataIndex === 'ensemble85_spi_m60' || props.dataIndex ===  'ensemble45_spi_m60' ){
        dataIndex = legendData.spi.ensemble85_spi_m60
    }
    var color = dataIndex.color
    
    const interval = (dataIndex.max - dataIndex.min)/8
    
    useEffect(()=>{
        const reqOptions ={
                  method:"GET", 
                  headers:{"x-access-token": "test"},
                }
        setData([])
        // fetchData(url_grid)
        fetch(url_grid, {
            method:"GET", 
            headers:{'x-access-token': 'test'},
          })
        .then(r => r.json())
        .then(data => setData(data))
        .catch(error => console.log(error.message))
        console.log(url_grid);
    },[props.pName, props.dataIndex, props.date])

    // function fetchData(url_grid) {
    //     const reqOptions ={
    //     //   method:"GET", 
    //       headers:{"x-access-token": "test"},
    //     }
        
    //     let request_grid = fetch(url_grid, reqOptions);
    //     console.log('feching');
    //     request_grid
    //     .then(r => r.json())
    //     .then(data => {
    //         setData(data)
    //     }, (error) => {
    //         console.error(error);
    //     });

    //     // let request_shp = fetch(url_shp, reqOptions);
    //     // console.log('feching');
    //     // request_shp
    //     // .then(r => r.json())
    //     // .then(data => {
    //     //     setShp(data)
    //     // }, (error) => {
    //     //     console.error(error);
    //     // });
    //   }

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

export default GridData