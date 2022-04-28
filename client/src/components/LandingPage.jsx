import React, { useState, useEffect } from 'react'
import NavBar from './NavBar'
import CreateListForm from './CreateListForm'
import ListCard from './ListCard'

function LandingPage({ setIsAuthenticated, setUser, user }) {
  const [lists, setLists] = useState([])
  const [showCreateForm, setShowCreateForm] = useState(false)

  function handleCreateForm(showCreateForm) {
    // e.stopPropagation()
    setShowCreateForm(!showCreateForm)
  }

  useEffect(() => {
    fetch("/lists")
    .then((r) => r.json())
    .then(setLists)
  }, [])
  
  const listObj = lists.map((list) => 
  <ListCard 
  key={list.id} 
  list={list} lists={lists} 
  setLists={setLists}
  // onUpdateListTitle={handleUpdateListTitle}
  />
  )

  // function handleUpdateListTitle(updatedListTitle) {
  //   setLists(updatedListTitle)
  // }

  return (
    <div>
        <NavBar 
          setUser={setUser} 
          setIsAuthenticated={setIsAuthenticated}
        />
        <br></br>
        <div>{listObj}</div>
        <br></br>
        <div>
          <button onClick={() => handleCreateForm(showCreateForm)} className="ui icon left labeled button" ><i aria-hidden="true" className="add icon" ></i>Add New List</button>
        </div>
        
        <br></br>
        <div>
          {showCreateForm && <CreateListForm user={user} lists={lists} setLists={setLists}/>}
        </div> 
    </div>
  )
}

export default LandingPage

// onClick={(e) => handleCreateForm(e, showCreateForm)