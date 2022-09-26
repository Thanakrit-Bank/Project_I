import React from 'react'
import { useState } from 'react';
import {MapContainer, TileLayer,LayersControl} from 'react-leaflet' 
import GridData from './GridData';
import Legend from "./Legend";
import Calend from "./Calend";

function MainMap() {

    const center = [13.2955977,102.2090103]
    const zoom = 6
    const all_P = ['Amnat Charoen', 'Ang Thong', 'Bangkok Metropolis', 'Bueng Kan', 'Buri Ram', 'Chachoengsao', 'Chai Nat', 'Chaiyaphum', 'Chanthaburi', 'Chiang Mai', 'Chiang Rai', 'Chon Buri', 'Chumphon', 'Kalasin', 'Kamphaeng Phet', 'Kanchanaburi', 'Khon Kaen', 'Krabi', 'Lampang', 'Lamphun', 'Loei', 'Lop Buri', 'Mae Hong Son', 'Maha Sarakham', 'Mukdahan', 'Nakhon Nayok', 'Nakhon Pathom', 'Nakhon Phanom', 'Nakhon Ratchasima', 'Nakhon Sawan', 'Nakhon Si Thammarat', 'Nan', 'Narathiwat', 'Nong Bua Lam Phu', 'Nong Khai', 'Nonthaburi', 'Pathum Thani', 'Pattani', 'Phangnga', 'Phatthalung', 'Phayao', 'Phetchabun', 'Phetchaburi', 'Phichit', 'Phitsanulok', 'Phra Nakhon Si Ayutthaya', 'Phrae', 'Phuket', 'Prachin Buri', 'Prachuap Khiri Khan', 'Ranong', 'Ratchaburi', 'Rayong', 'Roi Et', 'Sa Kaeo', 'Sakon Nakhon', 'Samut Prakan', 'Samut Sakhon', 'Samut Songkhram', 'Saraburi', 'Satun', 'Si Sa Ket', 'Sing Buri', 'Songkhla', 'Sukhothai', 'Suphan Buri', 'Surat Thani', 'Surin', 'Tak', 'Trang', 'Trat', 'Ubon Ratchathani', 'Udon Thani', 'Uthai Thani', 'Uttaradit', 'Yala', 'Yasothon']
    const [province_select, setProvince] = useState('all')
    const {BaseLayer} = LayersControl;
    
    return (
        <div>
            <MapContainer className='map-view' center={center} zoom={zoom} scrollWheelZoom={true}>
                
                <select onChange={(e) => setProvince(e.target.value)} className='map-view select'>
                    <option value='all' defaultValue>All Province</option>
                    {all_P.map((p, index) => {
                        return <option value={p} key={index}>{p}</option>
                    })}               
                </select>
                
                {console.log("render!!")}
                <LayersControl>
                    <BaseLayer checked name="Satellite View">
                        <TileLayer
                            url='https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
                            maxZoom= {20}
                            subdomains={['mt1','mt2','mt3']}
                        />
                    </BaseLayer>

                    <BaseLayer name="OpenStreetMap.Mapik">
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        />
                    </BaseLayer>

                    <BaseLayer name="hybrid">
                        <TileLayer
                            url='https://api.maptiler.com/maps/hybrid/{z}/{x}/{y}.jpg?key=UWwVBYXDjNUkBGiF7hvU'
                            attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
                            maxZoom= {20}
                        /> 
                    </BaseLayer>

                    <BaseLayer name="alidade_smooth">
                        <TileLayer
                            url='https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png'
                            attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
                            maxZoom= {20}
                        />
                    </BaseLayer>

                    <BaseLayer name="ArcGIS">
                        <TileLayer
                            url='https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
                            attribution='Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
                            maxZoom= {20}
                            subdomains= 'abcd'
                        />                      
                    </BaseLayer>

                    <BaseLayer name="toner-labels">
                    <TileLayer
                            url='https://stamen-tiles-{s}.a.ssl.fastly.net/toner-labels/{z}/{x}/{y}{r}.{ext}'
                            attribution='Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            maxZoom= {20}
                            subdomains= 'abcd'
                            ext= 'png'
                        />
                    </BaseLayer>

                    <BaseLayer name="toner-lines">
                    <TileLayer
                            url='https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lines/{z}/{x}/{y}{r}.{ext}'
                            attribution='Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
                            maxZoom= {20}
                            subdomains= 'abcd'
                            ext= 'png'
                        />
                    </BaseLayer>
                </LayersControl>

                <GridData pName={province_select}/>
                <Legend/>
                <Calend/>

            </MapContainer>
        </div>           
  )
}

export default MainMap