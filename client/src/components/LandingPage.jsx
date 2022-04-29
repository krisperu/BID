import React, { useState, useEffect } from 'react'
import NavBar from './NavBar'
import CreateListForm from './CreateListForm'
import ListCard from './ListCard'

function LandingPage({ setIsAuthenticated, setUser, user }) {
  const [lists, setLists] = useState([])
  const [dreams, setDreams] = useState([])
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

  //Fetching all Dreams
  useEffect(() => {
    fetch("/dreams")
    .then((r) => r.json())
    .then(setDreams)
  }, [])

  //Fetching all Details
  useEffect(() => {
    fetch("/details")
    .then((r) => r.json())
    .then(setDetails)
  }, [])

  // console.log(details)
  
  const listObj = lists.map((list) => 
  <ListCard 
  key={list.id} 
  list={list} lists={lists} 
  setLists={setLists}
  dreams={dreams}
  setDreams={setDreams}
  details={details}
  setDetails={setDetails}
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