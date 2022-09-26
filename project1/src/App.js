// import MapGeoJson from "./components/MyMapClass";
import "./App.css"
import MainMap from "./components/MainMap";
import 'leaflet/dist/leaflet.css'
import "react-calendar/dist/Calendar.css" 

function App() {
  return (
    <div className="App">
      <MainMap/>
    </div>
  );
}

export default App;
