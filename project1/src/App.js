import MainMap from "./components/MainMap";
import 'leaflet/dist/leaflet.css'
import "react-calendar/dist/Calendar.css"
import "./App.css" 
import React, { useState } from 'react';
import Login from "./components/Login";
import ComparePage from "./components/ComparePage";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import LoginPage from "./components/LoginPage";
function App() {
  // const [token, setToken] = useState(null);
  // if(!token) {
  //   return (
  //     <div>
  //       <Login setToken={setToken} />
  //     </div>
  //   )
    
  // }
  return (
    // <div>
    //   <MainMap setToken={setToken} token={token}/>     
    // </div>
    <div>
      <Router>
      {/* <MainMap setToken={setToken} token={token}/>  */}
      {/* <TempPage/> */}
        <Routes>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/mainMap' element= {<MainMap/>}/>
          <Route path='/page2' element={<ComparePage/>} exact/>
        </Routes>
      </Router>
    </div>
  );

  
}

export default App;
