import React, { useState } from 'react'
// import AddDetailForm from './AddDetailForm'

function CreateListForm({ lists, setLists, user }) {
  const [errors, setErrors] = useState([])
  const [formData, setFormData] = useState({
    title: '',
    user_id: user.id
  })

  const initialFormState = ({
    title: '',
    user_id: ''
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
      <div className="background">
        <div className="form-border center-content">
          <div className="ui grid">
            <form 
                className="ui two fields form center"
                onSubmit={(e) => handleSubmit(e)}
                >
              <label>Title:</label>
              <input
                name="title"
                type="text"
                id={FormData.title}
                placeholder="ex. Visit Italy"
                value={formData.title}
                onChange={(e) => handleChange(e)}
              />
              <br></br>
              <div>
                {errors.map((error) => (
                  <ul key={error} className="errors">- {error}</ul>
                ))}
              </div>
              <br></br>
              <button className="ui submit button center" type="submit">Create</button>
              <br></br>
              <br></br>
            </form>
          </div>
        </div>
        <br></br>
      </div>
    </div>
  )
}

export default CreateListForm