import MainMap from "./components/MainMap";
import 'leaflet/dist/leaflet.css'
import "react-calendar/dist/Calendar.css"
import "./App.css" 
import LoginForm from "./components/LoginForm";
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React, { useState } from 'react';
import GoogleIn from "./components/GoogleIn";

function App() {
  const [token, setToken] = useState();
  if(!token) {
    return (
      <div>
        <LoginForm setToken={setToken} />
        <GoogleIn  setToken={setToken}  token={token}/> 
      </div>
    )
    
  }
  return (
    <div>
      <MainMap setToken={setToken} token={token}/>     
    </div>
  );
}

export default App;
