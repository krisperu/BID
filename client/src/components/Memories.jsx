import React from 'react'
import MemoryCard from './MemoryCard'

function Memories({ dream }) {


  const memoryObj = dream.memories?.map((memory) =>
    <MemoryCard key={memory.id} memory={memory} imgOne={memory.img_one} imgTwo={memory.img_two} imgThree={memory.img_three} dream={dream}/>
  )

  return (
    <div>
      <br></br>
      <div className="memory_obj">
        {memoryObj}
      </div>
      <br></br>
    </div>
  )
}

export default Memories