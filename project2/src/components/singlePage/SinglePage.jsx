import React, { useState } from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet'
import { Layout } from 'antd';
import TimeSeries from '../showData/TimeSeries';
import SideMenu from '../selectionInput/SideMenu';
import Grid from '../showData/Grid';
import Legend from '../showData/Legend';
import 'leaflet/dist/leaflet.css'
import "../../data/dataSelection" 
import './singlePage.css'

const SinglePage = () => {
  const center = [13.2955977,102.2090103]
  const zoom = 6

  const [dataIndex, setDataIndex] = useState('CDD')
  const [timeSeriesData, setTimeSeriesData] = useState([])
  const [selectArea, setSelectArea] = useState("Thailand")
  const [selectData, setSelectData] = useState("ecearth@RCP4.5@indices@CDD")
  const [selectDate, setSelectDate] = useState("2006")
  const [graphType, setGraphType] = useState('Linechart')

  const areaChange = (area) => {
    setSelectArea(area)
    console.log(area)
  }
  const dataChange = (data) => {
    setSelectData(data)
    const indexName = selectData.split('@')[selectData.split('@').length - 1]
    setDataIndex(indexName)
    // console.log(selectData)
  }
  const dateChange = (date) => {
    setSelectDate(date)
    console.log('single page',date)
  }

  const getTimeSeriesData = (data) => {
    setTimeSeriesData(data)
  }

  function SetViewOnChange(coords) {
    const map = useMap();
    if (selectArea === 'Thailand'){
        map.setView([13.2955977,102.2090103], 6);
    }else{
        map.setView([coords[1], coords[0]], 8);
    }
    return null;
  }

  return (
    <MapContainer 
      center={center} 
      zoom={zoom} 
      scrollWheelZoom={true} 
      zoomControl={false} 
      className="map-container"
    >
        
        <TileLayer
            url='https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png'
        />
        
        <Layout style={{ minHeight: '100vh'}}>
            <SideMenu areaChange={areaChange} dataChange={dataChange} dateChange={dateChange} area={selectArea} data={selectData} date={selectDate} graphType={graphType} setGraphType={setGraphType}/>
            <TimeSeries data={timeSeriesData} type={graphType}/>
        </Layout>

        <Grid area={selectArea} data={selectData} date={selectDate} SetViewOnChange={SetViewOnChange} setTimeSeriesData = {getTimeSeriesData}/>
        <Legend dataIndex = {dataIndex}/>

    </MapContainer>    
  )
}

export default SinglePage