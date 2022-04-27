import React from 'react'
import NavBar from './NavBar'
import CreateMemoryFrom from './CreateMemoryFrom'

function Memories({ setIsAuthenticated, setUser, user }) {
  return (
    <div>Memories
      <NavBar 
        setUser={setUser} 
        // setIsAuthenticated={setIsAuthenticated}
      />
      <CreateMemoryFrom />
    </div>
  )
}

export default Memories