import React, { useState, useEffect } from 'react'
import { Route, Switch } from "react-router-dom"
import LandingPage from './components/LandingPage'
import Signup from './components/Signup'
import Login from './components/Login'
import NavBar from './components/NavBar'
import Memories from './components/Memories'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch('/authorize')
    .then((res) => {
      if (res.ok) {
        res.json()
        .then((user) => {
          setIsAuthenticated(true);
          setUser(user);
        });
      }
      else {
        console.log("We received errors...")
      }
    });
  },[]);

  if (!isAuthenticated) return <Login error={'please login'} setIsAuthenticated={setIsAuthenticated} setUser={setUser} />;
  if (!user) return <Login setUser={setUser} setIsAuthenticated={setIsAuthenticated} />

  return (
    <div>
      <Signup />
      <Login />
      <NavBar />
      <LandingPage />
      <Memories />

    </div>
  );
}

export default App;
