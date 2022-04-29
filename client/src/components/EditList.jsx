import React, { useState } from 'react'
import { useHistory } from "react-router-dom";

function EditList({ list, onUpdateListTitle }) {
    let history = useHistory();
    const [listFormData, setListFormData] = useState({title: list.title})
  
    function handleChange(e) {
      setListFormData({
        ...listFormData,
        [e.target.name]: e.target.value,
      });
    }
  
    function handleSubmit(e) {
      e.preventDefault();
  
      fetch(`/lists/${list.id}`, { 
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(listFormData)
      })
      history.push("/")
      // .then(r => r.json())
      // .then(updatesList => {
      //   onUpdateListTitle(updatesList)
      // })
    }
  
  return (
    <form className="ui form" onSubmit={(e) => handleSubmit(e)}> 
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
    <button className="ui submit button center" type="submit">Submit</button>
</form>
  )
}

export default EditList