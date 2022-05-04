import React, { useState, useEffect } from 'react'
import { Route, Switch } from "react-router-dom"
import LandingPage from './components/LandingPage'
import Signup from './components/Signup'
import Login from './components/Login'
import Memories from './components/Memories'
import Profile from './components/Profile'
import CreateMemoryForm from './components/CreateMemoryForm'

function App() {
  const [user, setUser] = useState(null)
  const [dreams, setDreams] = useState([])
  const [completedDreams, setCompletedDreams] = useState([])
  const [memories, setMemories] = useState([])
  const [showCreateMemoryForm, setShowCreateMemoryForm] = useState(false)

  //Fetching all Dreams
  useEffect(() => {
   fetch("/dreams")
   .then((r) => r.json())
   .then(setDreams)
 }, [])

 //Fetch all Memories
 useEffect(() => {
   fetch("/memories")
   .then((r) => r.json())
   .then(setMemories)
 }, [])
 
 //Fetch Completed Dreams
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
      key={filteredDream.id}
      dream={filteredDream}
      setUser={setUser}
      user={user}
      dreams={dreams}
      />
    )

    function handleCreateMemoryForm(showCreateMemoryForm) {
      setShowCreateMemoryForm(!showCreateMemoryForm)
    }

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
            <button onClick={() => handleCreateMemoryForm(showCreateMemoryForm)} className="ui icon left labeled basic button" ><i aria-hidden="true" className="add icon" ></i>Add Memory</button>
            <br></br>
            {showCreateMemoryForm&& <CreateMemoryForm user={user} dreams={completedDreams} completedDreams={completedDreams} setCompletedDreams={setCompletedDreams}/>}
            <br></br>
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
