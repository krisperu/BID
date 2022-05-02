import React from 'react'
import NavBar from './NavBar'
import CreateMemoryFrom from './CreateMemoryFrom'

function Memories({ setUser, user, dreams }) {
  // const memoryObj = user.memories.filter(memory => memory.)
  console.log(dreams[3].memories)

  return (
    <div>
      <NavBar 
      setUser={setUser} 
      />
      Memories
      <CreateMemoryFrom />
    </div>
  )
}

export default Memories