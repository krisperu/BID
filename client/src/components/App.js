import React, { useState, useEffect } from 'react'
import { Route, Switch } from "react-router-dom"
import LandingPage from './LandingPage'
import Login from './Login'
import Profile from './Profile'
import DreamMemMap from './DreamMemMap'
import NavBar from './NavBar'

function App() {
  const [user, setUser] = useState(null)
  const [profilePics, setProfilePics] = useState([])
  
  //Auto-login
  useEffect(() => {
    fetch("/authorize").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, [])

  //Fetching images
  useEffect(() => {
    fetch("/images")
    .then((r) => r.json())
    .then(setProfilePics)
  }, [])

  if (!user) return <Login setUser={setUser}/>

  return (
    <div>
      <NavBar
        user={user}
        setUser={setUser}
        profilePics={profilePics}
      />
      <div className="main">
        <div className="logo">
          <h1 className="main-logo">Before I Die</h1>
          A Bucket List App
        </div>
        <Switch>
          <Route exact path="/">  
            <LandingPage
              user={user}
            />
          </Route>

          <Route exact path="/memories">
            <DreamMemMap
              user={user}
            />
          </Route>

          <Route exact path="/profile">
            <Profile 
              user={user}
              setUser={setUser}
              profilePics={profilePics}
            />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
