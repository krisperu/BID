import React from 'react'

function MemoryCard({ memory }) {
  return (
    <div className="ui divided three column grid">
    <div className="stretched row">
      <div className="column">
        <div className="ui segment">Vertical Photo: 
        {/* <img className="horizontal-img" src="https://picsum.photos/350/200" alt={memory.img_one} /> */}
        </div>
      </div>
      <div className="column">
        <div className="ui segment">Horizontal Photo 1: {memory.img_two}</div>
        <div className="ui segment">Horizontal Photo 2: {memory.img_three}</div>
      </div>
      <div className="column">
        <h2 className="ui segment">Title? {memory.title}</h2>
        <div className="ui segment">Description: {memory.desc}</div>
        <div className="ui segment">Rating: {memory.rating}</div>
      </div>
    </div>
  </div>
  )
}

export default MemoryCard