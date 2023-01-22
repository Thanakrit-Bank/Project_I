import React from 'react'
import { useState, useEffect } from 'react'
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
                navigate("/singlePage")
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
        <form onSubmit={handleSubmit}>
            <label>username:
            <input 
                type="text" 
                name="username" 
                value={inputs.username || ""} 
                onChange={handleChange}
            />
            </label>
            <label>password:
                <input 
                type="password" 
                name="password" 
                value={inputs.password || ""} 
                onChange={handleChange}
                />
                </label>
                <input type="submit" />
        </form>
  )
}

export default Login