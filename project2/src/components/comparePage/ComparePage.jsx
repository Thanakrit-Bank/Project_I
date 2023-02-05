import 'leaflet/dist/leaflet.css'
import './comparePage.css'
import { Layout } from 'antd';
import TimeSeries from '../showData/TimeSeries';
import "../../data/dataSelection" 
import SideMenuCompare from '../comparePage/SideMenuCompare';
import React, {useState} from 'react';
import { MapContainer, TileLayer } from 'react-leaflet'
import Grid from '../showData/Grid';
import Legend from '../showData/Legend';

const ComparePage = () => {
  const center = [13.2955977,102.2090103]
  const zoom = 6

  const [dataIndex1, setDataIndex1] = useState('CDD')
  const [timeSeriesData1, setTimeSeriesData1] = useState([])
  const [selectArea1, setSelectArea1] = useState("Thailand")
  const [selectData1, setSelectData1] = useState("ecearth@RCP4.5@indices@CDD")
  const [selectDate1, setSelectDate1] = useState("2006")
  const [graphType1, setGraphType1] = useState('Linechart')

  const areaChange1 = (area) => {
    setSelectArea1(area)
    console.log(area)
  }
  const dataChange1 = (data) => {
    setSelectData1(data)
    const indexName = selectData1.split('@')[selectData1.split('@').length - 1]
    setDataIndex1(indexName)
    console.log(selectData1)
  }
  const dateChange1 = (date) => {
    setSelectDate1(date)
    console.log('single page',date)
  }

  const getTimeSeriesData1 = (data) => {
    setTimeSeriesData1(data)
  }
// =======================================================================


const [dataIndex2, setDataIndex2] = useState('CDD')
const [timeSeriesData2, setTimeSeriesData2] = useState([])
const [selectArea2, setSelectArea2] = useState("Thailand")
const [selectData2, setSelectData2] = useState("ecearth@RCP4.5@indices@CDD")
const [selectDate2, setSelectDate2] = useState("2006")
const [graphType2, setGraphType2] = useState('Linechart')

const areaChange2 = (area) => {
  setSelectArea2(area)
  console.log(area)
}
const dataChange2 = (data) => {
  setSelectData2(data)
  const indexName = selectData1.split('@')[selectData1.split('@').length - 1]
  setDataIndex2(indexName)
  console.log(selectData1)
}
const dateChange2 = (date) => {
  setSelectDate2(date)
  console.log('single page',date)
}

const getTimeSeriesData2 = (data) => {
  setTimeSeriesData2(data)
}
// =======================================================================



const [dataIndex3, setDataIndex3] = useState('CDD')
const [timeSeriesData3, setTimeSeriesData3] = useState([])
const [selectArea3, setSelectArea3] = useState("Thailand")
const [selectData3, setSelectData3] = useState("ecearth@RCP4.5@indices@CDD")
const [selectDate3, setSelectDate3] = useState("2006")
const [graphType3, setGraphType3] = useState('Linechart')

const areaChange3 = (area) => {
  setSelectArea3(area)
  console.log(area)
}
const dataChange3 = (data) => {
  setSelectData3(data)
  const indexName = selectData1.split('@')[selectData1.split('@').length - 1]
  setDataIndex3(indexName)
  console.log(selectData1)
}
const dateChange3 = (date) => {
  setSelectDate3(date)
  console.log('single page',date)
}

const getTimeSeriesData3 = (data) => {
  setTimeSeriesData3(data)
}
// =======================================================================

  return (
    <div className='grid-container'>
      <div className='grid-item'>
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
                <SideMenuCompare className="sider" areaChange={areaChange1} dataChange={dataChange1} dateChange={dateChange1} area={selectArea1} data={selectData1} date={selectDate1} graphType={graphType1} setGraphType={setGraphType1}/>
                <TimeSeries data={timeSeriesData1} type={graphType1}/>
            </Layout>

            <Grid area={selectArea1} data={selectData1} date={selectDate1} setTimeSeriesData = {getTimeSeriesData1}/>
            <Legend dataIndex = {dataIndex1}/>

        </MapContainer> 
      </div>  

      <div className='grid-item'>
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
                <TimeSeries data={timeSeriesData2} type={graphType2}/>
            </Layout>

            <Grid area={selectArea2} data={selectData2} date={selectDate2} setTimeSeriesData = {getTimeSeriesData2}/>
            <Legend dataIndex = {dataIndex2}/>

        </MapContainer> 
      </div>

      <div className='grid-item'>
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
                <TimeSeries data={timeSeriesData3} type={graphType3}/>
            </Layout>

            <Grid area={selectArea3} data={selectData3} date={selectDate3} setTimeSeriesData = {getTimeSeriesData3}/>
            <Legend dataIndex = {dataIndex3}/>

        </MapContainer> 
      </div>     
    </div>  
  )
}

export default ComparePage