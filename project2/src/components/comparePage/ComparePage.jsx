import 'leaflet/dist/leaflet.css'
import './comparePage.css'
import { Layout } from 'antd';
import TimeSeries from '../showData/TimeSeries';
import "../../data/dataSelection" 
import SideMenuCompare from '../comparePage/SideMenuCompare';
import React, {useState} from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet'
import Grid from '../showData/Grid';
import Legend from '../showData/Legend';

const ComparePage = () => {
  const center = [13.2955977,102.2090103]
  const zoom = 6

  const [dataIndex1, setDataIndex1] = useState('CDD')
  const [seasonalData1 ,setSeasonalData1] = useState([])
  const [timeSeriesData1, setTimeSeriesData1] = useState([])
  const [selectArea1, setSelectArea1] = useState("Thailand")
  const [selectData1, setSelectData1] = useState("ecearth@RCP4.5@indices@CDD")
  const [selectDate1, setSelectDate1] = useState("2006")
  const [dataType1, setDataType1] = useState('seasonal')
  const [graphType1, setGraphType1] = useState('Linechart')

  const areaChange1 = (area) => {
    setSelectArea1(area)
  }
  const dataChange1 = (data) => {
    setSelectData1(data)
    const indexName1 = selectData1.split('@')[selectData1.split('@').length - 1]
    setDataIndex1(indexName1)
  }
  const dateChange1 = (date) => {
    setSelectDate1(date)
  }

  const getTimeSeriesData1 = (data) => {
    setTimeSeriesData1(data)
  }

  function SetViewOnChange1(coords) {
    const map = useMap();
    if (selectArea1 === 'Thailand'){
        map.setView([13.2955977,102.2090103], 6);
    }else{
        map.setView([coords[1], coords[0]], 8);
    }
    return null;
  }

  const getSeasonalData1 = (data) => {
    setSeasonalData1(data)
  }
// =======================================================================


  const [dataIndex2, setDataIndex2] = useState('CDD')
  const [seasonalData2 ,setSeasonalData2] = useState([])
  const [timeSeriesData2, setTimeSeriesData2] = useState([])
  const [selectArea2, setSelectArea2] = useState("Thailand")
  const [selectData2, setSelectData2] = useState("ecearth@RCP4.5@indices@CDD")
  const [selectDate2, setSelectDate2] = useState("2006")
  const [dataType2, setDataType2] = useState('seasonal')
  const [graphType2, setGraphType2] = useState('Linechart')

  const areaChange2 = (area) => {
    setSelectArea2(area)
  }
  const dataChange2 = (data) => {
    setSelectData2(data)
    const indexName2 = selectData2.split('@')[selectData2.split('@').length - 1]
    setDataIndex2(indexName2)
  }
  const dateChange2 = (date) => {
    setSelectDate2(date)
  }

  const getTimeSeriesData2 = (data) => {
    setTimeSeriesData2(data)
  }

  function SetViewOnChange2(coords) {
    const map = useMap();
    if (selectArea2 === 'Thailand'){
        map.setView([13.2955977,102.2090103], 6);
    }else{
        map.setView([coords[1], coords[0]], 8);
    }
    return null;
  }

  const getSeasonalData2 = (data) => {
    setSeasonalData2(data)
  }
  // =======================================================================



  const [dataIndex3, setDataIndex3] = useState('CDD')
  const [seasonalData3 ,setSeasonalData3] = useState([])
  const [timeSeriesData3, setTimeSeriesData3] = useState([])
  const [selectArea3, setSelectArea3] = useState("Thailand")
  const [selectData3, setSelectData3] = useState("ecearth@RCP4.5@indices@CDD")
  const [selectDate3, setSelectDate3] = useState("2006")
  const [dataType3, setDataType3] = useState('seasonal')
  const [graphType3, setGraphType3] = useState('Linechart')

  const areaChange3 = (area) => {
    setSelectArea3(area)
  }
  const dataChange3 = (data) => {
    setSelectData3(data)
    const indexName3 = selectData3.split('@')[selectData3.split('@').length - 1]
    setDataIndex3(indexName3)
  }
  const dateChange3 = (date) => {
    setSelectDate3(date)
  }

  const getTimeSeriesData3 = (data) => {
    setTimeSeriesData3(data)
  }

  function SetViewOnChange3(coords) {
    const map = useMap();
    if (selectArea3 === 'Thailand'){
        map.setView([13.2955977,102.2090103], 6);
    }else{
        map.setView([coords[1], coords[0]], 4);
    }
    return null;
  }

  const getSeasonalData3 = (data) => {
    setSeasonalData3(data)
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
            
            <Layout style={{textAlign: "left", minHeight: '100vh'}}>
                <SideMenuCompare 
                  className="sider" 
                  areaChange1={areaChange1} 
                  dataChange1={dataChange1} 
                  dateChange1={dateChange1} 
                  area1={selectArea1} 
                  data1={selectData1} 
                  date1={selectDate1} 
                  graphType1={graphType1} 
                  setGraphType1={setGraphType1}
                  setDataType1={setDataType1}

                  areaChange2={areaChange2} 
                  dataChange2={dataChange2} 
                  dateChange2={dateChange2} 
                  area2={selectArea2} 
                  data2={selectData2} 
                  date2={selectDate2} 
                  graphType2={graphType2} 
                  setGraphType2={setGraphType2}
                  setDataType2={setDataType2}

                  areaChange3={areaChange3} 
                  dataChange3={dataChange3} 
                  dateChange3={dateChange3} 
                  area3={selectArea3} 
                  data3={selectData3} 
                  date3={selectDate3} 
                  graphType3={graphType3} 
                  setGraphType3={setGraphType3}
                  setDataType3={setDataType3}
                />
                <TimeSeries data={timeSeriesData1} data2={seasonalData1} type={graphType1} dataType={dataType1}/>
            </Layout>

            <Grid area={selectArea1} data={selectData1} date={selectDate1} SetViewOnChange={SetViewOnChange1} setTimeSeriesData = {getTimeSeriesData1} setSeasonalData={getSeasonalData1}/>
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
                <TimeSeries data={timeSeriesData2} data2={seasonalData2} type={graphType2} dataType={dataType2}/>
            </Layout>

            <Grid area={selectArea2} data={selectData2} date={selectDate2} SetViewOnChange={SetViewOnChange2} setTimeSeriesData = {getTimeSeriesData2} setSeasonalData={getSeasonalData2}/>
            <Legend dataIndex = {dataIndex2} />

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
                <TimeSeries data={timeSeriesData3} data2={seasonalData3} type={graphType3} dataType={dataType3}/>
            </Layout>

            <Grid area={selectArea3} data={selectData3} date={selectDate3} SetViewOnChange={SetViewOnChange3} setTimeSeriesData = {getTimeSeriesData3} setSeasonalData={getSeasonalData3}/>
            <Legend dataIndex = {dataIndex3}/>

        </MapContainer> 
      </div>     
    </div>  
  )
}

export default ComparePage