import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import './comparePage.css'
import TimeSeries from './TimeSeries';
import { MapContainer, TileLayer, LayersControl,useMap } from 'react-leaflet' 
import { latLngBounds } from 'leaflet';
import Calend from "./Calend";
import GridData from './GridData';
import Legend from "./Legend";
import SelectData from './SelectData';
import SelectProvince from './SelectProvince';
import Setting from './Setting';
import '../App.css'

const ComparePage = () => {

  const center = [13.2955977,102.2090103]
    const zoom = 6
    
    // const [center, setCenter] = useState([13.2955977,102.2090103])
    const [province_select, setProvince] = useState('all')
    const [dataIndex, setDataIndex] = useState('rcp45_PRCPTOT')
    const [date, setDate] = useState('2006')
    const [index_folder, setIndex_folder] = useState('indices_bak')
    const [timeSeriesData, setTimeSeriesData] = useState([])

    const southWestView = [-90, -180]
    const northEastView = [90, 180]
    const bounds = latLngBounds(southWestView, northEastView)

    const onChangeSelectData = (data) => {
        let index_name = data.split("*")[0]
        let folder_name = data.split("*")[1]
        setDataIndex(index_name)
        setIndex_folder(folder_name)
    }

    const onChangeSelectProvince = (data) => {
        setProvince(data)
    }

    const onChangeDate = (date) => {
        setDate(date)
    }
    // set center of map to center of province
    function SetViewOnChange(coords) {
        const map = useMap();
        if (province_select === 'all'){
            map.setView([13.2955977,102.2090103], 6);
        }else{
            map.setView([coords[1], coords[0]], 8);
        }
        return null;
      }
    
    const getTimeSeriesData = (data) => {
        setTimeSeriesData(data)
    }

    // Map2
    const [province_select2, setProvince2] = useState('all')
    const [dataIndex2, setDataIndex2] = useState('rcp45_PRCPTOT')
    const [date2, setDate2] = useState('2006')
    const [index_folder2, setIndex_folder2] = useState('indices_bak')
    const [timeSeriesData2, setTimeSeriesData2] = useState([])

    const southWestView2 = [-90, -180]
    const northEastView2 = [90, 180]
    const bounds2 = latLngBounds(southWestView2, northEastView2)

    const onChangeSelectData2 = (data) => {
        let index_name = data.split("*")[0]
        let folder_name = data.split("*")[1]
        setDataIndex2(index_name)
        setIndex_folder2(folder_name)
    }

    const onChangeSelectProvince2 = (data) => {
        setProvince2(data)
    }

    const onChangeDate2 = (date) => {
        setDate2(date)
    }
    // set center of map to center of province
    function SetViewOnChange2(coords) {
        const map = useMap();
        if (province_select === 'all'){
            map.setView([13.2955977,102.2090103], 6);
        }else{
            map.setView([coords[1], coords[0]], 8);
        }
        return null;
      }
    
    const getTimeSeriesData2 = (data) => {
        setTimeSeriesData2(data)
    }

    // Map3
    const [province_select3, setProvince3] = useState('all')
    const [dataIndex3, setDataIndex3] = useState('rcp45_PRCPTOT')
    const [date3, setDate3] = useState('2006')
    const [index_folder3, setIndex_folder3] = useState('indices_bak')
    const [timeSeriesData3, setTimeSeriesData3] = useState([])

    const southWestView3 = [-90, -180]
    const northEastView3 = [90, 180]
    const bounds3 = latLngBounds(southWestView3, northEastView3)

    const onChangeSelectData3 = (data) => {
        let index_name = data.split("*")[0]
        let folder_name = data.split("*")[1]
        setDataIndex3(index_name)
        setIndex_folder3(folder_name)
    }

    const onChangeSelectProvince3 = (data) => {
        setProvince3(data)
    }

    const onChangeDate3 = (date) => {
        setDate3(date)
    }
    // set center of map to center of province
    function SetViewOnChange3(coords) {
        const map = useMap();
        if (province_select === 'all'){
            map.setView([13.2955977,102.2090103], 6);
        }else{
            map.setView([coords[1], coords[0]], 8);
        }
        return null;
      }
    
    const getTimeSeriesData3 = (data) => {
        setTimeSeriesData3(data)
    }

  return (
    <div>
        <Link to="/mainMap"><button className='map-view back'>Back</button></Link>
    <div className="grid-container">

        {/* Map1 */}
        <div className="grid-item">
            <MapContainer className='map-view compare'
                center={center} 
                zoom={zoom} 
                scrollWheelZoom={true} 
                zoomControl={false}
                maxZoom={20}
                minZoom={2}
                maxBounds={bounds2}
            >
                
                <SelectProvince onChengeSelect= {onChangeSelectProvince}/>

                <SelectData onChengeSelect={onChangeSelectData} type = {dataIndex} indexFolder={index_folder}/>

                {/* {console.log("render!!")} */}

                <TileLayer
                    url='https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
                />
                    
                <GridData dataIndex={dataIndex} pName={province_select} date={date} SetViewOnChange={SetViewOnChange} index_folder={index_folder} setTimeSeriesData = {getTimeSeriesData}/>
                <Legend dataIndex = {dataIndex}/>
                <Calend setDate={date} onChange={onChangeDate} dataType={dataIndex}/>
                <TimeSeries data={timeSeriesData} />
            </MapContainer>
        </div>

        {/* Map2 */}
        <div className="grid-item">
        <MapContainer className='map-view compare2'
                center={center} 
                zoom={zoom} 
                scrollWheelZoom={true} 
                zoomControl={false}
                maxZoom={20}
                minZoom={2}
                maxBounds={bounds}
            >
                
                <SelectProvince onChengeSelect= {onChangeSelectProvince2} class="compare2"/>

                <SelectData onChengeSelect={onChangeSelectData2} type = {dataIndex2} indexFolder={index_folder2} class="compare2"/>

                {/* {console.log("render!!")} */}

                <TileLayer
                    url='https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
                />

                <GridData dataIndex={dataIndex2} pName={province_select2} date={date2} SetViewOnChange={SetViewOnChange2} index_folder={index_folder2} setTimeSeriesData = {getTimeSeriesData2}/>
                <Legend dataIndex = {dataIndex2}/>
                <Calend setDate={date2} onChange={onChangeDate2} dataType={dataIndex2} class={'compare2'}/>
                <TimeSeries data={timeSeriesData2} />
            </MapContainer>
        </div>

        {/* Map3 */}
        <div className="grid-item">
            <MapContainer className='map-view compare3'
                    center={center} 
                    zoom={zoom} 
                    scrollWheelZoom={true} 
                    zoomControl={false}
                    maxZoom={20}
                    minZoom={2}
                    maxBounds={bounds}
                >
                    
                    <SelectProvince onChengeSelect= {onChangeSelectProvince3} class='compare3'/>

                    <SelectData onChengeSelect={onChangeSelectData3} type = {dataIndex3} indexFolder={index_folder3} class="compare3"/>

                    {/* {console.log("render!!")} */}

                    <TileLayer
                        url='https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
                    />

                    <GridData dataIndex={dataIndex3} pName={province_select3} date={date3} SetViewOnChange={SetViewOnChange3} index_folder={index_folder3} setTimeSeriesData = {getTimeSeriesData3}/>
                    <Legend dataIndex = {dataIndex3}/>
                    <Calend setDate={date3} onChange={onChangeDate3} dataType={dataIndex3} class={'compare3'}/>
                    <TimeSeries data={timeSeriesData3} />
                    <Setting />
                </MapContainer>
            </div>        
        </div>
    </div>
    
  )
}

export default ComparePage