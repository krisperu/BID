import React, { useState } from 'react'
import Detail from './Detail'

function Dream({ dream, details, setDetails }) {
    const [showDetail, setShowDetail] = useState(false)
    
  function handleShowDetail(e, showDetail) {
    e.stopPropagation()
    setShowDetail(!showDetail)
  }
  const detailObj = details.map((detail) => 
    <Detail key={detail.id} detail={detail}/>
  )
  // console.log("inside dream comp:", details)

  // const test = dream.details[0]

  // function handleDetails(dream) {
  //   const exists = dream.details !== null
  //   if (exists){
  //     return console.log("This works")
  //   }
  //   return console.log("This doesn't work")
  // }



  return (
    <div>
      <li>{dream.dream} | Done: {dream.status ? "yes" : "no"}</li>
      <div>{detailObj}</div>
      <button className="ui mini circular icon button" onClick={(e) => handleShowDetail(e, showDetail)}><i aria-hidden="true" className="angle down icon"></i></button>
      {showDetail &&<div>{dream.dream}</div>}
    </div>
    
  )
}

export default Dream