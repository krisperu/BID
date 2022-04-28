import React, { useState } from 'react'

function Dream({ dream }) {
    const [completed, setCompleted] = useState(false)
    // console.log("inside dream:", dream.status)
  return (
    <li>{dream.dream} done? {completed ? "yes" : "no" }</li>
  )
}

export default Dream