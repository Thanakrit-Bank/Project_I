import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import './comparePage.css'
import { Layout } from 'antd';
import TimeSeries from '../showData/TimeSeries';
import "../../data/dataSelection" 
import SideMenuCompare from '../comparePage/SideMenuCompare';
import Grid from '../showData/Grid';


const ComparePage = () => {
  const center = [13.2955977,102.2090103]
  const zoom = 6

  return (
    <div className='grid-container'>
      <div className='grid-item'>
        <MapContainer 
          center={center} 
          zoom={zoom} 
          scrollWheelZoom={true} 
          zoomControl={false} 
          className="map-container-compare"
        >
 
            <TileLayer
                url='https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png'
            /> 

            <Layout style={{textAlign: "left", minHeight: '100vh'}}>
                <SideMenuCompare/>
            </Layout>
                      
        </MapContainer>
      </div>  

      <div className='grid-item'>
        <MapContainer 
          center={center} 
          zoom={zoom} 
          scrollWheelZoom={true} 
          zoomControl={false} 
          className="map-container-compare"
        >
  
            <TileLayer
                url='https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png'
            />
  
            <Layout>

            </Layout>
                      
        </MapContainer>
      </div>

      <div className='grid-item'>
        <MapContainer 
          center={center} 
          zoom={zoom} 
          scrollWheelZoom={true} 
          zoomControl={false} 
          className="map-container-compare"
        >
  
            <TileLayer
                url='https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png'
            />
   
            <Layout>

            </Layout>
                      
        </MapContainer>
      </div>     
    </div>  
  )
}

export default ComparePage