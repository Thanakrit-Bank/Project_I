import React, {  useState } from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet'
import { Layout } from 'antd';
import TimeSeries from '../showData/TimeSeries';
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
  
    const [height1, setHeight1] = useState("30%")
    const [width1, setWidth1] = useState("60%")
  
    const [dataIndex1, setDataIndex1] = useState('CDD')
    const [timeSeriesData1, setTimeSeriesData1] = useState([])
    const [seasonalData1 ,setSeasonalData1] = useState([])
    const [selectArea1, setSelectArea1] = useState("Thailand")
    const [selectData1, setSelectData1] = useState("ecearth@RCP4.5@indices@CDD")
    const [selectDate1, setSelectDate1] = useState('Thu, 19 Mar 1970 17:50:44 GMT,Sat, 19 Mar 2005 17:50:44 GMT')
    const [graphType1, setGraphType1] = useState('Linechart')
    const [dataType1, setDataType1] = useState('Overall')
    const [gridOpacity1, setGridopacity1] = useState(7)
    const [legendMax1, setLegendMax1] =useState('') 
    const [legendMin1, setLegendMin1] =useState('')
    const [graphShow1, setGraphShow1] = useState('On')
    const [legendType1, setLegendType1] = useState('Interval') 

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

    const [height2, setHeight2] = useState("30%")
    const [width2, setWidth2] = useState("60%")

    const [dataIndex2, setDataIndex2] = useState('CDD')
    const [timeSeriesData2, setTimeSeriesData2] = useState([])
    const [seasonalData2 ,setSeasonalData2] = useState([])
    const [selectArea2, setSelectArea2] = useState("Thailand")
    const [selectData2, setSelectData2] = useState("ecearth@RCP4.5@indices@CDD")
    const [selectDate2, setSelectDate2] = useState('Thu, 19 Mar 1970 17:50:44 GMT,Sat, 19 Mar 2005 17:50:44 GMT')
    const [graphType2, setGraphType2] = useState('Linechart')
    const [dataType2, setDataType2] = useState('Overall')
    const [gridOpacity2, setGridopacity2] = useState(7)
    const [legendMax2, setLegendMax2] =useState('') 
    const [legendMin2, setLegendMin2] =useState('') 
    const [graphShow2, setGraphShow2] = useState('On')
    const [legendType2, setLegendType2] = useState('Interval') 

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
    
    const [height3, setHeight3] = useState("30%")
    const [width3, setWidth3] = useState("60%")

    const [dataIndex3, setDataIndex3] = useState('CDD')
    const [timeSeriesData3, setTimeSeriesData3] = useState([])
    const [seasonalData3 ,setSeasonalData3] = useState([])
    const [selectArea3, setSelectArea3] = useState("Thailand")
    const [selectData3, setSelectData3] = useState("ecearth@RCP4.5@indices@CDD")
    const [selectDate3, setSelectDate3] = useState('Thu, 19 Mar 1970 17:50:44 GMT,Sat, 19 Mar 2005 17:50:44 GMT')
    const [graphType3, setGraphType3] = useState('Linechart')
    const [dataType3, setDataType3] = useState('Overall')
    const [gridOpacity3, setGridopacity3] = useState(7)
    const [legendMax3, setLegendMax3] =useState('') 
    const [legendMin3, setLegendMin3] =useState('')
    const [graphShow3, setGraphShow3] = useState('On')
    const [legendType3, setLegendType3] = useState('Interval') 

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
                        <TimeSeries 
                            dataIndexName={dataIndex1}
                            data={timeSeriesData1} 
                            data2={seasonalData1} 
                            type={graphType1} 
                            dataType={dataType1}
                            height={height1}
                            width={width1}
                        />
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
        
                    <Breadcrumb 
                        selectArea={selectArea1} 
                        selectData={selectData1} 
                        selectDate={selectDate1}
                    />
                    
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
                        
                        graphShow={graphShow1} 
                        setGraphShow={setGraphShow1}                     
                        legendType={legendType1} 
                        setLegendType={setLegendType1}
                        setHeight={setHeight1}
                        setWidth={setWidth1}  
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
                        <TimeSeries 
                            dataIndexName={dataIndex2}
                            data={timeSeriesData2} 
                            data2={seasonalData2} 
                            type={graphType2} 
                            dataType={dataType2}
                            height={height2}
                            width={width2}
                        />
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
        
                    <Breadcrumb 
                        selectArea={selectArea2} 
                        selectData={selectData2} 
                        selectDate={selectDate2}
                    />
                    
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
                        data1={selectData2} 
                        date1={selectDate2} 

                        graphShow={graphShow2} 
                        setGraphShow={setGraphShow2}                     
                        legendType={legendType2} 
                        setLegendType={setLegendType2}
                        setHeight={setHeight2}
                        setWidth={setWidth2}
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
                        <TimeSeries 
                            dataIndexName={dataIndex3}
                            data={timeSeriesData3} 
                            data2={seasonalData3} 
                            type={graphType3} 
                            dataType={dataType3}
                            height={height3}
                            width={width3}
                        />
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
        
                    <Breadcrumb 
                        selectArea={selectArea3} 
                        selectData={selectData3} 
                        selectDate={selectDate3}
                    />
                    
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

                        graphShow={graphShow3} 
                        setGraphShow={setGraphShow3}                     
                        legendType={legendType3} 
                        setLegendType={setLegendType3}
                        setHeight={setHeight3}
                        setWidth={setWidth3}
                    />
                </MapContainer>
            </div>
        </div> 
    )   
}

export default ComparePage3;