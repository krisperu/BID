import React, { useState } from 'react'

function AddDreamForm({ list, dreams, setDreams }) {
    const [errors, setErrors] = useState([])
    const [dreamFormData, setDreamFormData] = useState({
        dream: '',
        category: '',
        status: '',
        due: '',
        list_id: list.id
    })

    const initialFormState = ({
        dream: '',
        category: '',
        status: '',
        due: '',
        list_id: ''
    })

    function onCreateDream(newDream) {
        setDreams([...dreams, newDream])
    }

    function handleSubmit(e){
        e.preventDefault()
        setErrors([])

        const newDream = {
            dream: dreamFormData.dream,
            category: dreamFormData.category,
            status: dreamFormData.status,
            due: dreamFormData.due,
            list_id: dreamFormData.list_id
        }

        fetch(`/dreams`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newDream),
        })
        .then((r) => {
            if (r.ok) {
              r.json().then((dream) => onCreateDream(dream));
            } else {
              r.json().then((err) => setErrors(err.errors));
            }
          })
          .then(setDreamFormData(initialFormState));
    }

    function handleChange(e) {
        setDreamFormData({
            ...dreamFormData,
            [e.target.name]: e.target.value,
        })
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
              <label>Dream:</label>
              <input
                name="dream"
                type="text"
                id={FormData.dream}
                placeholder="ex. Visit Italy"
                value={dreamFormData.dream}
                onChange={(e) => handleChange(e)}
              />
              <label>Category:</label>
              <select
                name="category"
                // type="text"
                id={FormData.category}
                // placeholder="ex. Visit Italy"
                value={dreamFormData.category}
                onChange={(e) => handleChange(e)}
              >
                <option value="">Select a Category</option>
                <option value="1">Test 1</option>
                <option value="2">Test 2</option>
              </select>
              
              <label>Finish By:</label>
              <input
                name="due"
                type="date"
                id={FormData.due}
                value={dreamFormData.due}
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

export default AddDreamForm