import React, {Component} from "react";
import {FeatureGroup, GeoJSON, MapContainer,TileLayer} from 'react-leaflet' 
import 'leaflet/dist/leaflet.css' 

class MapGeoJson extends Component {
        state = { 
                    data:[],
                    center:[13.2955977,102.2090103],
                    zoom:6,
                    url:'http://127.0.0.1:5000/get_province/',
                    province:'all',
                    all_P:['Amnat Charoen', 'Ang Thong', 'Bangkok Metropolis', 'Bueng Kan', 'Buri Ram', 'Chachoengsao', 'Chai Nat', 'Chaiyaphum', 'Chanthaburi', 'Chiang Mai', 'Chiang Rai', 'Chon Buri', 'Chumphon', 'Kalasin', 'Kamphaeng Phet', 'Kanchanaburi', 'Khon Kaen', 'Krabi', 'Lampang', 'Lamphun', 'Loei', 'Lop Buri', 'Mae Hong Son', 'Maha Sarakham', 'Mukdahan', 'Nakhon Nayok', 'Nakhon Pathom', 'Nakhon Phanom', 'Nakhon Ratchasima', 'Nakhon Sawan', 'Nakhon Si Thammarat', 'Nan', 'Narathiwat', 'Nong Bua Lam Phu', 'Nong Khai', 'Nonthaburi', 'Pathum Thani', 'Pattani', 'Phangnga', 'Phatthalung', 'Phayao', 'Phetchabun', 'Phetchaburi', 'Phichit', 'Phitsanulok', 'Phra Nakhon Si Ayutthaya', 'Phrae', 'Phuket', 'Prachin Buri', 'Prachuap Khiri Khan', 'Ranong', 'Ratchaburi', 'Rayong', 'Roi Et', 'Sa Kaeo', 'Sakon Nakhon', 'Samut Prakan', 'Samut Sakhon', 'Samut Songkhram', 'Saraburi', 'Satun', 'Si Sa Ket', 'Sing Buri', 'Songkhla', 'Sukhothai', 'Suphan Buri', 'Surat Thani', 'Surin', 'Tak', 'Trang', 'Trat', 'Ubon Ratchathani', 'Udon Thani', 'Uthai Thani', 'Uttaradit', 'Yala', 'Yasothon']
                    } 
  
    componentDidMount() {
        this.fetchData(this.state.url + this.state.province);
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
              data: data.features
            });
          }, (error) => {
            console.error(error);
          });
    }

    input_styles = () =>{
      return({
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      })
    } 
      
    myStyle = () => {
        return {
          color: "green",
          weight: 1,
          opacity: 1,
          fillColor: "red",
          dashArray: '8 5'
        }
      }

    handleCancel = e => {
      
    };
  
    onLatChange = (e) => {
      this.fetchData(this.state.url + this.state.province);
      this.setState({
        province: e.target.value,
      })
      console.log('go to fech');
    }

    render() { 
        return (
          <div>
            <div style={{textAlign:'right'}}>
                <span >
                  <select onChange={(e) => this.onLatChange(e)}>
                    <option value='all' defaultValue>All Province</option>
                    {this.state.all_P.map((p) => {
                      return (<option value={p}>{p}</option>) 
                    })}
                  </select>
                </span>
            </div>

            <MapContainer center={this.state.center} zoom={this.state.zoom} scrollWheelZoom={true} style={{height:'95vh'}}>
                <TileLayer
                    url='https://api.maptiler.com/maps/hybrid/{z}/{x}/{y}.jpg?key=UWwVBYXDjNUkBGiF7hvU'
                    attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
                    maxZoom= {20}
                /> 
                {console.log('render!!')}
                <GeoJSON key={this.state.province}  data={this.state.data} style={this.myStyle}>
                    {console.log(this.state.data)}
                    {console.log(this.state.province)}
                </GeoJSON>
            </MapContainer>

          </div>
        );
    }
}
 
export default MapGeoJson;