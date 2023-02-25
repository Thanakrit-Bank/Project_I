import React, { useState } from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet'
import { Layout } from 'antd';
import TimeSeries from '../showData/TimeSeries';
import SideMenuCompare from './SideMenuCompare'
import Grid from '../showData/Grid';
import Legend from '../showData/Legend';
import Breadcrumb from '../showData/Breadcrumb';
import SettingCompare from './SettingCompare'
import 'leaflet/dist/leaflet.css';
import "../../data/dataSelection";
import './comparePage.css';

const ComparePage = () => {

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
  var indexName = ''
  const dataChange = (data) => {
    setSelectData(data)
    indexName = data.split('@')[selectData.split('@').length - 1]
    setDataIndex(indexName)
    console.log('indexName: ', indexName);
    console.log('dataIndex: ',dataIndex);
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
    if (["Brunei Darussalam", "Cambodia", "Malaysia", "Indonesia", "Lao People's Democratic Republic", "Myanmar","Philippines", "Thailand", "Timor-Leste", "Vietnam", "Singapore"].includes(selectArea)){
        map.setView([coords[1], coords[0]], 6);
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
    <div className='grid-container'>
        <div className='grid-item'>
            <MapContainer 
            center={center} 
            zoom={zoom} 
            scrollWheelZoom={true} 
            zoomControl={false} 
            className="map-container-compare"
            >
                
                <TileLayer
                    url='https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png'
                />
                
                <Layout style={{ textAlign: "left", minHeight: '100vh'}}>
                    <SideMenuCompare 
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
                    dataIndexName = {dataIndex}
                    legendMax={legendMax}
                    legendMin={legendMin}
                />

                <Breadcrumb selectArea={selectArea} selectData={selectData} selectDate={selectDate}/>
                <SettingCompare 
                    graphType={graphType} 
                    setGraphType={setGraphType} 
                    dataType={dataType} 
                    setDataType={setDataType}
                    opacityChange={opacityChange} 
                    gridOpacity={gridOpacity}
                    legendMaxChange={legendMaxChange}
                    legendMinChange={legendMinChange}
                    legenMax={legendMax}
                    legenMin={legendMin}
                />
            </MapContainer>
        </div>

        <div className='grid-item'>
            <MapContainer 
            center={center} 
            zoom={zoom} 
            scrollWheelZoom={true} 
            zoomControl={false} 
            className="map-container-compare"
            >
                
                <TileLayer
                    url='https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png'
                />
                
                <Layout style={{ minHeight: '100vh'}}>
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
                    dataIndexName = {dataIndex}
                    legendMax={legendMax}
                    legendMin={legendMin}
                />

                <Breadcrumb selectArea={selectArea} selectData={selectData} selectDate={selectDate}/>
                <SettingCompare 
                    graphType={graphType} 
                    setGraphType={setGraphType} 
                    dataType={dataType} 
                    setDataType={setDataType}
                    opacityChange={opacityChange} 
                    gridOpacity={gridOpacity}
                    legendMaxChange={legendMaxChange}
                    legendMinChange={legendMinChange}
                    legenMax={legendMax}
                    legenMin={legendMin}
                />
            </MapContainer>
        </div>

        <div className='grid-item'>
            <MapContainer 
            center={center} 
            zoom={zoom} 
            scrollWheelZoom={true} 
            zoomControl={false} 
            className="map-container-compare"
            >
                
                <TileLayer
                    url='https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png'
                />
                
                <Layout style={{ minHeight: '100vh'}}>
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
                    dataIndexName = {dataIndex}
                    legendMax={legendMax}
                    legendMin={legendMin}
                />

                <Breadcrumb selectArea={selectArea} selectData={selectData} selectDate={selectDate}/>
                <SettingCompare 
                    graphType={graphType} 
                    setGraphType={setGraphType} 
                    dataType={dataType} 
                    setDataType={setDataType}
                    opacityChange={opacityChange} 
                    gridOpacity={gridOpacity}
                    legendMaxChange={legendMaxChange}
                    legendMinChange={legendMinChange}
                    legenMax={legendMax}
                    legenMin={legendMin}
                />
            </MapContainer>
        </div>
    </div>    
  )
}

export default ComparePage;