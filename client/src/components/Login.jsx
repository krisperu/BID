import React, { useState } from 'react'
import Signup from './Signup'

function Login({ setUser }) {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setErrors] = useState([])
  const [showSignup, setShowSignup] = useState(false)

  function handleSignup(showSignup) {
    setShowSignup(!showSignup)
  }

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
    <div className="login-page">
      <div className="login-img">
          <div className="center five wide column">
            <div></div>
          </div>
          <div className="center five wide column">
            <div className="bg-text">
              <h1 className="main-logo"><b>Before I Die</b></h1>
              <div>A Bucket List App</div>
              <div class="ui divider"></div>
              <div>Making your dreams come true, one list at a time.</div>
            </div>
              <br></br>
            <div className="bg-text-2">
              <div>Create a Bucket List</div>
              <br></br>
              <div>Add Dreams to the List</div>
              <br></br>
              <div>Add Details to your Dream</div>
              <br></br>
              <div>Create Memories  after Completing Dreams</div>
            </div>
          </div>
          <div className="right floated five wide column">
          <div></div>
        <div  className="space"></div>
          </div>
        </div>
    
      {/* Login SideBar */}
      <div className="login-form-bar">
        <div className="login-logo">
          <h1 className="main-logo">B I D</h1>
          A Bucket List App
        </div>
        <div className="form_padding">
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
          <label htmlFor="password">Password*</label>
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
          <button className="ui basic submit button center" type="submit">Login</button>
        </form>
        <br></br>
        <button onClick={()=> handleSignup(showSignup)} className="ui basic button">Don't have an accout? Sign Up</button>
        {showSignup &&<Signup setUser={setUser}/>}
        </div>
      </div>
    </div>
  )
}

export default Login