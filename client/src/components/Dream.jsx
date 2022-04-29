import React, { useState } from 'react'

function Dream({ dream }) {
    const [completed, setCompleted] = useState(false)
    // console.log("inside dream:", dream.status)
  return (
    <div>
      <li>{dream.dream} | Done: {dream.status ? "yes" : "no"}</li>
    </div>
    
  )
}

export default Dream