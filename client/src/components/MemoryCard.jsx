import React, { useState } from 'react'
import EditMemory from './EditMemory'
import { Button, Icon, Popup } from 'semantic-ui-react'
import { useHistory } from 'react-router-dom'

function emojiRating(rating) {
    switch (rating) {
        case 1:
            return "♥︎";
        case 2:
            return "♥︎♥︎";
        case 3:
            return "♥︎♥︎♥︎"
        case 4:
            return "♥︎♥︎♥︎♥︎";
        default:
            return "♥︎♥︎♥︎♥︎♥︎"
    }
}
function MemoryCard({ memory, dream, rating, setCompletedDreams, dreams }) {
    let history = useHistory()
    const [showEditForm, setShowEditForm] = useState(false)
    const emojis = emojiRating(rating)

    function handleEditForm(showEditForm){
        setShowEditForm(!showEditForm)
    }

    function onDelete(mem) {
        // const delMem = dreams.map((cd) => {
            // if (cd.id === mem.dream.id) {
                // return { ...cd, memories: cd.memories?.map((m) => m.id === mem.id ? mem.filter((delMem) => delMem.id !== mem) : mem)}
                console.log(mem)
            // } 
            // else {
            //     // return cd
            // }
        // })

        // setCompletedDreams(delMem)
    }

    const handleDelete = (id) => {
        fetch(`/memories/${id}`, {
            method: "DELETE",
        })
        .then((r) => {
            if (r.ok) {
                setCompletedDreams(dream.memories.filter((mem) => mem.id !== id))
                // setCompletedDreams(dreams)
            }
        })
        history.push("/")
    }

    // console.log(dreams)
 
return (
<div className="memory_obj">
    <div className="ui divided two column grid">
        <div className="stretched row">
        <div className="column">
            <div className="ui segment">
                <img className="ui fluid image" src={memory.img_one} alt={memory.id} />
            </div>
        </div>
        <div className="column">
            <div className="ui segment"> 
                <img className="ui fluid image" src={memory.img_two} alt={memory.id}/>
            </div>
            <div className="ui segment">
                <img className="ui fluid image" src={memory.img_three} alt={memory.id}/>
            </div>
        </div>
    </div>
    </div>
    <br></br>     
    <div className="mem-desc">
        <Popup
            on='click' 
            pinned 
            position='top right' 
            trigger={<Button floated='right' 
            circular
            icon='close' 
            basic 
            size='mini'
            />}>
            <Icon name='hand paper outline' color='red' size='big'/>
            <p>
              Are you sure you want to delete this memory?
            </p>
            <Button basic color='red' size='mini' onClick={() => handleDelete(memory.id)}>
              Delete
            </Button>
        </Popup>
        <button
            className="ui mini right floated circular basic icon button"
            onClick={(e) => handleEditForm(showEditForm)}>
                <i aria-hidden="true" className="pencil alternate icon"></i>
        </button>
        <br></br>
        <h2 className="mem-title">{memory.title}</h2>
        <div><b>Completed Dream:</b></div>
        <div>{dream.dream}</div>
        <div className="description">
            <div><b>Rating:</b><div className="emojis">{emojis}</div></div>
            <b>Notes:</b>
            <p>{memory.desc}</p>
            <br></br>
        </div>
        {showEditForm &&<EditMemory memory={memory} dream={dream} dreams={dreams} setCompletedDreams={setCompletedDreams}/>}
    </div> 
    <hr className="solid"></hr>
    <br></br> 
</div>
)
}

export default MemoryCard