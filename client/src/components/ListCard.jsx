import React, { useState } from 'react'
import EditList from './EditList'

function ListCard({ list, lists, setLists }) {
  const [showEditForm, setShowEditForm] = useState(false)

  function handleEditForm(e, showEditForm){
    e.stopPropagation()
    setShowEditForm(!showEditForm)
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

  return (
    <div key={list.id}>
    <div className="container">
      <div className="card">
        <h4>{list.title}</h4>
      </div>
      <button className="ui mini circular icon button"  onClick={(e) => handleEditForm(e, showEditForm)}><i aria-hidden="true" className="pencil alternate icon"></i></button>
      <button className="ui mini circular icon button" onClick={(e) => deleteList(list.id)}><i aria-hidden="true" className="close link icon"></i></button>
    </div>
    {showEditForm && <EditList list={list}/>}
  </div>
  )
}

export default ListCard