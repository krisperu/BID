import React from 'react'

function ListCard({ list, lists, setLists }) {
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
      <button class="ui mini circular icon button" onClick={(e) => deleteList(list.id)}><i aria-hidden="true" className="close link icon"></i></button>
    </div>
  </div>
  )
}

export default ListCard