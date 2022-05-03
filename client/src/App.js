import React, { useState, useEffect } from 'react'
import { Route, Switch } from "react-router-dom"
import LandingPage from './components/LandingPage'
import Signup from './components/Signup'
import Login from './components/Login'
import Memories from './components/Memories'
import Profile from './components/Profile'

function App() {
  const [user, setUser] = useState(null)
  const [dreams, setDreams] = useState([])
  const [completedDreams, setCompletedDreams] = useState([])

  //Fetching all Dreams
  useEffect(() => {
   fetch("/dreams")
   .then((r) => r.json())
   .then(setDreams)
 }, [])

 useEffect(() => {
   fetch("/completeddreams")
   .then((r) => r.json())
   .then(setCompletedDreams)
 }, [])
  
  //Auto-login
  useEffect(() => {
    fetch("/authorize").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, [])

  if (!user) return <Login setUser={setUser} />

  const dreamObj = completedDreams.map(filteredDream =>
    <Memories 
      dream={filteredDream}
      setUser={setUser}
      user={user}
      dreams={dreams}
      />
    )
  // console.log(completedDreams)


  return (
    <div className="main">
      <div className="logo">
        <h1>Before I Die</h1>
        A Bucket List App
      </div>
      
      <Switch>
        <Route exact path="/">
          <LandingPage 
            setUser={setUser} 
            user={user}
            dreams={dreams}
            setDreams={setDreams}
          />
        </Route>

        <Route path="/signup">
          <Signup
            user={user}
            setUser={setUser}
          />
        </Route>

        <Route path="/login">
          <Login
            setUser={setUser} 
          />
        </Route>

        <Route exact path="/memories">
            {dreamObj}
        </Route>

        <Route exact path="/profile">
          <Profile
            setUser={setUser}
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
