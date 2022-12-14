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

  return (
    <div>
    <Link to="/mainMap"><button className='map-view back'>Back</button></Link>
    <div className="grid-container">
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

            <LayersControl>
                <LayersControl.Overlay checked name="Esri.WorldImagery">
                    <TileLayer
                        url='https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
                        attribution='Tiles &copy; Esri &mdash; Source: Esri'
                        subdomains= 'abcd'
                    />
                </LayersControl.Overlay>

                <LayersControl.Overlay checked name="Stamen.toner-hybrid">
                    <TileLayer
                        url='https://stamen-tiles-{s}.a.ssl.fastly.net/toner-hybrid/{z}/{x}/{y}{r}.{ext}'
                        attribution='Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        subdomains= 'abcd'
                        ext= 'png'
                    />  
                </LayersControl.Overlay>

                <LayersControl.Overlay name="Alidade_smooth">
                    <TileLayer
                        url='https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png'
                    />
                </LayersControl.Overlay>

                <LayersControl.Overlay name="CARTO">
                    <TileLayer
                        url='https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
                    />
                </LayersControl.Overlay>
            </LayersControl>

            <GridData dataIndex={dataIndex} pName={province_select} date={date} SetViewOnChange={SetViewOnChange} index_folder={index_folder} setTimeSeriesData = {getTimeSeriesData}/>
            <Legend dataIndex = {dataIndex}/>
            <Calend setDate={date} onChange={onChangeDate} dataType={dataIndex}/>
            {/* <Logout setToken={props.setToken} token={props.token} /> */}
            <TimeSeries data={timeSeriesData} />
            {/* <CompareButton /> */}
            {/* <Link to="/page2"><button className='map-view map-compare'>Compare Mode</button></Link> */}
        </MapContainer>
      </div>
      <div className="grid-item">
       <MapContainer className='map-view compare'
            center={center} 
            zoom={zoom} 
            scrollWheelZoom={true} 
            zoomControl={false}
            maxZoom={20}
            minZoom={2}
            maxBounds={bounds}
        >
            
            <SelectProvince onChengeSelect= {onChangeSelectProvince2} class="compare"/>

            <SelectData onChengeSelect={onChangeSelectData2} type = {dataIndex2} indexFolder={index_folder2} class="compare"/>

            {/* {console.log("render!!")} */}

            <LayersControl>
                <LayersControl.Overlay checked name="Esri.WorldImagery">
                    <TileLayer
                        url='https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
                        attribution='Tiles &copy; Esri &mdash; Source: Esri'
                        subdomains= 'abcd'
                    />
                </LayersControl.Overlay>

                <LayersControl.Overlay checked name="Stamen.toner-hybrid">
                    <TileLayer
                        url='https://stamen-tiles-{s}.a.ssl.fastly.net/toner-hybrid/{z}/{x}/{y}{r}.{ext}'
                        attribution='Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        subdomains= 'abcd'
                        ext= 'png'
                    />  
                </LayersControl.Overlay>

                <LayersControl.Overlay name="Alidade_smooth">
                    <TileLayer
                        url='https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png'
                    />
                </LayersControl.Overlay>

                <LayersControl.Overlay name="CARTO">
                    <TileLayer
                        url='https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
                    />
                </LayersControl.Overlay>
            </LayersControl>

            <GridData dataIndex={dataIndex2} pName={province_select2} date={date2} SetViewOnChange={SetViewOnChange2} index_folder={index_folder2} setTimeSeriesData = {getTimeSeriesData2}/>
            <Legend dataIndex = {dataIndex2}/>
            <Calend setDate={date2} onChange={onChangeDate2} dataType={dataIndex2} class={'compare'}/>
            {/* <Logout setToken={props.setToken} token={props.token} /> */}
            <TimeSeries data={timeSeriesData2} />
            <Setting />
            {/* <CompareButton /> */}
            {/* <Link to="/page2"><button className='map-view map-compare'>Compare Mode</button></Link> */}
        </MapContainer>
      </div>
    </div>
    </div>
    
  )
}

export default ComparePage