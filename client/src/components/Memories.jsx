import React from 'react'
import NavBar from './NavBar'
import CreateMemoryFrom from './CreateMemoryFrom'

function Memories({ setUser, user, dreams, dream }) {

  return (
    <div>
      <NavBar 
      setUser={setUser} 
      />
      <li>
        {dream.dream}
      </li>
      
      <CreateMemoryFrom />
    </div>
  )
}

export default Memories