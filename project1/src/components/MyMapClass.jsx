import React, {Component} from "react";
import {GeoJSON, MapContainer, TileLayer, Popup, FeatureGroup} from 'react-leaflet' 
import 'leaflet/dist/leaflet.css' 
// import getGridNC from "./getGrid";

class MapGeoJson extends Component {
        state = { 
                    data:[],
                    center:[13.2955977,102.2090103],
                    zoom:6,
                    url: 'http://127.0.0.1:5000/get_grid',
                    // url: 'http://127.0.0.1:5000/get_spei/Mae Hong Son',
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
        // return request
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

    onLatChange = (e) => {
      this.fetchData(this.state.url + this.state.province);
      this.setState({
        province: e.target.value,
      })
      console.log('go to fech');
    }
    
    render() { 
        return (
          // <div>
          //   <div style={{textAlign:'right'}}>
          //       <span >
          //         <select onChange={(e) => this.onLatChange(e)}>
          //           <option value='all' defaultValue>All Province</option>
          //           {this.state.all_P.map((p) => {
          //             return (<option value={p}>{p}</option>) 
          //           })}
          //         </select>
          //       </span>
          //   </div>

            <MapContainer center={this.state.center} zoom={this.state.zoom} scrollWheelZoom={true} style={{height:'95vh'}}>
                <TileLayer
                    url='https://api.maptiler.com/maps/hybrid/{z}/{x}/{y}.jpg?key=UWwVBYXDjNUkBGiF7hvU'
                    attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
                    maxZoom= {20}
                /> 

                {console.log('render!!')}
                <FeatureGroup>

                  {this.state.data.map(data => {

                    var myStyleGrid = {
                        color: "white",
                        weight: 0,
                        opacity: 0.5,
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
               
            </MapContainer>

        );
    }
}
 
export default MapGeoJson;