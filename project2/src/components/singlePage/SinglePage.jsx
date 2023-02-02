import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import './singlePage.css'
import { Layout } from 'antd';
import TimeSeries from '../showData/TimeSeries';
import "../../data/dataSelection" 
import SideMenu from '../selectionInput/SideMenu';
import Legend from '../showData/Legend';
import Grid from '../showData/Grid';


const SinglePage = () => {
  const center = [13.2955977,102.2090103]
  const zoom = 6

  return (
    <MapContainer 
      center={center} 
      zoom={zoom} 
      scrollWheelZoom={true} 
      zoomControl={false} 
      className="map-container"
    >
        
        <TileLayer
            url='https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png'
        />
        
        <Layout style={{ minHeight: '100vh'}}>
            <SideMenu/>
            <TimeSeries />
            <Grid />
            {/* <Legend /> */}
        </Layout>
                  
    </MapContainer>    
  )
}

export default SinglePage