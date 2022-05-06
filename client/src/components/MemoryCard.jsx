import React from 'react'

function MemoryCard({ memory, imgOne="https://images.pexels.com/photos/1368382/pexels-photo-1368382.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" }) {
  return (
    <div>
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