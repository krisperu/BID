import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Signup from './Signup'

function Login({ setUser, user }) {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setErrors] = useState([])

  function handleSubmit(e) {
    e.preventDefault();

    fetch(`/login`,{
      method:'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password }),
        }).then((r) => {
        if (r.ok) {
            r.json().then((user) => setUser(user));
        } else {
            r.json().then((err) => setErrors(err.errors));
        }
        });
    }

  return (
    <div>
       <form 
              className="ui two fields form center"
              onSubmit={handleSubmit}
            >
            <label> Username*
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>
            <label htmlFor="password">Password*:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            <br></br>
            <div>
              {errors.map((error) => (
                <ul key={error} className="errors">{error}</ul>
              ))}
            </div>
            <br></br>
            <button className="ui submit button center" type="submit">Login</button>
          </form>
          <button className="ui basic button"><Link to="/signup">Don't have an accout? Sign Up</Link></button>
          <Signup user={user} setUser={setUser} />
    </div>
  )
}

export default Login