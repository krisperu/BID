import React, { useState } from 'react'

function CreateListForm({ lists, setLists, user }) {
  const [errors, setErrors] = useState([])
  const [formData, setFormData] = useState({
    title: '',
    user_id: user.id
  })

  const initialFormState = ({
    title: '',
    user_id: user.id
  })

  function onCreateList(newList) {
    setLists([...lists, newList])
  }

  function handleSubmit(e) {
    e.preventDefault()
    setErrors([]);

    const newList = {
      title: formData.title,
      user_id: formData.user_id
    }

    fetch(`/lists`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newList),
    })
    .then((r) => {
      if (r.ok) {
        r.json().then((list) => onCreateList(list));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    })
    .then(setFormData(initialFormState));
  }

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div className="center">
      <form className="ui form" onSubmit={(e) => handleSubmit(e)}> 
      <div className="form-row">
          <div className="six wide field">
              <label>Title</label>
              <input 
                  name="title" 
                  type="text"
                  placeholder="ex. Sport"
                  id={FormData.title}
                  value={formData.title}
                  onChange={(e) => handleChange(e)}
              />
          </div>
          <div>
            {errors.map((error) => (
              <ul key={error} className="errors">・ {error}</ul>
            ))}
          </div>
      </div>
      <button className="ui submit basic button center" type="submit">Submit</button>
      </form>
    </div>
  )
}

export default CreateListForm