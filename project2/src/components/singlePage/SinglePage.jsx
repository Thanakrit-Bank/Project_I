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
import Breadcrumb from '../showData/Breadcrumb';

const SinglePage = () => {

  const center = [13.2955977,102.2090103]
  const zoom = 6

  const [dataIndex, setDataIndex] = useState('CDD')
  const [timeSeriesData, setTimeSeriesData] = useState([])
  const [seasonalData ,setSeasonalData] = useState([])
  const [selectArea, setSelectArea] = useState("Thailand")
  const [selectData, setSelectData] = useState("ecearth@RCP4.5@indices@CDD")
  const [selectDate, setSelectDate] = useState("2006")
  const [graphType, setGraphType] = useState('Linechart')
  const [dataType, setDataType] = useState('Overall')
  const [gridOpacity, setGridopacity] = useState(7)
  const [legendMax, setLegendMax] =useState('') 
  const [legendMin, setLegendMin] =useState('') 

  const areaChange = (area) => {
    setSelectArea(area)
  }
  const dataChange = (data) => {
    setSelectData(data)
    const indexName = selectData.split('@')[selectData.split('@').length - 1]
    setDataIndex(indexName)
  }
  const dateChange = (date) => {
    setSelectDate(date)
  }

  const getTimeSeriesData = (data) => {
    setTimeSeriesData(data)
  }

  const getSeasonalData = (data) => {
    setSeasonalData(data)
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

  const opacityChange = (value) => {
    setGridopacity(value)
  }

  const legendMaxChange = (max) => {
    setLegendMax(max)
  }

  const legendMinChange = (min) => {
    setLegendMin(min)
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
            <SideMenu 
              areaChange={areaChange} 
              dataChange={dataChange} 
              dateChange={dateChange} 
              area={selectArea} 
              data={selectData} 
              date={selectDate} 
              graphType={graphType} 
              setGraphType={setGraphType}
              dataType={dataType}
              setDataType={setDataType}
              opacityChange={opacityChange}
              gridOpacity={gridOpacity}
              legendMax={legendMax}
              legendMin={legendMin}
              legendMaxChange={legendMaxChange}
              legendMinChange={legendMinChange}
            />
            <TimeSeries data={timeSeriesData} data2={seasonalData} type={graphType} dataType={dataType}/>
        </Layout>

        <Grid 
          area={selectArea} 
          data={selectData} 
          date={selectDate} 
          SetViewOnChange={SetViewOnChange} 
          setTimeSeriesData = {getTimeSeriesData} 
          setSeasonalData={getSeasonalData}
          gridOpacity={gridOpacity}
          legendMax={legendMax}
          legendMin={legendMin}
        />
        <Legend 
          dataIndex = {dataIndex}
          legendMax={legendMax}
          legendMin={legendMin}
        />

        <Breadcrumb selectArea={selectArea} selectData={selectData} selectDate={selectDate}/>
    </MapContainer>    
  )
}

export default SinglePage