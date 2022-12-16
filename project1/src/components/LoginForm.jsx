import React, { useState } from "react";
import axios from "axios";
// import "./loginform.css";

function LoginForm(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://127.0.0.1:5000/login", {
        username,
        password,
      });
      console.log(response);
      props.setToken(response.data)
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="center">
      <label>
        Username:
          <input
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
      </label>
      <br/>
      <label>
        Password:
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
      </label>
      <br/>
      <button type="submit">Login</button>
    </form>   
  );
}

export default LoginForm;