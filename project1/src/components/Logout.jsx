import React from 'react'
import { GoogleLogout } from 'react-google-login';
import { Link } from 'react-router-dom';

const Logout = (props) => {
    const clientId = "410751233141-ktppjh0thn3s4m7j1mjbh5o964c37fg2.apps.googleusercontent.com"

    const logOut=() =>{
        console.log('test');
        props.setToken(null)
      }
    return (
        <Link to={'/'}>
            <GoogleLogout  
                clientId={clientId} 
                buttonText="Sign Out" 
                onLogoutSuccess={logOut}
                theme="dark"
                className="map-view map-googleOut"
            />
        </Link>
        
    )
}

export default Logout