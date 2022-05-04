import React from 'react'
import NavBar from './NavBar'
import MemoryCard from './MemoryCard'

function Memories({ setUser, user, dreams, dream,  }) {


  const memoryObj = dream.memories?.map((memory) =>
    <MemoryCard key={memory.id} memory={memory}/>
  )

  return (
    <div>
      <NavBar 
      setUser={setUser} 
      />
      <br></br>
      <div className="memory_obj">
        {memoryObj}
      </div>
      <br></br>
    </div>
  )
}

export default Memories