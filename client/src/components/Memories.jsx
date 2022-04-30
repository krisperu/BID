import React from 'react'
import NavBar from './NavBar'
import CreateMemoryFrom from './CreateMemoryFrom'

function Memories({ setUser, user, dream }) {
  return (
    <div>Memories
      <NavBar 
        setUser={setUser} 
      />
      <CreateMemoryFrom />
    </div>
  )
}

export default Memories