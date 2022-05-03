import React, { useState } from 'react'
import EditList from './EditList'
import Dream from './Dream'
import AddDreamForm from './AddDreamForm'

function ListCard({ list, lists, setLists, onUpdateListTitle, dreams, setDreams, details, setDetails }) {
  const [showEditForm, setShowEditForm] = useState(false)
  const [showAddDreamForm, setShowAddDreamForm] = useState(false)

  function handleEditForm(e, showEditForm){
    e.stopPropagation()
    setShowEditForm(!showEditForm)
  }

  function handleAddDreamForm(e, showAddDreamForm){
    e.stopPropagation()
    setShowAddDreamForm(!showAddDreamForm)
  }
 
  const deleteList = (id) => {
    fetch(`/lists/${id}`, {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        setLists(lists.filter((list) => list.id !== id));
      }
    });
  }
  const dream = list.dreams.map((dream) => 
  <Dream key={dream.id} dream={dream} details={details} setDetails={setDetails}/>
  )

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
  }
  // console.log(list)
  

  return (
    <div key={list.id} className="card">
      <div className="ui centered card">
        <div className="content">
          <button className="ui mini right floated circular basic icon button" onClick={(e) => deleteList(list.id)}><i aria-hidden="true" className="close link icon"></i></button>
          <button className="ui mini right floated circular basic icon button"  onClick={(e) => handleEditForm(e, showEditForm)}><i aria-hidden="true" className="pencil alternate icon"></i></button>
          <button className="ui mini right floated circular basic icon button"  onClick={handleSendClick}><i aria-hidden="true" className="mail outline icon"></i></button>
        <div className="header">{list.title}</div>
        <br></br>
          {showEditForm && <EditList list={list} onUpdateListTitle={onUpdateListTitle}/>}
        <div className="description">{dream}</div>
      </div>
        <div className="extra content">
          <div className="ui buttons">
            <button onClick={(e) => handleAddDreamForm(e, showAddDreamForm)} className="ui icon left labeled basic grey mini button" ><i aria-hidden="true" className="add icon" ></i>Add New Dream</button>
          </div>
            {showAddDreamForm &&<AddDreamForm list={list} dreams={dreams} setDreams={setDreams}/>}
        </div>
      </div>
      <br></br>
    </div>
  )
}

export default ListCard

 
