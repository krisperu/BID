import React, { useState } from 'react'
import { useHistory } from "react-router-dom";

function EditList({ list, setLists }) {
    let history = useHistory();
    const [listFormData, setListFormData] = useState({title: list.title})
  
    function handleChange(e) {
      setListFormData({
        ...listFormData,
        [e.target.name]: e.target.value,
      });
    }
  
    function handleSubmit() {
      fetch(`/lists/${list.id}`, { 
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(listFormData)
      })
      history.push("/")
    }
  
  return (
    <form className="ui form" onSubmit={handleSubmit}> 
      <div className="form-row">
          <div className="form-group col-5">
              <label>List Title</label>
              <input 
                  name="title" 
                  type="text"
                  id={FormData.title}
                  value={listFormData.title}
                  onChange={(e) => handleChange(e)}
              />
          </div>
      </div>
      <button className="ui submit green basic button center" type="submit">Submit</button>
    </form>
  )
}

export default EditList