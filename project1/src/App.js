import MainMap from "./components/MainMap";
import React from 'react';
import ComparePage from "./components/ComparePage";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import 'leaflet/dist/leaflet.css'
import "react-calendar/dist/Calendar.css"
import "./App.css"
import Demo from "./components/Demo";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact  path='/' element={<LoginPage/>}/>
          <Route path='/mainMap' element= {<MainMap/>}/>
          <Route path='/page2' element={<ComparePage/>} />
          <Route path='/page3' element={<Demo/>} />
        </Routes>
      </Router>
    </div>
  ); 
}

export default App;