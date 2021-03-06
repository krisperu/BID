import React, { useState } from 'react'

function EditMemory({ memory, dreams, setCompletedDreams }) {
    const [errors, setErrors] = useState([])
    const [memoryFormData, setMemoryFormData] = useState({
        title: memory.title,
        desc: memory.desc,
        img_one: memory.img_one,
        img_two: memory.img_two,
        img_three: memory.img_three,
        rating: memory.rating
    })

    function handleChange(e) {
        setMemoryFormData({
            ...memoryFormData,
            [e.target.name]: e.target.value
        })
    }

    function onEditMem(newMem){
        const newMemObj = dreams.map((cd) => {
            if (cd.id === newMem.dream.id) {
                return { ...cd, memories: cd.memories.map((mem) => mem.id === newMem.id ? newMem : mem)}
            } else {
                return cd
            }
        })
        setCompletedDreams(newMemObj)
    }

function handleSubmit(e) {
    e.preventDefault()
    fetch(`/memories/${memory.id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(memoryFormData)
    })
    .then((r) => r.json()).then((newMem) => onEditMem(newMem))
}

// console.log(dream)

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
    {/* <div className="form-row">
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
    </div>    */}
    <div className="form-row">
        {errors.map((error) => (
            <ul key={error} className="errors">??? {error}</ul>
            ))}
    </div>
    <div className="form-row">
    <button className="ui submit grey basic button center" type="submit">Submit</button>
    </div>
    <br></br>
    </form>
</div>
)
}

export default EditMemory
