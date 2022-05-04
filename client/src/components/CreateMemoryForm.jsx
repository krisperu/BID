import React, { useState } from 'react'

function CreateMemoryForm({ user, dreams, memories, setMemories }) {
  const [errors, setErrors] = useState([])
  const [memoryFormData, setMemoryFormData] = useState({
    title: '',
    desc: '',
    img_one: '',
    img_two: '',
    img_three: '',
    rating: '',
    user_id: user.id,
    dream_id: '',
  })

  const initialFormState = ({
    title: '',
    desc: '',
    img_one: '',
    img_two: '',
    img_three: '',
    rating: '',
    user_id: user.id,
    dream_id: ''
  })

  function onCreateMemory(newMemory) {
    setMemories([...memories, newMemory])
  }

  function handleSubmit(){
    setErrors([])

    const newMemory = {
      title: memoryFormData.title,
      desc: memoryFormData.desc,
      img_one: memoryFormData.img_one,
      img_two: memoryFormData.img_two,
      img_three: memoryFormData.img_three,
      rating: memoryFormData.rating,
      user_id: memoryFormData.user_id,
      dream_id: memoryFormData.dream_id
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
                <label>Title</label>
                <input
                  name="title"
                  type="text"
                  id={FormData.title}
                  placeholder="ex. Trip to Italy"
                  value={memoryFormData.title}
                  onChange={(e) => handleChange(e)}
                />
            </div>
        </div>
        <div className="form-row">
            <div className="form">
                <label>Notes</label>
                <input
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
                  name="img_one"
                  type="text"
                  id={FormData.img_one}
                  value={memoryFormData.img_one}
                  onChange={(e) => handleChange(e)}
                />
            </div>
        </div>
        <div className="form-row">
            <div className="form">
                <label>First Horizontal Image</label>
                <input
                  name="img_two"
                  type="text"
                  id={FormData.img_two}
                  value={memoryFormData.img_two}
                  onChange={(e) => handleChange(e)}
                />
            </div>
        </div>
        <div className="form-row">
            <div className="form">
                <label>Second Horizontal Image</label>
                <input
                  name="img_three"
                  type="text"
                  id={FormData.img_three}
                  value={memoryFormData.img_three}
                  onChange={(e) => handleChange(e)}
                />
            </div>
        </div>
        <div className="form-row">
            <div className="form">
                <label>Rating</label>
                <input
                  name="rating"
                  type="integer"
                  id={FormData.rating}
                  value={memoryFormData.rating}
                  onChange={(e) => handleChange(e)}
                />
                <div className="ui star rating" role="radiogroup" tabindex="-1">
                  <i tabIndex="0" aria-checked="false" aria-posinset="1" aria-setsize="5" className="active icon" role="radio"></i>
                  <i tabIndex="0" aria-checked="false" aria-posinset="2" aria-setsize="5" className="active icon" role="radio"></i>
                  <i tabIndex="0" aria-checked="true" aria-posinset="3" aria-setsize="5" className="active icon" role="radio"></i>
                  <i tabIndex="0" aria-checked="false" aria-posinset="4" aria-setsize="5" className="icon" role="radio"></i>
                  <i tabIndex="0" aria-checked="false" aria-posinset="5" aria-setsize="5" className="icon" role="radio"></i>
                </div>
            </div>
        </div>
        <div className="form-row">
          <div className="form">
                <label>Dream</label>
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

