import React from 'react';
import ReactDOM from 'react-dom/client';
import SinglePage from './components/singlePage/SinglePage';
import ComparePage from './components/comparePage/ComparePage';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from './components/authentication/Login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
      <Router>
        <Routes>
          <Route path='/SinglePage' element= {<SinglePage/>}/>
          <Route path='/ComparePage' element={<ComparePage/>} />
          <Route index path='/Login' element={<Login/>} />
        </Routes>
      </Router>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
