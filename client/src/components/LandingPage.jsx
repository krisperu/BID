import React, { useState, useEffect } from 'react'
import CreateListForm from './CreateListForm'
import ListCard from './ListCard'

function LandingPage({ user }) {
  const [lists, setLists] = useState([])
  const [showCreateForm, setShowCreateForm] = useState(false)
  const [loading, setLoading] = useState(false)

  function handleCreateForm(showCreateForm) {
    setShowCreateForm(!showCreateForm)
  }

  //Fetching all Lists
  useEffect(() => {
    setLoading(true)
    fetch("/lists")
    .then((r) => r.json())
    .then(setLists)
    .finally(() => {
      setLoading(false)
      })
  }, [])

  function handleUpdateListTitle(updatedList) {
    const mapList = lists.map((ml) => ml.id === updatedList.id ? updatedList : ml)
    setLists(mapList)
  }
  
  const listObj = lists.map((list) => 
  <ListCard 
    key={list.id} 
    list={list}
    lists={lists} 
    setLists={setLists}
    onUpdateListTitle={handleUpdateListTitle}
  />
  )

  return (
    <div>
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
        <div className='footer'>
          <div>BID | //Flatiron School</div>   
          <div>Created By: Kristina Peru | <a href="https://github.com/krisperu/BID">GitHub</a> | <a href="https://www.linkedin.com/in/kristina-peru/">Contact Me</a></div>
        </div>
    </div>
  )
}

export default LandingPage