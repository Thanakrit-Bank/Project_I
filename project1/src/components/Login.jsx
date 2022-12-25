import React, { useState } from "react";
import axios from "axios";
import { GoogleLogin } from 'react-google-login';
import { useEffect } from "react";
import { gapi } from "gapi-script";
import {Link, useNavigate} from "react-router-dom"

const Login = (props) => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const clientId = "410751233141-ktppjh0thn3s4m7j1mjbh5o964c37fg2.apps.googleusercontent.com"
    
    const navigate = useNavigate();

    useEffect(() => {
      gapi.load("client:auth2", ()=>{
        gapi.auth2.init({clientId:clientId})
      })
    },[])

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
        const response = await axios.post("http://127.0.0.1:5000/login", {
            username,
            password,
        });
        console.log(response);
        props.setToken(response.data)
        navigate('/mainMap')
        } catch (error) {
        console.error(error);
        }
    };

    const onFailure =(res) => {
        console.log(res);
      }
    const onSuccess = (response) => {
        console.log(response);
        props.setToken(response)
        navigate('/mainMap')
    };
  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleSubmit}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="text"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              className="form-control mt-1"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="form-control mt-1"
              placeholder="Enter password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <div style={{margin: 10, textAlign: "center"}}>
            OR
          </div>
          <div className="map-googleIn">
          <GoogleLogin
            clientId={clientId}
            buttonText="Sign In with Google"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
            isSignedIn={true}
            theme="dark"
          />
        </div>
        </div>
      </form>
    </div>
  )
}

export default Login