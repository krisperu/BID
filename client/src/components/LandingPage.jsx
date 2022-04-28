import React, { useState, useEffect } from 'react'
import NavBar from './NavBar'
import CreateListForm from './CreateListForm'
import ListCard from './ListCard'

function LandingPage({ setIsAuthenticated, setUser, user }) {
  const [lists, setLists] = useState([])

  useEffect(() => {
    fetch("/lists")
    .then((r) => r.json())
    .then(setLists)
  }, [])
  
  const listObj = lists.map((list) => 
    <ListCard list={list} lists={lists} setLists={setLists}/>
  )

  return (
    <div>
        <NavBar 
          setUser={setUser} 
          setIsAuthenticated={setIsAuthenticated}
        />
        <br></br>
        <br></br>
        <CreateListForm lists={lists} setLists={setLists}/>
        <div>{listObj}</div>
    </div>
  )
}

export default LandingPage