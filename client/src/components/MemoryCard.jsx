import React from 'react'

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
function MemoryCard({ memory, imgOne="https://images.pexels.com/photos/1368382/pexels-photo-1368382.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", dream, rating }) {
    const emojis = emojiRating(rating)
 
return (
<div className="memory_obj">
    <h2>{dream.dream}</h2>
    <div className="ui divided two column grid">
        <div className="stretched row">
        <div className="column">
            <div className="ui segment">
                <img className="ui fluid image" src={imgOne} alt={memory.id} />
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
        <h3 className="">{memory.title}</h3>
        <div className="description">
            <div>Rating: <div className="emojis">{emojis}</div></div>
            <p>Notes: {memory.desc}</p>
        </div>
    </div> 
    <hr className="solid"></hr>
    <br></br> 
</div>
)
}

export default MemoryCard