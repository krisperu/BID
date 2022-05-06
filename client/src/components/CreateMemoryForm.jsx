import React, { useState } from 'react'

function CreateMemoryForm({ user, dreams, setCompletedDreams }) {
  const [errors, setErrors] = useState([])
  const [memoryFormData, setMemoryFormData] = useState({
    title: '',
    desc: '',
    imgOne: '',
    imgTwo: '',
    imgThree: '',
    rating: '',
    user_id: user.id,
    dream_id: '',
  })

  const initialFormState = ({
    title: '',
    desc: '',
    imgOne: '',
    imgTwo: '',
    imgThree: '',
    rating: '',
    user_id: user.id,
    dream_id: ''
  })

  function onCreateMemory(newMem) {
    const updDreams = dreams.map(cd => {
      if (cd.id === newMem.dream.id) {
        return {...cd, memories: [...cd.memories, newMem]}
      } else {
        return cd
      }
  })
  setCompletedDreams(updDreams)
  }

  function handleSubmit(e){
    e.preventDefault()
    setErrors([])
    
    const newMemory = {
      title: memoryFormData.title,
      desc: memoryFormData.desc,
      img_one: memoryFormData.imgOne ? memoryFormData.imgOne : "https://picsum.photos/400/500",
      img_two: memoryFormData.imgTwo ? memoryFormData.imgTwo : "https://picsum.photos/300/175",
      img_three: memoryFormData.imgThree ? memoryFormData.imgThree : "https://picsum.photos/325/190",
      rating: memoryFormData.rating,
      user_id: memoryFormData.user_id,
      dream_id: parseInt(memoryFormData.dream_id)
    }

    fetch(`memories`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newMemory)
    })
    .then((r) => {
      if (r.ok) {
        r.json().then((memory) => onCreateMemory(memory));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    })
    .then(setMemoryFormData(initialFormState));
  }

  function handleChange(e) {
    setMemoryFormData({
      ...memoryFormData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="center">
      <form className="ui form" onSubmit={handleSubmit}> 
        <div className="form-row">
            <div className="form">
                <label>Title  *</label>
                <input
                  name="title"
                  type="text"
                  placeholder="ex. Trip to Italy"
                  id={FormData.title}
                  value={memoryFormData.title}
                  onChange={(e) => handleChange(e)}
                />
            </div>
        </div>
        <div className="form-row">
            <div className="form">
                <label>Notes</label>
                <textarea
                  name="desc"
                  type="text"
                  id={FormData.desc}
                  value={memoryFormData.desc}
                  onChange={(e) => handleChange(e)}
                />
            </div>
        </div>
        <div className="form-row">
            <div className="form">
                <label>Vertical Image</label>
                <input
                  name="imgOne"
                  type="text"
                  id={FormData.img_one}
                  defaultValue="https://images.pexels.com/photos/1368382/pexels-photo-1368382.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  value={memoryFormData.imgOne}
                  onChange={(e) => handleChange(e)}
                />
            </div>
        </div>
        <div className="form-row">
            <div className="form">
                <label>First Horizontal Image</label>
                <input
                  name="imgTwo"
                  type="text"
                  id={FormData.imgTwo}
                  value={memoryFormData.imgTwo}
                  onChange={(e) => handleChange(e)}
                />
            </div>
        </div>
        <div className="form-row">
            <div className="form">
                <label>Second Horizontal Image</label>
                <input
                  name="imgThree"
                  type="text"
                  id={FormData.imgThree}
                  value={memoryFormData.imgThree}
                  onChange={(e) => handleChange(e)}
                />
            </div>
        </div>
        <div className="form-row">
            <div className="form">
                <label>Rating *</label>
                <input
                  name="rating"
                  type="number"
                  placeholder="1-5"
                  id={FormData.rating}
                  value={memoryFormData.rating}
                  onChange={(e) => handleChange(e)}
                />
            </div>
        </div>
        <div className="form-row">
          <div className="form">
                <label>Dream *</label>
                <select
                  name="dream_id"
                  id={FormData.dream_id}
                  value={memoryFormData.dream_id}
                  onChange={(e) => handleChange(e)}
                >
                  <option value="">Select a Category</option>
                  {dreams.map((dreamItem) => 
                    <option key={dreamItem.id} value={dreamItem.id}>{dreamItem.dream}</option>
                  )}
                </select>
            </div>
        </div>   
        <div className="form-row">
          {errors.map((error) => (
            <ul key={error} className="errors">・ {error}</ul>
          ))}
        </div>
        <button className="ui submit grey basic button center" type="submit">Submit</button>
      </form>
    </div>
  )
}

export default CreateMemoryForm



