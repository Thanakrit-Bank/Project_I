import React, { useState } from 'react';
import Login from "./Login";
import MainMap from "./MainMap";


const LoginPage = () => {
    const [token, setToken] = useState(null);
    if(!token) {
      return (
        <div>
          <Login setToken={setToken} />
        </div>
      )
      
    }
    return (
      <div>
        <MainMap setToken={setToken} token={token}/>     
      </div>
    //   <div>
    //     <Router>
    //     <MainMap setToken={setToken} token={token}/> 
    //       <Routes>
    //         <Route path='/' element={<MainMap setToken={setToken} token={token}/>}/>
    //         <Route path='/page2' element={<ComparePage/>} exact/>
    //       </Routes>
    //     </Router>
    //   </div>
    );
}

export default LoginPage