import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import {MapContainer, TileLayer,LayersControl} from 'react-leaflet' 
import GridData from './GridData';
import Legend from "./Legend";
import SelectProvince from './SelectProvince';

function MainMap() {

    const [center, setcenter] = useState([13.2955977,102.2090103])
    const [zoom, setzoom] = useState(6)

    const {BaseLayer} = LayersControl;
    useEffect(() => {
        
    })
    return (
        <MapContainer center={center} zoom={zoom} scrollWheelZoom={true} style={{height:'100vh'}}>
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

                <BaseLayer name="maptiler">
                    <TileLayer
                        url='https://api.maptiler.com/maps/hybrid/{z}/{x}/{y}.jpg?key=UWwVBYXDjNUkBGiF7hvU'
                        attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
                        maxZoom= {20}
                    /> 
                </BaseLayer>
            </LayersControl>

            <GridData/>

            <Legend/>

            <SelectProvince/>

        </MapContainer>
  )
}

export default MainMap