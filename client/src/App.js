import React, { useState, useEffect } from 'react'
import { Route, Switch } from "react-router-dom"
import LandingPage from './components/LandingPage'
import Signup from './components/Signup'
import Login from './components/Login'
import Memories from './components/Memories'
import Profile from './components/Profile'

function App() {
  // const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState(null)

  
  //Auto-login
  useEffect(() => {
    fetch("/authorize").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, [])

  if (!user) return <Login setUser={setUser} />

  return (
    <div>
      <Switch>
        <Route exact path="/">
          <LandingPage 
            setUser={setUser} 
            // setIsAuthenticated={setIsAuthenticated}
            user={user}
          />
        </Route>

        <Route path="/signup">
          <Signup
            // onLogin={onLogin}
          />
        </Route>

        <Route path="/login">
          <Login
            setUser={setUser} 
            // setIsAuthenticated={setIsAuthenticated} 
          />
        </Route>

        <Route exact path="/memories">
            <Memories
             setUser={setUser} 
            //  setIsAuthenticated={setIsAuthenticated}
             user={user}
            />
        </Route>

        <Route exact path="/profile">
          <Profile
            setUser={setUser} 
            // setIsAuthenticated={setIsAuthenticated}
            user={user}
          />
        </Route>

      </Switch>
      <div className='footer'>
        <div>BID | //Flatiron School</div>   
        <div>Created By: Kristina Peru | <a href="https://github.com/krisperu/BID">GitHub</a> | <a href="https://www.linkedin.com/in/kristina-peru-205557189/">Contact Me</a></div>
      </div> 

    </div>
  );
}

export default App;
