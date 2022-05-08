import React from 'react'

function Detail({ detail }) {
  return (
    <div>
      <li>{detail.details}</li>
      <img src={detail.image} alt={detail.detail}/>
      <br></br>
    </div>
  )
}

export default Detail