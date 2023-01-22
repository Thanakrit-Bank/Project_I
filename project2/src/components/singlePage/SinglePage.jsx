import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import './singlePage.css'
import {Layout} from 'antd';
import TimeSeries from '../showData/TimeSeries';
import "../../data/dataSelection" 
import SideMenu from '../selectionInput/SideMenu';


const SinglePage = () => {
  return (
    <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true} zoomControl={false} className="map-container">
        
        <TileLayer
            url='https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png'
        />
        
        <Layout style={{ minHeight: '100vh'}}>
            <SideMenu/>
            <TimeSeries />
        </Layout>
                  
    </MapContainer>    
  )
}

export default SinglePage