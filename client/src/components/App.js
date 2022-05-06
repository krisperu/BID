import React, { useState, useEffect } from 'react'
import { Route, Switch } from "react-router-dom"
import LandingPage from './LandingPage'
import Login from './Login'
import Profile from './Profile'
import DreamMemMap from './DreamMemMap'
import NavBar from './NavBar'

function App() {
  const [user, setUser] = useState(null)
  
  //Auto-login
  useEffect(() => {
    fetch("/authorize").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, [])

  if (!user) return <Login setUser={setUser}/>

  return (
    <div>
      <NavBar user={user} setUser={setUser}/>
      <div className="main">
        <div className="logo">
        <h1>Before I Die</h1>
        A Bucket List App
        </div>
        <Switch>
          <Route exact path="/">  
            <LandingPage user={user}/>
          </Route>

          <Route exact path="/memories">
            <DreamMemMap user={user}/>
          </Route>

          <Route exact path="/profile">
            <Profile user={user} setUser={setUser}/>
          </Route>
        </Switch>
        <div className='footer'>
          <div>BID | //Flatiron School</div>   
          <div>Created By: Kristina Peru | <a href="https://github.com/krisperu/BID">GitHub</a> | <a href="https://www.linkedin.com/in/kristina-peru-205557189/">Contact Me</a></div>
        </div> 
      </div>
    </div>
  );
}

export default App;
