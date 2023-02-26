import React from 'react';
import ReactDOM from 'react-dom/client';
import SinglePage from './components/singlePage/SinglePage';
import ComparePage2 from './components/comparePage/ComparePage2';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from './components/authentication/Login';
import { RequireToken } from './components/authentication/Auth';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
      <Router>
        <Routes>
          <Route 
            path='/' 
            element={
                <Login/>
            } 
          />
          <Route 
            path='/SinglePage' 
            element={
              <RequireToken>
                <SinglePage/>
              </RequireToken>
            } 
          />
          <Route 
            path='/ComparePage' 
            element={
              <RequireToken>
                <ComparePage2/>
              </RequireToken>
            } 
          />
        </Routes>
      </Router>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
