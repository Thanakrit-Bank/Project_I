import React from 'react'
import { useState } from 'react';
import { MapContainer, TileLayer, LayersControl } from 'react-leaflet' 
import GridData from './GridData';
import Legend from "./Legend";
import Calend from "./Calend";
import { latLngBounds } from 'leaflet';

function MainMap() {

    const center = [13.2955977,102.2090103]
    const zoom = 6
    const all_P = ['Amnat Charoen', 'Ang Thong', 'Bangkok Metropolis', 'Bueng Kan', 'Buri Ram', 'Chachoengsao', 'Chai Nat', 'Chaiyaphum', 'Chanthaburi', 'Chiang Mai', 'Chiang Rai', 'Chon Buri', 'Chumphon', 'Kalasin', 'Kamphaeng Phet', 'Kanchanaburi', 'Khon Kaen', 'Krabi', 'Lampang', 'Lamphun', 'Loei', 'Lop Buri', 'Mae Hong Son', 'Maha Sarakham', 'Mukdahan', 'Nakhon Nayok', 'Nakhon Pathom', 'Nakhon Phanom', 'Nakhon Ratchasima', 'Nakhon Sawan', 'Nakhon Si Thammarat', 'Nan', 'Narathiwat', 'Nong Bua Lam Phu', 'Nong Khai', 'Nonthaburi', 'Pathum Thani', 'Pattani', 'Phangnga', 'Phatthalung', 'Phayao', 'Phetchabun', 'Phetchaburi', 'Phichit', 'Phitsanulok', 'Phra Nakhon Si Ayutthaya', 'Phrae', 'Phuket', 'Prachin Buri', 'Prachuap Khiri Khan', 'Ranong', 'Ratchaburi', 'Rayong', 'Roi Et', 'Sa Kaeo', 'Sakon Nakhon', 'Samut Prakan', 'Samut Sakhon', 'Samut Songkhram', 'Saraburi', 'Satun', 'Si Sa Ket', 'Sing Buri', 'Songkhla', 'Sukhothai', 'Suphan Buri', 'Surat Thani', 'Surin', 'Tak', 'Trang', 'Trat', 'Ubon Ratchathani', 'Udon Thani', 'Uthai Thani', 'Uttaradit', 'Yala', 'Yasothon']
    const [province_select, setProvince] = useState('all')
    const southWestView = [-90, -180]
    const northEastView = [90, 180]
    const bounds = latLngBounds(southWestView, northEastView)
    
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
                
                <select onChange={(e) => setProvince(e.target.value)} className='map-view select'>
                    <option value='all' defaultValue>All Province</option>
                    {all_P.map((p, index) => {
                        return <option value={p} key={index}>{p}</option>
                    })}               
                </select>
                
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

                <GridData pName={province_select}/>
                <Legend/>
                <Calend className="map-calend"/>

            </MapContainer>
        </div>           
  )
}

export default MainMap