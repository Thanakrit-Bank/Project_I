import React from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { gapi } from 'gapi-script';
import { useEffect, useState } from 'react';

function GoogleIn(props) {

  const clientId = "410751233141-ktppjh0thn3s4m7j1mjbh5o964c37fg2.apps.googleusercontent.com"

  const [profile, setProfile] = useState(null)

  useEffect(()=>{
    gapi.load('client:auth2', ()=> {
      gapi.auth2.init({clientId:clientId})
    })
  }, [])

  const onSuccess = (response) => {
    console.log(response);
    props.setToken(response)
    // setProfile(true)
  };

  const onFailure =(res) => {
    console.log(res);
  }

  const logOut=() =>{
    props.setToken(null)
  }

  return (
    <div>
        {props.token ? (
        <div className="map-googleOut">
          <GoogleLogout  
            clientId={clientId} 
            buttonText="Log out" 
            onLogoutSuccess={logOut}
            theme="dark"
          />
        </div>
        ) : (
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
        </div>)
        }
    </div>
    
  );
}
export default GoogleIn;




