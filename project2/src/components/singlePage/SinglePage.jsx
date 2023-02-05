import React, {useState} from 'react';
import { MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import './singlePage.css'
import { Layout } from 'antd';
import TimeSeries from '../showData/TimeSeries';
import "../../data/dataSelection" 
import SideMenu from '../selectionInput/SideMenu';
import Grid from '../showData/Grid';
import Legend from '../showData/Legend';

const SinglePage = () => {
  const center = [13.2955977,102.2090103]
  const zoom = 6

  const [dataIndex, setDataIndex] = useState('CDD')

  const [timeSeriesData, setTimeSeriesData] = useState([])
  const [selectArea, setSelectArea] = useState("Thailand")
  const [selectData, setSelectData] = useState("ecearth@RCP4.5@indices@CDD")
  const [selectDate, setSelectDate] = useState("2006")

  const areaChange = (area) => {
    setSelectArea(area)
    console.log(area)
  }
  const dataChange = (data) => {
    setSelectData(data)
    console.log(selectData)
  }
  const dateChange = (date) => {
    setSelectDate(date)
    console.log(date)
  }

  const getTimeSeriesData = (data) => {
    setTimeSeriesData(data)
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
            <SideMenu areaChange={areaChange} dataChange={dataChange} dateChange={dateChange} area={selectArea} data={selectData} date={selectDate}/>
            <TimeSeries data={timeSeriesData}/>
        </Layout>

        <Grid area={selectArea} data={selectData} date={selectDate} setTimeSeriesData = {getTimeSeriesData}/>
        <Legend dataIndex = {dataIndex}/>

    </MapContainer>    
  )
}

export default SinglePage