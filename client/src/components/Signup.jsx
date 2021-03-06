import React, { useState } from 'react'

function Signup({ setUser }) {
  const [errors, setErrors] = useState([])
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    passwordConfirmation: "",
    name: "",
    bio: "",
    image: ""
  })

  const initialFormState = {
    username: "",
    email: "",
    password: "",
    passwordConfirmation: "",
    name: "B I D User",
    bio: "",
    image: ""
  };

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);

    const newUser = { 
      username: formData.username,
      email: formData.email,
      password: formData.password,
      passwordConfirmation: formData.passwordConfirmation,
      name: formData.name ? formData.name :"B I D User",
      bio: formData.bio,
      image: formData.image ? formData.image : "https://picsum.photos/500/750"
    }

    fetch(`/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((r) => {
        if (r.ok) {
          r.json().then((user) => setUser(user));
        } else {
          r.json().then((err) => setErrors(err.errors));
        }
      })
      .then(setFormData(initialFormState));
  }

  return (
    <div className="background">
        <h3 className="center-content">Signup</h3>
        <div className="form-border center-content">
          <div className="ui grid">
            <form 
                className="ui two fields form center"
                onSubmit={(e) => handleSubmit(e)}
                >
                <div>
                  {errors.map((error) => (
                    <ul className="errors">・ {error}</ul>
                  ))}
                </div>
              <label htmlFor="username">Username:</label>
              <input
                name="username"
                type="text"
                id={FormData.username}
                value={formData.username}
                onChange={(e) => handleChange(e)}
              />
              <label htmlFor="email">Email:</label>
              <input
                name="email"
                type="text"
                id={FormData.email}
                placeholder="example@mail.com"
                value={formData.email}
                onChange={(e) => handleChange(e)}
              />
              <label htmlFor="password">Password:</label>
              <input
                name="password"
                type="password"
                id={FormData.password}
                value={formData.password}
                onChange={(e) => handleChange(e)}
              />
              <label htmlFor="password_confirmation">Confirm Password:</label>
              <input
                name="passwordConfirmation"
                type="password"
                id={FormData.password_confirmation}
                value={formData.passwordConfirmation}
                onChange={(e) => handleChange(e)}
              />
              <br></br>
              <br></br>
              <button className="ui basic submit button center" type="submit">Sign Up</button>
            </form>
          </div>
        </div>
      </div>
  )
}

export default Signup