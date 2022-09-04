import React, {Component} from "react";
import {GeoJSON, MapContainer, TileLayer, Popup, FeatureGroup,LayersControl} from 'react-leaflet' 
import 'leaflet/dist/leaflet.css' 
import Legend from "./Legend";
// import getGridNC from "./getGrid";

class MapGeoJson extends Component {
        state = { 
                    data:[],
                    center:[13.2955977,102.2090103],
                    zoom:6,
                    url: 'http://127.0.0.1:5000/get_grid',
                    // url: 'http://127.0.0.1:5000/get_spei/Bangkok Metropolis&1902-02',
                    // url:'http://127.0.0.1:5000/get_province/',
                    } 
  
    componentDidMount() {
        this.fetchData(this.state.url);
        
        console.log('did mount');
    }

    fetchData(url) {
      const reqOptions ={
        method:"get", 
        headers:{"x-access-token": "test"},
      }
        let request = fetch(url, reqOptions);
        console.log('feching');
        request
          .then(r => r.json())
          .then(data => {
            this.setState({
              data: data
            });
          }, (error) => {
            console.error(error);
          });
    }
    
    render() { 
      const {BaseLayer} = LayersControl;

        return (
            <MapContainer center={this.state.center} zoom={this.state.zoom} scrollWheelZoom={true} style={{height:'95vh'}}>
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

                {console.log('render!!')}
                <FeatureGroup>

                  {this.state.data.map(data => {

                    var myStyleGrid = {
                        color: "white",
                        weight: 0,
                        opacity: 0,
                        fillColor: 'white',
                    }
                    
                    if(data.properties.index < 600){
                      myStyleGrid.fillColor = '#FFEDA0'
                    }else if(data.properties.index < 700){
                      myStyleGrid.fillColor = '#FED976'
                    }else if(data.properties.index < 800){
                      myStyleGrid.fillColor = '#FEB24C'
                    }else if(data.properties.index < 900){
                      myStyleGrid.fillColor = '#FD8D3C'
                    }else if(data.properties.index < 1000){
                      myStyleGrid.fillColor = '#FC4E2A'
                    }else if(data.properties.index < 1100){
                      myStyleGrid.fillColor = '#E31A1C'
                    }else if(data.properties.index < 1200){
                      myStyleGrid.fillColor = '#BD0026'
                    }else if(data.properties.index < 1300){
                      myStyleGrid.fillColor = '#800026'
                    }
                    
                    return (
                    <GeoJSON key={data.properties.grid_id}  data={data} style={myStyleGrid}>
                      {console.log(data)}
                      <Popup> {data.properties.index} </Popup>
                    </GeoJSON>)
                  })}
                
                </FeatureGroup>
                <Legend/>
            </MapContainer>

        );
    }
}
 
export default MapGeoJson;