import React, { useState } from 'react'
import Detail from './Detail'

function Dream({ dream, details, setDetails }) {
    const [showDetail, setShowDetail] = useState(false)
    
  function handleShowDetail(e, showDetail) {
    e.stopPropagation()
    setShowDetail(!showDetail)
  }
  const detailObj = dream.details?.map((detail) => 
    <Detail key={detail.id} detail={detail}/>
  )

  return (
    <div>
      <li>{dream.dream} | Done: {dream.status ? "yes" : "no"}</li>
        <label className="container">{dream.dream}
          <input type="checkbox" checked="checked" />
          <span class="checkmark"></span>
        </label>
      <button className="ui mini circular icon button" onClick={(e) => handleShowDetail(e, showDetail)}><i aria-hidden="true" className="angle down icon"></i></button>
      {showDetail &&<div>{detailObj}</div>}
    </div>
    
  )
}

export default Dream
