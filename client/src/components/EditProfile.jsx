import React, { useState } from 'react'
import ImageForm from './ImageForm'

function EditProfile({ user, setUser }) {
    const [errors, setErrors] = useState([])
    const [profileFormData, setProfileFormData] = useState({
        name: user.name,
        image: user.image,
        bio: user.bio
    })

    function handleChange(e) {
        setProfileFormData({
            ...profileFormData,
        [e.target.name]: e.target.value,
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        fetch(`/users/${user.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(profileFormData)
        })
        .then((r) => {
        if (r.ok) {
            r.json().then((user) => setUser(user));
    
        } else {
            r.json().then((err) => setErrors(err.errors));
        }
        })
    }

return (
    <div>
        <form className="ui form" onSubmit={handleSubmit}> 
            <div className="form-row">
                <div className="form-group col-5">
                    <label>Name</label>
                    <input 
                        name="name" 
                        type="text"
                        id={FormData.name}
                        value={profileFormData.name}
                        onChange={(e) => handleChange(e)}
                    />
                </div>
            </div>
            <div className="form-row">
                <div className="form-group col-5">
                    <label>Bio</label>
                    <input 
                        name="bio" 
                        type="text"
                        id={FormData.bio}
                        value={profileFormData.bio}
                        onChange={(e) => handleChange(e)}
                    />
                </div>
            </div>
            <div>
                {errors.map((error) => (
                    <ul className="errors">・ {error}</ul>
                    ))}
            </div>
            <button className="ui submit basic button center" type="submit">Submit</button>
        </form>
        <hr></hr>
        {/* <br></br> */}
        <h3>Upload Profile Picture</h3>
        <ImageForm user={user}/>
    </div>
)
}

export default EditProfile
