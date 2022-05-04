import React, { useState, useEffect } from 'react'
import NavBar from './NavBar'
import CreateListForm from './CreateListForm'
import ListCard from './ListCard'

function LandingPage({ setUser, user, dreams, setDreams }) {
  const [lists, setLists] = useState([])
  const [details, setDetails] = useState([])
  const [showCreateForm, setShowCreateForm] = useState(false)

  function handleCreateForm(showCreateForm) {
    setShowCreateForm(!showCreateForm)
  }

  //Fetching all Lists
  useEffect(() => {
    fetch("/lists")
    .then((r) => r.json())
    .then(setLists)
  }, [])

  //Fetching all Details
  useEffect(() => {
    fetch("/details")
    .then((r) => r.json())
    .then(setDetails)
  }, [])

  function handleUpdateListTitle(updatedListTitle) {
    setLists(updatedListTitle)
  }
  
  const listObj = user.lists.map((list) => 
  <ListCard 
  key={list.id} 
  list={list} lists={lists} 
  setLists={setLists}
  dreams={dreams}
  setDreams={setDreams}
  details={details}
  setDetails={setDetails}
  onUpdateListTitle={handleUpdateListTitle}
  />
  )

  // console.log(user.lists)

  return (
    <div>
        <NavBar 
          setUser={setUser} 
        />
        <br></br>
        <div>
          <button onClick={() => handleCreateForm(showCreateForm)} className="ui icon left labeled basic button" ><i aria-hidden="true" className="add icon" ></i>Add New List</button>
        </div>
        <br></br>
        <div>
          {showCreateForm && <CreateListForm user={user} lists={lists} setLists={setLists}/>}
        <br></br>
        </div> 
        <div className="list">{listObj}</div>
        <br></br>
    </div>
  )
}

export default LandingPage