import { GeoJSON, Popup, FeatureGroup } from 'react-leaflet' 
import React, { useState, useEffect } from 'react'
import legendData from  './../data/dataLegend'  
import * as turf from '@turf/turf'

function GridData(props) {
    const [data, setData] = useState([])
    
    const url_grid = 'http://127.0.0.1:5000/get_index/'.concat(props.dataIndex,'&',props.pName,'&',props.date,'&',props.index_folder)
    const url_shp = 'http://127.0.0.1:5000/get_province/'.concat(props.pName)
    
    var dataIndex = legendData.indices_bak.rcp45_PRCPTOT
    // Indices_bak
    if (props.dataIndex === 'rcp85_TMEANmean' || props.dataIndex ===  'rcp45_TMEANmean' ){
        dataIndex = legendData.indices_bak.rcp85_TMEANmean
    } else if (props.dataIndex === 'rcp85_PRCPTOT' || props.dataIndex ===  'rcp45_PRCPTOT' ){
        dataIndex = legendData.indices_bak.rcp85_PRCPTOT
    }        
    
    // Indices
    else if (props.dataIndex === 'rcp85_CDD' || props.dataIndex ===  'rcp45_CDD' ){
        dataIndex = legendData.indices.rcp85_CDD
    } else if (props.dataIndex === 'rcp85_CSDI' || props.dataIndex ===  'rcp45_CSDI' ){
        dataIndex = legendData.indices.rcp85_CSDI
    } else if (props.dataIndex === 'rcp85_CWD' || props.dataIndex ===  'rcp45_CWD' ){
        dataIndex = legendData.indices.rcp85_CWD
    } else if (props.dataIndex === 'rcp85_DTR' || props.dataIndex ===  'rcp45_DTR' ){
        dataIndex = legendData.indices.rcp85_DTR
    } else if (props.dataIndex === 'rcp85_FD0' || props.dataIndex ===  'rcp45_FD0' ){
        dataIndex = legendData.indices.rcp85_FD0
    } else if (props.dataIndex === 'rcp85_FD16' || props.dataIndex ===  'rcp45_FD16' ){
        dataIndex = legendData.indices.rcp85_FD16
    } else if (props.dataIndex === 'rcp85_ID0' || props.dataIndex ===  'rcp45_ID0' ){
        dataIndex = legendData.indices.rcp85_ID0
    } else if (props.dataIndex === 'rcp85_PRCPTOT' || props.dataIndex ===  'rcp45_PRCPTOT' ){
        dataIndex = legendData.indices.rcp85_PRCPTOT
    } else if (props.dataIndex === 'rcp85_R10mm' || props.dataIndex ===  'rcp45_R10mm' ){
        dataIndex = legendData.indices.rcp85_R10mm
    } else if (props.dataIndex === 'rcp85_R20mm' || props.dataIndex ===  'rcp45_R20mm' ){
        dataIndex = legendData.indices.rcp85_R20mm
    } else if (props.dataIndex === 'rcp85_R25mm' || props.dataIndex ===  'rcp45_R25mm' ){
        dataIndex = legendData.indices.rcp85_R25mm
    } else if (props.dataIndex === 'rcp85_R95p' || props.dataIndex ===  'rcp45_R95p' ){
        dataIndex = legendData.indices.rcp85_R95p
    } else if (props.dataIndex === 'rcp85_R99p' || props.dataIndex ===  'rcp45_R99p' ){
        dataIndex = legendData.indices.rcp85_R99p
    } else if (props.dataIndex === 'rcp85_RX1day' || props.dataIndex ===  'rcp45_RX1day' ){
        dataIndex = legendData.indices.rcp85_RX1day
    } else if (props.dataIndex === 'rcp85_RX5day' || props.dataIndex ===  'rcp45_RX5day' ){
        dataIndex = legendData.indices.rcp85_RX5day
    } else if (props.dataIndex === 'rcp85_SDII' || props.dataIndex ===  'rcp45_SDII' ){
        dataIndex = legendData.indices.rcp85_SDII
    } else if (props.dataIndex === 'rcp85_SU25' || props.dataIndex ===  'rcp45_SU25' ){
        dataIndex = legendData.indices.rcp85_SU25
    } else if (props.dataIndex === 'rcp85_SU35' || props.dataIndex ===  'rcp45_SU35' ){
        dataIndex = legendData.indices.rcp85_SU35
    } else if (props.dataIndex === 'rcp85_TMAXmean' || props.dataIndex ===  'rcp45_TMAXmean' ){
        dataIndex = legendData.indices.rcp85_TMAXmean
    } else if (props.dataIndex === 'rcp85_TMEANmean' || props.dataIndex ===  'rcp45_TMEANmean' ){
        dataIndex = legendData.indices.rcp85_TMEANmean
    } else if (props.dataIndex === 'rcp85_TMINmean' || props.dataIndex ===  'rcp45_TMINmean' ){
        dataIndex = legendData.indices.rcp85_TMINmean
    } else if (props.dataIndex === 'rcp85_TN10P' || props.dataIndex ===  'rcp45_TN10P' ){
        dataIndex = legendData.indices.rcp85_TN10P
    } else if (props.dataIndex === 'rcp85_TN90P' || props.dataIndex ===  'rcp45_TN90P' ){
        dataIndex = legendData.indices.rcp85_TN90P
    } else if (props.dataIndex === 'rcp85_TNn' || props.dataIndex ===  'rcp45_TNn' ){
        dataIndex = legendData.indices.rcp85_TNn
    } else if (props.dataIndex === 'rcp85_TNx' || props.dataIndex ===  'rcp45_TNx' ){
        dataIndex = legendData.indices.rcp85_TNx
    } else if (props.dataIndex === 'rcp85_TR20' || props.dataIndex ===  'rcp45_TR20' ){
        dataIndex = legendData.indices.rcp85_TR20
    } else if (props.dataIndex === 'rcp85_TR25' || props.dataIndex ===  'rcp45_TR25' ){
        dataIndex = legendData.indices.rcp85_TR25
    } else if (props.dataIndex === 'rcp85_TX10P' || props.dataIndex ===  'rcp45_TX10P' ){
        dataIndex = legendData.indices.rcp85_TX10P
    } else if (props.dataIndex === 'rcp85_TX90P' || props.dataIndex ===  'rcp45_TX90P' ){
        dataIndex = legendData.indices.rcp85_TX90P
    } else if (props.dataIndex === 'rcp85_TXn' || props.dataIndex ===  'rcp45_TXn' ){
        dataIndex = legendData.indices.rcp85_TXn
    } else if (props.dataIndex === 'rcp85_TXx' || props.dataIndex ===  'rcp45_TXx' ){
        dataIndex = legendData.indices.rcp85_TXx
    } else if (props.dataIndex === 'rcp85_WSDI' || props.dataIndex ===  'rcp45_WSDI' ){
        dataIndex = legendData.indices.rcp85_WSDI
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

        // let request_shp = fetch(url_shp, reqOptions);
        // console.log('feching');
        // request_shp
        // .then(r => r.json())
        // .then(data => {
        //     setShp(data)
        // }, (error) => {
        //     console.error(error);
        // });
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
                    {/* <Polygon pathOptions={myStyleGrid} positions={poly2}/> */}
                </div>
                )           
            })
        }        
    </FeatureGroup> 
  )
}

export default GridData