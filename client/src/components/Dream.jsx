import React, { useState } from 'react'
import Detail from './Detail'
import AddDetailForm from './AddDetailForm'

function bool(done){
  switch (done) {
    case true:
      return "true";
    default:
      return "false";
  }
}


function Dream({ dream, details, setDetails, done }) {
    const [showDetail, setShowDetail] = useState(false)
    const [checked, setChecked] = useState(false)
    const [showAddDetail, setShowAddDetail] = useState(false)
    const thingy = bool(done)

  function handleShowDetail(e, showDetail) {
    e.stopPropagation()
    setShowDetail(!showDetail)
  }

  function handleShowAddDetail(e, showAddDetail) {
    e.stopPropagation()
    setShowAddDetail(!showAddDetail)
  }

  const detailObj = dream.details?.map((detail) => 
    <Detail key={detail.id} detail={detail}/>
  )

  function handleCheckmark(){
    const check = {
      status: !checked
    }
    fetch(`/dreams/${dream.id}`, {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(check)
    }).then(() => setChecked(!checked))
  }

  return (
    <div>
      <button className="ui mini right floated circular basic icon button" onClick={(e) => handleShowDetail(e, showDetail)}><i aria-hidden="true" className="angle down icon"></i></button>
      <form className="dreamTitle">
        <label className={thingy}>{dream.dream}
        <input type="checkbox" onChange={handleCheckmark} />
        <span className="checkmark"></span>
      </label>
      </form>
      
      {showDetail &&
        <div>{detailObj}
        <button className="ui mini floated circular basic icon button" onClick={(e) => handleShowAddDetail(e, showAddDetail)}><i aria-hidden="true" className="add icon"></i></button>
          {showAddDetail &&<div>
            <AddDetailForm 
              dream={dream} 
              details={details} 
              setDetails={setDetails}
            />
          </div>}
          <br></br>
      </div>}
      
    </div>
    
  )
}

export default Dream