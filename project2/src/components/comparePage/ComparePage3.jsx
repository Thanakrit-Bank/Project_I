import React, {  useState } from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet'
import { Layout } from 'antd';
import TimeSeries from '../showData/TimeSeries';
// import SideMenuCompare from './SideMenuCompare'
import Grid from '../showData/Grid';
import Legend from '../showData/Legend';
import Breadcrumb from '../showData/Breadcrumb';
import SettingCompare2 from './SettingCompare2'
import 'leaflet/dist/leaflet.css';
import "../../data/dataSelection";
import './comparePage.css';

const ComparePage3 = (props) => {

  const center = [13.2955977,102.2090103]
  const zoom = 6

  const [dataIndex1, setDataIndex1] = useState('CDD')
  const [timeSeriesData1, setTimeSeriesData1] = useState([])
  const [seasonalData1 ,setSeasonalData1] = useState([])
  const [selectArea1, setSelectArea1] = useState("Thailand")
  const [selectData1, setSelectData1] = useState("ecearth@RCP4.5@indices@CDD")
  const [selectDate1, setSelectDate1] = useState("2006")
  const [graphType1, setGraphType1] = useState('Linechart')
  const [dataType1, setDataType1] = useState('Overall')
  const [gridOpacity1, setGridopacity1] = useState(7)
  const [legendMax1, setLegendMax1] =useState('') 
  const [legendMin1, setLegendMin1] =useState('') 

  const areaChange1 = (area) => {
    setSelectArea1(area)
  }

  var indexName1 = ''
  const dataChange1 = (data) => {
    setSelectData1(data)
    indexName1 = data.split('@')[selectData1.split('@').length - 1]
    setDataIndex1(indexName1)
    console.log('indexName: ', indexName1);
    console.log('dataIndex: ',dataIndex1);
  }

  const dateChange1 = (date) => {
    setSelectDate1(date)
  }

  const getTimeSeriesData1 = (data) => {
    setTimeSeriesData1(data)
  }

  const getSeasonalData1 = (data) => {
    setSeasonalData1(data)
  }

  function SetViewOnChange1(coords) {
    const map = useMap();
    if (["Brunei Darussalam", "Cambodia", "Malaysia", "Indonesia", "Lao People's Democratic Republic", "Myanmar","Philippines", "Thailand", "Timor-Leste", "Vietnam", "Singapore"].includes(selectArea1)){
        map.setView([coords[1], coords[0]], 6);
    }else{
        map.setView([coords[1], coords[0]], 8);
    }
    return null;
  }

  const opacityChange1 = (value) => {
    setGridopacity1(value)
  }

  const legendMaxChange1 = (max) => {
    setLegendMax1(max)
  }

  const legendMinChange1 = (min) => {
    setLegendMin1(min)
  }

// =======================================================================

    const [dataIndex2, setDataIndex2] = useState('CDD')
    const [timeSeriesData2, setTimeSeriesData2] = useState([])
    const [seasonalData2 ,setSeasonalData2] = useState([])
    const [selectArea2, setSelectArea2] = useState("Thailand")
    const [selectData2, setSelectData2] = useState("ecearth@RCP4.5@indices@CDD")
    const [selectDate2, setSelectDate2] = useState("2006")
    const [graphType2, setGraphType2] = useState('Linechart')
    const [dataType2, setDataType2] = useState('Overall')
    const [gridOpacity2, setGridopacity2] = useState(7)
    const [legendMax2, setLegendMax2] =useState('') 
    const [legendMin2, setLegendMin2] =useState('') 

    const areaChange2 = (area) => {
        setSelectArea2(area)
    }

    var indexName2 = ''
    const dataChange2 = (data) => {
        setSelectData2(data)
        indexName2 = data.split('@')[selectData2.split('@').length - 1]
        setDataIndex2(indexName2)
        console.log('indexName: ', indexName2);
        console.log('dataIndex: ',dataIndex2);
    }

    const dateChange2 = (date) => {
        setSelectDate2(date)
    }

    const getTimeSeriesData2 = (data) => {
        setTimeSeriesData2(data)
    }

    const getSeasonalData2 = (data) => {
        setSeasonalData2(data)
    }

    function SetViewOnChange2(coords) {
        const map = useMap();
        if (["Brunei Darussalam", "Cambodia", "Malaysia", "Indonesia", "Lao People's Democratic Republic", "Myanmar","Philippines", "Thailand", "Timor-Leste", "Vietnam", "Singapore"].includes(selectArea2)){
            map.setView([coords[1], coords[0]], 6);
        } else {
            map.setView([coords[1], coords[0]], 8);
        }
        return null;
    }

    const opacityChange2 = (value) => {
        setGridopacity2(value)
    }

    const legendMaxChange2 = (max) => {
        setLegendMax2(max)
    }

    const legendMinChange2 = (min) => {
        setLegendMin2(min)
    }

// =======================================================================

    const [dataIndex3, setDataIndex3] = useState('CDD')
    const [timeSeriesData3, setTimeSeriesData3] = useState([])
    const [seasonalData3 ,setSeasonalData3] = useState([])
    const [selectArea3, setSelectArea3] = useState("Thailand")
    const [selectData3, setSelectData3] = useState("ecearth@RCP4.5@indices@CDD")
    const [selectDate3, setSelectDate3] = useState("2006")
    const [graphType3, setGraphType3] = useState('Linechart')
    const [dataType3, setDataType3] = useState('Overall')
    const [gridOpacity3, setGridopacity3] = useState(7)
    const [legendMax3, setLegendMax3] =useState('') 
    const [legendMin3, setLegendMin3] =useState('') 
    const areaChange3 = (area) => {
        setSelectArea3(area)
    }

    var indexName3 = ''
        const dataChange3 = (data) => {
        setSelectData3(data)
        indexName3 = data.split('@')[selectData3.split('@').length - 1]
        setDataIndex3(indexName3)
        console.log('indexName: ', indexName3);
        console.log('dataIndex: ',dataIndex3);
    }

    const dateChange3 = (date) => {
        setSelectDate3(date)
    }

    const getTimeSeriesData3 = (data) => {
        setTimeSeriesData3(data)
    }

    const getSeasonalData3 = (data) => {
        setSeasonalData3(data)
    }

    function SetViewOnChange3(coords) {
        const map = useMap();
        if (["Brunei Darussalam", "Cambodia", "Malaysia", "Indonesia", "Lao People's Democratic Republic", "Myanmar","Philippines", "Thailand", "Timor-Leste", "Vietnam", "Singapore"].includes(selectArea3)){
            map.setView([coords[1], coords[0]], 6);
        } else {
            map.setView([coords[1], coords[0]], 8);
        }
        return null;
    }

    const opacityChange3 = (value) => {
        setGridopacity3(value)
    }

    const legendMaxChange3 = (max) => {
        setLegendMax3(max)
    }

    const legendMinChange3 = (min) => {
        setLegendMin3(min)
    }
    const modeChange =(mode) => {
        props.modeChange(mode)
    }

// =======================================================================
   
        return (
            <div className='grid-container1'>
                <div className='grid-item1'>
                    <MapContainer 
                    center={center} 
                    zoom={zoom} 
                    scrollWheelZoom={true} 
                    zoomControl={false} 
                    className="map-container-compare1"
                    >
                        
                        <TileLayer
                            url='https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png'
                        />
                        
                        <Layout style={{ textAlign: "left", minHeight: '100vh'}}>
                            {/* <SideMenuCompare 
                                className="side-manu"
                                switchMode={modeChange}
        
                                areaChange1={areaChange1} 
                                dataChange1={dataChange1} 
                                dateChange1={dateChange1} 
                                area1={selectArea1} 
                                data1={selectData1} 
                                date1={selectDate1} 
                                graphType1={graphType1} 
                                setGraphType1={setGraphType1}
                                dataType1={dataType1}
                                setDataType1={setDataType1}
                                opacityChange1={opacityChange1}
                                gridOpacity1={gridOpacity1}
                                legendMax1={legendMax1}
                                legendMin1={legendMin1}
                                legendMaxChange1={legendMaxChange1}
                                legendMinChange1={legendMinChange1}
        
                                areaChange2={areaChange2} 
                                dataChange2={dataChange2} 
                                dateChange2={dateChange2} 
                                area2={selectArea2} 
                                data2={selectData1} 
                                date2={selectDate2} 
                                graphType2={graphType2} 
                                setGraphType2={setGraphType2}
                                dataType2={dataType2}
                                setDataType2={setDataType2}
                                opacityChange2={opacityChange2}
                                gridOpacity2={gridOpacity2}
                                legendMax2={legendMax2}
                                legendMin2={legendMin2}
                                legendMaxChange2={legendMaxChange2}
                                legendMinChange2={legendMinChange2}
        
                                areaChange3={areaChange3} 
                                dataChange3={dataChange3} 
                                dateChange3={dateChange3} 
                                area3={selectArea3} 
                                data3={selectData3} 
                                date3={selectDate3} 
                                graphType3={graphType3} 
                                setGraphType3={setGraphType3}
                                dataType3={dataType3}
                                setDataType3={setDataType3}
                                opacityChange3={opacityChange3}
                                gridOpacity3={gridOpacity3}
                                legendMax3={legendMax3}
                                legendMin3={legendMin3}
                                legendMaxChange3={legendMaxChange3}
                                legendMinChange3={legendMinChange3}
                            /> */}
                            <TimeSeries data={timeSeriesData1} data2={seasonalData1} type={graphType1} dataType={dataType1}/>
                        </Layout>
        
                        <Grid 
                            area={selectArea1} 
                            data={selectData1} 
                            date={selectDate1} 
                            SetViewOnChange={SetViewOnChange1} 
                            setTimeSeriesData = {getTimeSeriesData1} 
                            setSeasonalData={getSeasonalData1}
                            gridOpacity={gridOpacity1}
                            legendMax={legendMax1}
                            legendMin={legendMin1}
                        />
                        <Legend 
                            dataIndexName = {dataIndex1}
                            legendMax={legendMax1}
                            legendMin={legendMin1}
                        />
        
                        <Breadcrumb selectArea={selectArea1} selectData={selectData1} selectDate={selectDate1}/>
                        <SettingCompare2 
                            graphType={graphType1} 
                            setGraphType={setGraphType1} 
                            dataType={dataType1} 
                            setDataType={setDataType1}
                            opacityChange={opacityChange1} 
                            gridOpacity={gridOpacity1}
                            legendMaxChange={legendMaxChange1}
                            legendMinChange={legendMinChange1}
                            legenMax={legendMax1}
                            legenMin={legendMin1}
        
                            areaChange1={areaChange1} 
                            dataChange1={dataChange1} 
                            dateChange1={dateChange1} 
                            area1={selectArea1} 
                            data1={selectData1} 
                            date1={selectDate1} 
                            graphType1={graphType1} 
                            setGraphType1={setGraphType1}
                            dataType1={dataType1}
                            setDataType1={setDataType1}
                            opacityChange1={opacityChange1}
                            gridOpacity1={gridOpacity1}
                            legendMax1={legendMax1}
                            legendMin1={legendMin1}
                            legendMaxChange1={legendMaxChange1}
                            legendMinChange1={legendMinChange1}
                        />
                    </MapContainer>
                </div>
        
                <div className='grid-item1'>
                    <MapContainer 
                    center={center} 
                    zoom={zoom} 
                    scrollWheelZoom={true} 
                    zoomControl={false} 
                    className="map-container-compare1"
                    >
                        
                        <TileLayer
                            url='https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png'
                        />
                        
                        <Layout style={{ minHeight: '100vh'}}>
                            <TimeSeries data={timeSeriesData2} data2={seasonalData2} type={graphType2} dataType={dataType2}/>
                        </Layout>
        
                        <Grid 
                            area={selectArea2} 
                            data={selectData2} 
                            date={selectDate2} 
                            SetViewOnChange={SetViewOnChange2} 
                            setTimeSeriesData = {getTimeSeriesData2} 
                            setSeasonalData={getSeasonalData2}
                            gridOpacity={gridOpacity2}
                            legendMax={legendMax2}
                            legendMin={legendMin2}
                        />
                        <Legend 
                            dataIndexName = {dataIndex2}
                            legendMax={legendMax2}
                            legendMin={legendMin2}
                        />
        
                        <Breadcrumb selectArea={selectArea2} selectData={selectData2} selectDate={selectDate2}/>
                        <SettingCompare2 
                            graphType={graphType2} 
                            setGraphType={setGraphType2} 
                            dataType={dataType2} 
                            setDataType={setDataType2}
                            opacityChange={opacityChange2} 
                            gridOpacity={gridOpacity2}
                            legendMaxChange={legendMaxChange2}
                            legendMinChange={legendMinChange2}
                            legenMax={legendMax2}
                            legenMin={legendMin2}
        
                            areaChange1={areaChange2} 
                            dataChange1={dataChange2} 
                            dateChange1={dateChange2} 
                            area1={selectArea2} 
                            data1={selectData1} 
                            date1={selectDate2} 
                            graphType1={graphType2} 
                            setGraphType1={setGraphType2}
                            dataType1={dataType2}
                            setDataType1={setDataType2}
                            opacityChange1={opacityChange2}
                            gridOpacity1={gridOpacity2}
                            legendMax1={legendMax2}
                            legendMin1={legendMin2}
                            legendMaxChange1={legendMaxChange2}
                            legendMinChange1={legendMinChange2}
                        />
                    </MapContainer>
                </div>
                <div className='grid-item1'>
                    <MapContainer 
                    center={center} 
                    zoom={zoom} 
                    scrollWheelZoom={true} 
                    zoomControl={false} 
                    className="map-container-compare1"
                    >
                        
                        <TileLayer
                            url='https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png'
                        />
                        
                        <Layout style={{ minHeight: '100vh'}}>
                            <TimeSeries data={timeSeriesData3} data2={seasonalData3} type={graphType3} dataType={dataType3}/>
                        </Layout>
        
                        <Grid 
                            area={selectArea3} 
                            data={selectData3} 
                            date={selectDate3} 
                            SetViewOnChange={SetViewOnChange3} 
                            setTimeSeriesData = {getTimeSeriesData3} 
                            setSeasonalData={getSeasonalData3}
                            gridOpacity={gridOpacity3}
                            legendMax={legendMax3}
                            legendMin={legendMin3}
                        />
                        <Legend 
                            dataIndexName = {dataIndex3}
                            legendMax={legendMax3}
                            legendMin={legendMin3}
                        />
        
                        <Breadcrumb selectArea={selectArea3} selectData={selectData3} selectDate={selectDate3}/>
                        <SettingCompare2
                            graphType={graphType3} 
                            setGraphType={setGraphType3} 
                            dataType={dataType3} 
                            setDataType={setDataType3}
                            opacityChange={opacityChange3} 
                            gridOpacity={gridOpacity3}
                            legendMaxChange={legendMaxChange3}
                            legendMinChange={legendMinChange3}
                            legenMax={legendMax3}
                            legenMin={legendMin3}
        
                            areaChange1={areaChange3} 
                            dataChange1={dataChange3} 
                            dateChange1={dateChange3} 
                            area1={selectArea3} 
                            data1={selectData3} 
                            date1={selectDate3} 
                            graphType1={graphType3} 
                            setGraphType1={setGraphType3}
                            dataType1={dataType3}
                            setDataType1={setDataType3}
                            opacityChange1={opacityChange3}
                            gridOpacity1={gridOpacity3}
                            legendMax1={legendMax3}
                            legendMin1={legendMin3}
                            legendMaxChange1={legendMaxChange3}
                            legendMinChange1={legendMinChange3}
                        />
                    </MapContainer>
                </div>
            </div> 
        )   
}

export default ComparePage3;