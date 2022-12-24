import React from 'react'
import { GoogleLogout } from 'react-google-login';

const Logout = (props) => {
    const clientId = "410751233141-ktppjh0thn3s4m7j1mjbh5o964c37fg2.apps.googleusercontent.com"

    const logOut=() =>{
        props.setToken(null)
      }
    return (
        <GoogleLogout  
            clientId={clientId} 
            buttonText="Sign Out" 
            onLogoutSuccess={logOut}
            theme="dark"
            className="map-view map-googleOut"
        />
    )
}

export default Logout