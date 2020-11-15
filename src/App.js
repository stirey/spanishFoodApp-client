import React, { useState, useEffect } from 'react';

import './App.css';
import Navbar from './components/Navbar/Navbar';
import Auth from './components/Auth/Auth'
import SpanishFood from './components/SpanishFood/SpanishFood'

function App() {
  //let session Token, function setSessionToken(newValue) { sessionToken = newValue}
  const [sessionToken, setSessionToken] = useState(undefined);

  useEffect(
    () => {
      const token = localStorage.getItem('token')
      if (token) {
        setSessionToken(token)
      }
    }, []
  )

  const updateToken = (newToken) => {
    setSessionToken(newToken)
    localStorage.setItem('token', newToken)
  }

  const clearToken = () => {
    setSessionToken(undefined)
    localStorage.clear()
  }
 
  return (
    <div className="App">
      <Navbar clearToken={clearToken}/>
    { !sessionToken ? <Auth updateToken={updateToken} /> : <SpanishFood sessionToken={sessionToken} />}
    </div>
  );
}


export default App;
