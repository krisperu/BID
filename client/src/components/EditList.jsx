import React, { useState } from 'react'
import { useHistory } from "react-router-dom";

function EditList({ list }) {
    let history = useHistory();
    const [listFormData, setListFormData] = useState({title: list.title})
  
    function handleChange(e) {
      setListFormData({
        ...listFormData,
        [e.target.name]: e.target.value,
      });
    }
    console.log(list.id)
  
    function handleSubmit(e) {
      e.preventDefault();
  
      fetch(`/lists/${list.id}`, { 
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(listFormData.title)
      })
      history.push("/")
    }
  
  return (
    <form className="ui form" onSubmit={(e) => handleSubmit(e)}> 
    <div className="form-row">
        <div className="form-group col-5">
            <label>Title</label>
            <input 
                name="title" 
                type="text"
                id={FormData.title}
                value={listFormData.title}
                onChange={(e) => handleChange(e)}
            />
        </div>
    </div>
    <button className="ui submit green button center" type="submit">Submit</button>
</form>
  )
}

export default EditList