import React, { useState } from 'react'
import { MapContainer, TileLayer, LayersControl } from 'react-leaflet' 
import { latLngBounds } from 'leaflet';
import Calend from "./Calend";
import GridData from './GridData';
import Legend from "./Legend";
import SelectData from './SelectData';
import SelectProvince from './SelectProvince';

function MainMap() {

    const center = [13.2955977,102.2090103]
    const zoom = 6
    
    const [province_select, setProvince] = useState('all')
    const [dataIndex, setDataIndex] = useState('spei')
    const [date, setDate] = useState('2006-01')

    const southWestView = [-90, -180]
    const northEastView = [90, 180]
    const bounds = latLngBounds(southWestView, northEastView)

    const onChangeSelectData = (data) => {
        setDataIndex(data)
    }

    const onChangeSelectProvince = (data) => {
        setProvince(data)
    }

    const onChangeDate = (date) => {
        setDate(date)
    }
    
    return (
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

                <SelectData onChengeSelect={onChangeSelectData} type = {dataIndex}/>

                {console.log("render!!")}

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

                <GridData dataIndex={dataIndex} pName={province_select} date={date}/>
                <Legend dataIndex = {dataIndex}/>
                <Calend className="map-calend" setDate={date} onChange={onChangeDate}/>

            </MapContainer>
  )
}

export default MainMap