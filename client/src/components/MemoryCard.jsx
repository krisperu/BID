import React from 'react'

function MemoryCard({ memory }) {
  return (
    <div>
        <div className="ui divided two column grid">
            <div className="stretched row">
            <div className="column">
                <div className="ui segment">
                    <img className="vertical-img" src={memory.img_one} alt={memory.id} />
                </div>
            </div>
            <div className="column">
                <div className="ui segment"> 
                    <img className="horizontal-img" src={memory.img_two} alt={memory.id}/>
                </div>
                <div className="ui segment">
                    <img className="horizontal-img" src={memory.img_two} alt={memory.id}/>
                </div>
            </div>
        </div>
        </div>
        <br></br>     
        <div className="teddy">
            <h3 className="">{memory.title}</h3>
            <div className="description">
                <p>Rating: {memory.rating}</p>
                <p>Notes: {memory.desc}</p>
            </div>
        </div> 
        <hr className="solid"></hr>
        <br></br> 
    </div>
  )
}

export default MemoryCard