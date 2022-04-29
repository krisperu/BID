import React from 'react'

function Detail({ detail }) {
    console.log("inside detail comp:", detail.details)
    // console.log("i'm here")
  return (
    <div>{detail.details}</div>
  )
}

export default Detail