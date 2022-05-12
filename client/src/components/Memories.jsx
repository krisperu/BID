import React from 'react'
import MemoryCard from './MemoryCard'

function Memories({ dream, dreams, user, setCompletedDreams }) {


  const memoryObj = dream.memories?.map((memory) =>
    <MemoryCard 
      key={memory.id} 
      memory={memory} 
      dream={dream} 
      rating={memory.rating}
      user={user}
      dreams={dreams}
      setCompletedDreams={setCompletedDreams}
      />
  )

  return (
    <div>
      <br></br>
      <div>
        {memoryObj}
      </div>
    </div>
  )
}

export default Memories