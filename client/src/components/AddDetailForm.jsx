import React, { useState } from 'react'

function AddDetailForm({ dream, details, setDetails }) {
  const [errors, setErrors] = useState([])
  const [detailFormData, setDetailFormData] = useState({
    details: '', 
    image: '', 
    dream_id: dream.id
  })

  const initialFormState = ({
    details: '',
    image: '',
    dream_id: dream.id
  })

  function onCreateDetail(newDetail) {
    setDetails([...details, newDetail])
  }

  function handleSubmit() {
    setErrors([])

    const newDetail ={
      details: detailFormData.details,
      image: detailFormData.image,
      dream_id: detailFormData.dream_id
    }
    
    fetch(`details`, {
      method: 'POST',
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(newDetail),
    })
    .then((r) => {
      if (r.ok) {
        r.json().then((detail) => onCreateDetail(detail));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    })
    .then(setDetailFormData(initialFormState));
  }

  function handleChange(e) {
    setDetailFormData({
      ...detailFormData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div>
      <form className="ui form" onSubmit={handleSubmit}> 
        <div className="form-row">
            <div className="form-group col-5">
                <label>Detail</label>
                <input
                  name="details"
                  type="text"
                  id={FormData.details}
                  placeholder="ex. In Italy, have pizza"
                  value={detailFormData.details}
                  onChange={(e) => handleChange(e)}
                />
            </div>
        </div>
        <div className="form-row">
            {/* <div className="form">
                <label>Image</label>
                <input
                  name="image"
                  type="text"
                  id={FormData.image}
                  value={detailFormData.image}
                  onChange={(e) => handleChange(e)}
                />
            </div> */}
            {errors.map((error) => (
              <ul key={error} className="errors">・ {error}</ul>
            ))}
        </div>
        <button className="ui submit grey basic button center" type="submit">Submit</button>
      </form>
    </div>
  )
}

export default AddDetailForm