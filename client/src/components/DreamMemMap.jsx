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
    />
)

function handleCreateMemoryForm(showCreateMemoryForm) {
    setShowCreateMemoryForm(!showCreateMemoryForm)
}

return (
<div>
    {dreamObj}
    <br></br>
    <button onClick={() => handleCreateMemoryForm(showCreateMemoryForm)} className="ui icon left labeled basic button" ><i aria-hidden="true" className="add icon" ></i>Add Memory</button>
    <br></br>
    {showCreateMemoryForm&& <CreateMemoryForm user={user} dreams={completedDreams} setCompletedDreams={setCompletedDreams}/>}
    <br></br>
</div>
)
}

export default DreamMemMap