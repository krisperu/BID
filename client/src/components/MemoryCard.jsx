import React, { useState } from 'react'
import EditMemory from './EditMemory'

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
function MemoryCard({ memory, dream, rating, user, dreams, setCompletedDreams }) {
    const [showEditForm, setShowEditForm] = useState(false)
    const emojis = emojiRating(rating)

    function handleEditForm(showEditForm){
        setShowEditForm(!showEditForm)
    }
 
return (
<div className="memory_obj">
    <h2>{dream.dream}</h2>
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
        <button className="ui mini right floated circular basic icon button" onClick={(e) => handleEditForm(showEditForm)}><i aria-hidden="true" className="pencil alternate icon"></i></button>
        <h3 className="">{memory.title}</h3>
        <div className="description">
            <div>Rating: <div className="emojis">{emojis}</div></div>
            <p>Notes: {memory.desc}</p>
        </div>
        {showEditForm &&<EditMemory memory={memory} user={user} dreams={dreams} setCompletedDreams={setCompletedDreams} />}
    </div> 
    <hr className="solid"></hr>
    <br></br> 
</div>
)
}

export default MemoryCard