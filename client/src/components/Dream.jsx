import React, { useState } from 'react'
import Detail from './Detail'
import AddDetailForm from './AddDetailForm'
import EditDream from './EditDream'

function Dream({ dream, details, setDetails, done, dreams, setDreams }) {
    const [showDetail, setShowDetail] = useState(false)
    const [checked, setChecked] = useState(done)
    const [showAddDetail, setShowAddDetail] = useState(false)
    const [showEditForm, setShowEditForm] = useState(false)

  function handleShowDetail(e, showDetail) {
    e.stopPropagation()
    setShowDetail(!showDetail)
  }

  function handleShowAddDetail(e, showAddDetail) {
    e.stopPropagation()
    setShowAddDetail(!showAddDetail)
  }

  function handleShowEditForm(showEditForm){
    setShowEditForm(!showEditForm)
  }

  const detailObj = dream.details?.map((detail) => 
    <Detail key={detail.id} detail={detail}/>
  )

  function handleCheckmark(){
    const newStatus = {
      status: !checked
    }
    fetch(`/dreams/${dream.id}`, {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newStatus)
    }).then(() => setChecked(!checked))
  }

  return (
    <div>
      <button className="ui mini right floated circular basic icon button" onClick={(e) => handleShowDetail(e, showDetail)}><i aria-hidden="true" className="angle down icon"></i></button>
      <form className="dreamTitle">
        <label className={checked ? "true" : "false"}>{dream.dream}
        <input 
          type="checkbox"
          checked={checked}
          value={checked} 
          onChange={handleCheckmark} />
        <span className="checkmark"></span>
      </label>
      </form>
      
      {showDetail &&
        <div>{detailObj}
        <button className="ui mini floated circular basic icon button" onClick={(e) => handleShowAddDetail(e, showAddDetail)}><i aria-hidden="true" className="add icon"></i></button>
        <button className="ui mini floated circular basic icon button" onClick={(e) => handleShowEditForm(showEditForm)}><i aria-hidden="true" className="pencil alternate icon"></i></button>
          {showAddDetail &&<div>
            <AddDetailForm 
              dream={dream} 
              details={details} 
              setDetails={setDetails}
            />
          </div>}
          {showEditForm &&<div>
            <EditDream 
              dream={dream} 
              dreams={dreams}
              setDreams={setDreams}
            />
          </div>}
          <br></br>
      </div>}
      
    </div>
    
  )
}

export default Dream