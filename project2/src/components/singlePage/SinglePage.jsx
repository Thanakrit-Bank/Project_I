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
import dataIndexLegend from  '../../data/dataLegend'


const SinglePage = () => {

  const center = [13.2955977,102.2090103]
  const zoom = 6
  var data = dataIndexLegend.indices.CDD 

  const [dataIndex, setDataIndex] = useState('CDD')
  const [timeSeriesData, setTimeSeriesData] = useState([])
  const [seasonalData ,setSeasonalData] = useState([])
  const [selectArea, setSelectArea] = useState("Thailand")
  const [selectData, setSelectData] = useState("ecearth@RCP4.5@indices@CDD")
  const [selectDate, setSelectDate] = useState("2006")
  const [graphType, setGraphType] = useState('Linechart')
  const [dataType, setDataType] = useState('Overall')
  const [gridOpacity, setGridopacity] = useState(7)
  const [legendMax, setLegendMax] =useState(data.max) 
  const [legendMin, setLegendMin] =useState(data.min) 
  console.log(data.max);
  console.log(data.min);
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


  // Indices
  if (dataIndex === 'CDD'){
    data = dataIndexLegend.indices.CDD
  } else if (dataIndex === 'CSDI' ) {
    data = dataIndexLegend.indices.CSDI
  } else if (dataIndex === 'CWD' ) {
    data = dataIndexLegend.indices.CWD
  } else if (dataIndex === 'DTR' ) {
    data = dataIndexLegend.indices.DTR
  } else if (dataIndex === 'FD0' ) {
    data = dataIndexLegend.indices.FD0
  } else if (dataIndex === 'FD16' ) {
    data = dataIndexLegend.indices.FD16
  } else if (dataIndex === 'ID0' ) {
    data = dataIndexLegend.indices.ID0
  } else if (dataIndex === 'PRCPTOT' ) {
    data = dataIndexLegend.indices.PRCPTOT
  } else if (dataIndex === 'R10mm' ) {
    data = dataIndexLegend.indices.R10mm
  } else if (dataIndex === 'R20mm' ) {
    data = dataIndexLegend.indices.R20mm
  } else if (dataIndex === 'R25mm' ) {
    data = dataIndexLegend.indices.R25mm
  } else if (dataIndex === 'R95p' ) {
    data = dataIndexLegend.indices.R95p
  } else if (dataIndex === 'R99p' ) {
    data = dataIndexLegend.indices.R99p
  } else if (dataIndex === 'RX1day' ) {
    data = dataIndexLegend.indices.RX1day
  } else if (dataIndex === 'RX5day' ) {
    data = dataIndexLegend.indices.RX5day
  } else if (dataIndex === 'SDII' ) {
    data = dataIndexLegend.indices.SDII
  } else if (dataIndex === 'SU25' ) {
    data = dataIndexLegend.indices.SU25
  } else if (dataIndex === 'SU35' ) {
    data = dataIndexLegend.indices.SU35
  } else if (dataIndex === 'TMAXmean' ) {
    data = dataIndexLegend.indices.TMAXmean
  } else if (dataIndex === 'TMEANmean' ) {
    data = dataIndexLegend.indices.TMEANmean
  } else if (dataIndex === 'TMINmean' ) {
    data = dataIndexLegend.indices.TMINmean
  } else if (dataIndex === 'TN10P' ) {
    data = dataIndexLegend.indices.TN10P
  } else if (dataIndex === 'TN90P' ) {
    data = dataIndexLegend.indices.TN90P
  } else if (dataIndex === 'TNn' ) {
    data = dataIndexLegend.indices.TNn
  } else if (dataIndex === 'TNx' ) {
    data = dataIndexLegend.indices.TNx
  } else if (dataIndex === 'TR20' ) {
    data = dataIndexLegend.indices.TR20
  } else if (dataIndex === 'TR25' ) {
    data = dataIndexLegend.indices.TR25
  } else if (dataIndex === 'TX10P' ) {
    data = dataIndexLegend.indices.TX10P
  } else if (dataIndex === 'TX90P' ) {
    data = dataIndexLegend.indices.TX90P
  } else if (dataIndex === 'TXn' ) {
    data = dataIndexLegend.indices.TXn
  } else if (dataIndex === 'TXx' ) {
    data = dataIndexLegend.indices.TXx
  } else if (dataIndex === 'WSDI' ) {
    data = dataIndexLegend.indices.WSDI
  }
  // SPI
  else if (dataIndex === 'spi' ) {
    data = dataIndexLegend.SPI.spi
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

    </MapContainer>    
  )
}

export default SinglePage