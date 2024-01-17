import './App.css';
import GoogleLogin from 'react-google-login';
import {gapi} from 'gapi-script'
import { useEffect } from 'react';

function App() {
  // const handleFailure = (result)=>{
  //   alert(JSON.stringify(result));
  // };

  const clientId=process.env.REACT_APP_GOOGLE_CLIENT_ID
  useEffect(()=>{
    gapi.load("client:auth2", ()=>{
      gapi.auth2.init({clientId:clientId})
    })
  },[])

  const handleLogin = (googleData)=>{
    console.log(googleData)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Google Login App</h1>
        <div>
          <GoogleLogin
              clientId={clientId}
              buttonText="Log in with Google"
              onSuccess={handleLogin}
              onFailure={handleLogin}
              cookiePolicy={'single_host_origin'}
          >
          </GoogleLogin>
        </div>
      </header>
    </div>
  );
}

export default App;
