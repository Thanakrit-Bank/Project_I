import React, { useState, useEffect} from 'react'
import { GeoJSON, Popup, FeatureGroup } from 'react-leaflet' 
import dataIndex from '../../data/dataLegend'
import * as turf from '@turf/turf'

const Grid = (props) => {
   
    const [data, setData] = useState([])
        
    const url = "http://127.0.0.1:8000/get_index"
    // const url = "https://fastapi-backend-379503.et.r.appspot.com/get_index"
    const area = props.area
    const dateInput = props.date
    const dataNameArray = props.data.split('@')
    let dataProvider = dataNameArray[0]
    let typeValue = dataNameArray[1]
    let typeIdex = dataNameArray[2]
    const indexName = dataNameArray[3]
    // ecearth@RCP4.5@indices@CDD
    // ecearth@RCP4.5@SPI@12  month

    var dataindex = dataIndex[typeIdex][indexName]
    // var max = props.legendMax
    // var min = props.legendMin
       
    if (typeIdex === 'SPI') {
        dataindex = dataIndex[typeIdex]['spi']
    }
    var colors = dataindex.color
    var max = dataindex.max
    var min = dataindex.min
    
    if (props.legendMax !== '' && props.legendMin !== '') {
        max = props.legendMax
        min = props.legendMin
    }

    // console.log('datalegend gridpage : ', min, max);
    // console.log('props gridpage : ',props.legendMin, props.legendMax);
    const interval = (max - min)/8

    if (typeValue === 'RCP4.5') {
        typeValue = 'rcp45'
    } else {
        typeValue = 'rcp85'
    }

    if (dataProvider === 'ensemble') {
        dataProvider = 'mpi'
    }

    let urlRequest = url.concat('/',dataProvider,'_',typeValue,'_', indexName, '&', area.split(' ')[0], '&', dateInput, '&', typeIdex)

    if (typeIdex === 'SPI') {
        typeIdex = '_SPI'
        if (typeValue === 'RCP4.5') {
            typeValue = '45'
        } else {
            typeValue = '85'
        }
        urlRequest = url.concat('/',dataProvider,typeValue,'_', 'spi', '_m', indexName.split(' ')[0], '&', area.split(' ')[0], '&', dateInput, '&', typeIdex)
    }

    useEffect(()=>{
        const reqOptions ={
                  method:"GET", 
                  headers:{"x-access-token": "test"},
                }
        setData([])
        console.log(urlRequest);
        fetch(urlRequest, reqOptions)
        .then(r => r.json())
        .then(data => setData(data))
        .catch(error => console.log(error.message))
    },[props.area, props.data, props.date, props.gridOpacity, props.legendMax, props.legendMin, urlRequest])

    return (
        <FeatureGroup>
            {data.map(data => {
                var myStyleGrid = {
                    color: "white",
                    weight: 0,
                    fillOpacity: props.gridOpacity/10,
                    fillColor: 'white',
                    borderColor: 'black'
                }

                if (data.properties.time_index){
                    props.SetViewOnChange(data.geometry.coordinates[0][0])
                    props.setTimeSeriesData(data.properties.time_series)
                    props.setSeasonalData(data.properties.seasonal)
                }

                if(data.properties.index < min){
                    let defualtColor = colors[8].split(', ')
                    let opacity = (props.gridOpacity/10).toString().concat(")")
                    let color = defualtColor.splice(defualtColor.length-1,1,opacity)
                    let rgbaColor = defualtColor.join(', ')
                    myStyleGrid.fillColor = rgbaColor
                    // console.log(rgbaColor);
                    // myStyleGrid.fillColor = color[8]
                }else if(data.properties.index < min + interval){
                    let defualtColor = colors[7].split(', ')
                    let opacity = (props.gridOpacity/10).toString().concat(")")
                    let color = defualtColor.splice(defualtColor.length-1,1,opacity)
                    let rgbaColor = defualtColor.join(', ')
                    myStyleGrid.fillColor = rgbaColor
                    // myStyleGrid.fillColor = color[7]
                }else if(data.properties.index < min + 2*interval){
                    let defualtColor = colors[6].split(', ')
                    let opacity = (props.gridOpacity/10).toString().concat(")")
                    let color = defualtColor.splice(defualtColor.length-1,1,opacity)
                    let rgbaColor = defualtColor.join(', ')
                    myStyleGrid.fillColor = rgbaColor
                    // myStyleGrid.fillColor = color[6]
                }else if(data.properties.index < min + 3*interval){
                    let defualtColor = colors[5].split(', ')
                    let opacity = (props.gridOpacity/10).toString().concat(")")
                    let color = defualtColor.splice(defualtColor.length-1,1,opacity)
                    let rgbaColor = defualtColor.join(', ')
                    myStyleGrid.fillColor = rgbaColor
                    // myStyleGrid.fillColor = color[5]
                }else if(data.properties.index < min + 4*interval){
                    let defualtColor = colors[4].split(', ')
                    let opacity = (props.gridOpacity/10).toString().concat(")")
                    let color = defualtColor.splice(defualtColor.length-1,1,opacity)
                    let rgbaColor = defualtColor.join(', ')
                    myStyleGrid.fillColor = rgbaColor
                    // myStyleGrid.fillColor = color[4]
                }else if(data.properties.index < min + 5*interval){
                    let defualtColor = colors[3].split(', ')
                    let opacity = (props.gridOpacity/10).toString().concat(")")
                    let color = defualtColor.splice(defualtColor.length-1,1,opacity)
                    let rgbaColor = defualtColor.join(', ')
                    myStyleGrid.fillColor = rgbaColor
                    // myStyleGrid.fillColor = color[3]
                }else if(data.properties.index < min + 6*interval){
                    let defualtColor = colors[2].split(', ')
                    let opacity = (props.gridOpacity/10).toString().concat(")")
                    let color = defualtColor.splice(defualtColor.length-1,1,opacity)
                    let rgbaColor = defualtColor.join(', ')
                    myStyleGrid.fillColor = rgbaColor
                    // myStyleGrid.fillColor = color[2]
                }else if(data.properties.index < min + 7*interval){
                    let defualtColor = colors[1].split(', ')
                    let opacity = (props.gridOpacity/10).toString().concat(")")
                    let color = defualtColor.splice(defualtColor.length-1,1,opacity)
                    let rgbaColor = defualtColor.join(', ')
                    myStyleGrid.fillColor = rgbaColor
                    // myStyleGrid.fillColor = color[1]
                }else if(data.properties.index < min + 8*interval){
                    let defualtColor = colors[0].split(', ')
                    let opacity = (props.gridOpacity/10).toString().concat(")")
                    let color = defualtColor.splice(defualtColor.length-1,1,opacity)
                    let rgbaColor = defualtColor.join(', ')
                    myStyleGrid.fillColor = rgbaColor
                    // myStyleGrid.fillColor = color[0]
                }else {
                    let defualtColor = colors[0].split(', ')
                    let opacity = (props.gridOpacity/10).toString().concat(")")
                    let color = defualtColor.splice(defualtColor.length-1,1,opacity)
                    let rgbaColor = defualtColor.join(', ')
                    myStyleGrid.fillColor = rgbaColor
                    // myStyleGrid.fillColor = color[0]
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

export default Grid;