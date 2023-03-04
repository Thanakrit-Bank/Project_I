import React from 'react'
import { useState} from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useNavigate } from 'react-router-dom'
import { setToken } from './Auth'
import './login.css'

const Login = () => {

    const MySwal = withReactContent(Swal)
    const navigate = useNavigate()

    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        var myHeaders = new Headers();
        myHeaders.append("x-access-token", "test");
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
        "username": inputs.username,
        "password": inputs.password
        });

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        // fetch("https://fastapi-backend-379503.et.r.appspot.com/login", requestOptions)
        fetch("http://127.0.0.1:8000/login", requestOptions)
        .then(response => response.json())
        .then(result => {
            if (result.status === "OK" && result.token){
                MySwal.fire({
                    html: <i>{result.message}</i>,
                    icon: 'success'
                  })
                .then((() => {
                    setToken(result.token) // use for uathen each page 
                navigate("/SinglePage")
                }))
            } else {
                MySwal.fire({
                    html: <i>{result.message}</i>,
                    icon: 'error'
                  })
            }
        })
        .catch(error => console.log('error', error));
        }
    
    return (
        <div className="background">
            <div>
                <div className="shape" />
                <div className="shape" />
            </div>

            <form onSubmit={handleSubmit}>

                    <h3>Login</h3>

                    <label >Username
                        <input 
                            type="text" 
                            name="username" 
                            value={inputs.username || ""} 
                            onChange={handleChange}
                            id="username"
                            placeholder="Enter username"
                        />
                    </label>
   
                    <label >Password
                        <input 
                            type="password" 
                            name="password" 
                            value={inputs.password || ""} 
                            onChange={handleChange}
                            id="password"
                            placeholder="Enter password"
                        />
                    </label>      

                    <button className='button' type="submit">
                        Log In
                    </button>

            </form>            
        </div>
    )
}

export default Login