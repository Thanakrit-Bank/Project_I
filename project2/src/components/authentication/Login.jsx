import React from 'react'
import { useState} from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useNavigate } from 'react-router-dom'
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

        fetch("http://127.0.0.1:5000/login", requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log(result)
            if (result.status === "OK"){
                MySwal.fire({
                    html: <i>{result.message}</i>,
                    icon: 'success'
                  })
                .then((value => {
                localStorage.setItem("token", result.token) // use for uathen each page 
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
        <div class="background">
            <div>
                <div class="shape" />
                <div class="shape" />
            </div>

            <form onSubmit={handleSubmit}>

                    <h3>Login</h3>

                    <label for="username">Username
                        <input 
                            type="text" 
                            name="username" 
                            value={inputs.username || ""} 
                            onChange={handleChange}
                            id="username"
                            placeholder="Enter username"
                        />
                    </label>
   
                    <label for="password">Password
                        <input 
                            type="password" 
                            name="password" 
                            value={inputs.password || ""} 
                            onChange={handleChange}
                            id="password"
                            placeholder="Enter password"
                        />
                    </label>      

                    <button type="submit">
                        Log In
                    </button>

                    <div style={{margin: 10, textAlign: "center"}}>
                        OR
                    </div>
                    
            </form>            
        </div>
    )
}

export default Login