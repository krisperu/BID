import React, { useState } from 'react'
import { useHistory } from "react-router-dom";

function EditProfile({ user, setUser }) {
    let hisotry = useHistory()
    const [errors, setErrors] = useState([])
    const [profileFormData, setProfileFormData] = useState({
        name: user.name,
        image: user.image,
        bio: user.bio,
        password: user.password_digest
    })

    console.log(user.password_digest)


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
        hisotry.push("/profile")
    }

return (
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
            <label>Image</label>
            <input 
                name="image" 
                type="text"
                id={FormData.image}
                value={profileFormData.image}
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
)
}

export default EditProfile

// t.string "username"
//     t.string "email"
//     t.string "password_digest"
//     t.string "name"
//     t.string "image"
//     t.string "bio"