import React, { useState, useEffect } from 'react'
import NavBar from './NavBar'
import CreateListForm from './CreateListForm'

function LandingPage({ setIsAuthenticated, setUser, user }) {
  const [lists, setLists] = useState([])

  useEffect(() => {
    fetch("/lists")
    .then((r) => r.json())
    .then(setLists)
  }, [])
  
  const listObj = lists.map((list) => 
  <div key={list.id}>
    <div className="container">
      <div className="card">
        <h4>{list.title}</h4>
      </div>
    </div>
  </div>
  )

  return (
    <div>
        <NavBar 
          setUser={setUser} 
          setIsAuthenticated={setIsAuthenticated}
        />
        <CreateListForm />
        <div>{listObj}</div>
    </div>
  )
}

export default LandingPage