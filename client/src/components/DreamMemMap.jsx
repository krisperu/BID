import React, { useState, useEffect } from 'react'
import Memories from './Memories'
import CreateMemoryForm from './CreateMemoryForm'

function DreamMemMap({ user }) {
    const [completedDreams, setCompletedDreams] = useState([])
    const [showCreateMemoryForm, setShowCreateMemoryForm] = useState(false)
    const [loading, setLoading] = useState(false)

     //Fetch Completed Dreams
    useEffect(() => {
        setLoading(true)
        fetch("/completeddreams")
        .then((r) => r.json())
        .then(setCompletedDreams)
        .finally(() => {
        setLoading(false)
        })
    }, [])

    if (loading) {
    return <p>Data is loading...</p>;
    }

const dreamObj = completedDreams?.map(filteredDream =>
<Memories 
    key={filteredDream.id}
    dream={filteredDream}
    user={user}
    dreams={completedDreams}
    setCompletedDreams={setCompletedDreams}
    />
)

function handleCreateMemoryForm(showCreateMemoryForm) {
    setShowCreateMemoryForm(!showCreateMemoryForm)
}

return (
<div>
    <br></br>
    <button onClick={() => handleCreateMemoryForm(showCreateMemoryForm)} className="ui icon left labeled basic button" ><i aria-hidden="true" className="add icon" ></i>Add Memory</button>
    <h3>Achieved Dreams: {completedDreams.length}</h3>
    {showCreateMemoryForm&& <CreateMemoryForm user={user} dreams={completedDreams} setCompletedDreams={setCompletedDreams}/>}
    {dreamObj}
    <div className='footer'>
          <div>BID | //Flatiron School</div>   
          <div>Created By: Kristina Peru | <a href="https://github.com/krisperu/BID">GitHub</a> | <a href="https://www.linkedin.com/in/kristina-peru-205557189/">Contact Me</a></div>
        </div>
</div>
)
}

export default DreamMemMap