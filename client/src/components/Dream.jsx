import React, { useState } from 'react'
import Detail from './Detail'
import AddDetailForm from './AddDetailForm'
import EditDream from './EditDream'
import { Popup } from 'semantic-ui-react'

function Dream({ dream, done, lists, setLists }) {
    const [showDetail, setShowDetail] = useState(false)
    const [checked, setChecked] = useState(done)
    const [showAddDetail, setShowAddDetail] = useState(false)
    const [showEditForm, setShowEditForm] = useState(false)
    
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

      const style = {
        borderRadius: 0,
        opacity: 0.7,
        background: '#767676',
        color: 'white'
      }

  return (
    <div>
      <Popup 
            content='Edit Dream'
            size='mini' 
            style={style}
            mouseEnterDelay={800}  
            trigger={
              <button
                className="ui mini right floated circular basic icon button"
                onClick={(e) => handleShowEditForm(showEditForm)}>
                  <i aria-hidden="true" className="pencil alternate icon"></i>
              </button>} 
      />
      <Popup 
            content='See Dream Details' 
            size='mini'
            style={style}
            mouseEnterDelay={800} 
            trigger={
              <button 
                className="ui mini right floated circular basic icon button"
                onClick={(e) => handleShowDetail(e, showDetail)}>
                  <i aria-hidden="true" className="angle down icon"></i>
              </button>} 
      />
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
      {showEditForm &&<div>
            <EditDream 
              dream={dream} 
              lists={lists}
              setLists={setLists}
            />
          </div>}
      {showDetail &&
        <div>
          {detailObj}
          <Popup 
              content='Add Detail' 
              size='mini'
              style={style}
              mouseEnterDelay={800}  
              trigger={
                <button
                  className="ui mini floated circular basic icon button"
                  onClick={(e) => handleShowAddDetail(e, showAddDetail)}>
                    <i aria-hidden="true" className="add icon"></i>
                </button>} 
            />
          {showAddDetail &&<div>
            <AddDetailForm 
              dream={dream} 
              lists={lists}
              setLists={setLists}
            />
        </div>}
        <br></br>
      </div>}
    </div>
  )
}

export default Dream