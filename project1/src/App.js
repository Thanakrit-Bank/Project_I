import MainMap from "./components/MainMap";
import 'leaflet/dist/leaflet.css'
import "react-calendar/dist/Calendar.css"
import "./App.css" 
import React, { useState } from 'react';
import Login from "./components/Login";
import TimeSeries from "./components/TimeSeries";

function App() {
  const [token, setToken] = useState();
  if(!token) {
    return (
      <div>
        <Login setToken={setToken} />
      </div>
    )
    
  }
  return (
    <div>
      <MainMap setToken={setToken} token={token}/>     
      {/* <TimeSeries/> */}
    </div>
  );
}

export default App;
