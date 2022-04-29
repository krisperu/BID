import React, { useState } from 'react'
import EditList from './EditList'
import Dream from './Dream'
import AddDreamForm from './AddDreamForm'

function ListCard({ list, lists, setLists, onUpdateListTitle, dreams, setDreams }) {
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
  <Dream key={dream.id} dream={dream}/>
  )
  

  return (
    <div key={list.id} className="card">
      <div className="title">
        <div>
          <h4>{list.title}</h4>
        </div>
        <button className="ui mini circular icon button"  onClick={(e) => handleEditForm(e, showEditForm)}><i aria-hidden="true" className="pencil alternate icon"></i></button>
        <button className="ui mini circular icon button" onClick={(e) => deleteList(list.id)}><i aria-hidden="true" className="close link icon"></i></button>
        {showEditForm && <EditList list={list} onUpdateListTitle={onUpdateListTitle}/>}
      </div>
      <br></br>
          <div>{dream}</div>
          <button onClick={(e) => handleAddDreamForm(e, showAddDreamForm)} className="ui icon left labeled mini button" ><i aria-hidden="true" className="add icon" ></i>Add New Dream</button>
          <br></br>
          <br></br>
          {showAddDreamForm &&<AddDreamForm list={list} dreams={dreams} setDreams={setDreams}/>}
      
    </div>
  )
}

export default ListCard