import React, { useState } from 'react'
import { MapContainer, TileLayer, LayersControl,useMap } from 'react-leaflet' 
import { latLngBounds } from 'leaflet';
import Calend from "./Calend";
import GridData from './GridData';
import Legend from "./Legend";
import SelectData from './SelectData';
import SelectProvince from './SelectProvince';
import Logout from './Logout';
import TimeSeries from './TimeSeries';

function MainMap(props) {
    // const center = [13.2955977,102.2090103]
    const zoom = 6
    
    const [center, setCenter] = useState([13.2955977,102.2090103])
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

    return (
            <div>
                <MapContainer className='map-view'
                    center={center} 
                    zoom={zoom} 
                    scrollWheelZoom={true} 
                    zoomControl={false}
                    maxZoom={20}
                    minZoom={2}
                    maxBounds={bounds}
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
                    {/* <GoogleIn setToken={props.setToken} token={props.token}/> */}
                    <Logout setToken={props.setToken} token={props.token} />
                    <TimeSeries data={timeSeriesData} />

                </MapContainer>
                {/* <h1>test</h1> */}
            </div>
  )
}

export default MainMap