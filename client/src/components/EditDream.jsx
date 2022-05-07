import React, { useState } from 'react'
import { useHistory } from "react-router-dom";

function EditDream({ dream, dreams, setDreams }) {
    let hisotry = useHistory()
    const [errors, setErrors] = useState([])
    const [dreamFormData, setDreamFormData] = useState({
        dream: dream.dream
    })

function handleChange(e) {
    setDreamFormData({
        ...dreamFormData,
        [e.target.name]: e.target.value,
    })
}

function handleSubmit(){
    fetch(`/dreams/${dream.id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dreamFormData)
    })
    .then((r) => {
        if (r.ok) {
            r.json().then((dreamItm) => setDreamFormData(dreamItm));
        } else {
            r.json().then((err) => setErrors(err.errors));
          }
        })
    hisotry.push("/")
}

const handleDelete = (id) => {
    fetch(`dreams/${id}`, {
        method: "DELETE",
    }).then((r) => {
        if (r.ok) {
            setDreams(dreams.filter((dreamObj) => dreamObj.id !== id))
        }
    })
}

return (
<div className="center">
    <form className="ui form" onSubmit={handleSubmit}> 
    <div className="form-row">
        <div className="form">
            <label>Dream</label>
            <input
                name="dream"
                type="text"
                id={FormData.dream}
                placeholder="ex. Visit Italy"
                value={dreamFormData.dream}
                onChange={(e) => handleChange(e)}
            />
        </div>
    </div>
    {/* <div className="form-row">
        <div className="form">
            <label>Finish By</label>
            <input 🔥
                name="due"
                type="date"
                id={FormData.due}
                value={dreamFormData.due}
                onChange={(e) => handleChange(e)}
            />
        </div>
    </div> */}
    <div>
        {errors.map((error) => (
        <ul className="errors">・ {error}</ul>
        ))}
    </div>
    <button className="ui submit green basic button center" type="submit">Submit</button>
    <div><button className="ui submit red basic small button center" id="del-btn" onClick={(e) => handleDelete(dream.id)}>Delete Dream</button></div>
    </form>
</div>
)
}

export default EditDream