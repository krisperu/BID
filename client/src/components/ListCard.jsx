import React, { useState } from 'react'
import EditList from './EditList'
import Dream from './Dream'
import AddDreamForm from './AddDreamForm'
import { Button, Icon, Popup } from 'semantic-ui-react'

function ListCard({ list, lists, setLists, dreams, setDreams, details, setDetails, onUpdateListTitle }) {
  const [showEditForm, setShowEditForm] = useState(false)
  const [showAddDreamForm, setShowAddDreamForm] = useState(false)
  
  const deleteList = (id) => {
    fetch(`/lists/${id}`, {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        setLists(lists.filter((list) => list.id !== id));
      }
    });
  }
  
  function handleSendClick(){
    const time = new Date(Date.now()).toISOString()
    const updatedList = {
      schedule_send: time
    }
    fetch(`/sendlist/${list.id}`, {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updatedList)
    })
    .then(r => r.json())
    alert('Email sent 💌');
  }
  
  function handleEditForm(e, showEditForm){
    e.stopPropagation()
    setShowEditForm(!showEditForm)
  }

  function handleAddDreamForm(e, showAddDreamForm){
    e.stopPropagation()
    setShowAddDreamForm(!showAddDreamForm)
  }

  const dream = list.dreams.map((dream) => 
  <Dream
    key={dream.id} 
    dream={dream} 
    details={details} 
    setDetails={setDetails} 
    done={dream.status} 
    dreams={dreams} 
    setDreams={setDreams}
    lists={lists}
    setLists={setLists}
    list={list}
    />
  )

  return (
    <div key={list.id} className="card">
      <div className="ui centered card">
        <div className="content" id="card-top">
          <Popup
            on='click' 
            pinned 
            position='top center' 
            trigger={<Button floated='right' 
            circular
            icon='close' 
            basic 
            size='mini'
          />}>
            <Icon name='hand paper outline' color='red' size='big'/>
            <p>
              Are you sure you want to delete this list?
            </p>
            <Button basic color='red' size='mini' onClick={() => deleteList(list.id)}>
              Delete
            </Button>
          </Popup>
          <Popup 
            content='Edit List' 
            mouseEnterDelay={500} 
            mouseLeaveDelay={500} 
            trigger={
              <button 
                className="ui mini right floated circular basic icon button"  
                onClick={(e) => handleEditForm(e, showEditForm)}
              >
                <i aria-hidden="true" className="pencil alternate icon"></i>
              </button>} 
          />
          <Popup 
            content='Email List' 
            mouseEnterDelay={500} 
            mouseLeaveDelay={500} 
            trigger={
              <button 
                className="ui mini right floated circular basic icon button"  
                onClick={handleSendClick}
              >
                  <i aria-hidden="true" className="envelope outline icon"></i>
              </button>} 
          />
        <div className="header">{list.title}</div>
        {/* <br></br> */}
          {showEditForm && <EditList list={list} lists={lists} setLists={setLists} onUpdateListTitle={onUpdateListTitle}/>}
      </div>
        <div className="content" id="list-dreams">{dream}</div>
        <div className="extra content" id="add-dreams">
          <div className="ui buttons">
            <button 
              onClick={(e) => handleAddDreamForm(e, showAddDreamForm)} 
              className="ui icon left labeled basic grey mini button" >
                <i aria-hidden="true" className="add icon" ></i>
              Add New Dream
            </button>
          </div>
            {showAddDreamForm &&<AddDreamForm list={list} dreams={dreams} setDreams={setDreams} lists={lists} setLists={setLists}/>}
        </div>
      </div>
      <br></br>
    </div>
  )
}

export default ListCard
