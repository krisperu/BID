import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
import Signup from './Signup'

function Login({ setUser, user }) {
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
        <div class="ui grid">
          <div class="left floated five wide column">
            <div className="bg-text"></div>
          </div>
          <div class="left floated five wide column">
            <div className="bg-text"><b>App Title Maybe</b></div>
          </div>
          <div class="right floated five wide column">
          <div className="bg-text"></div>
          </div>
        </div>
        <div class="ui grid">
          <div class="left floated five wide column">
            <div className="bg-text">Directions part 1</div>
          </div>
          <div class="right floated five wide column">
          <div className="bg-text"></div>
          </div>
        </div>
        <div class="ui grid">
          {/* <div class="left floated five wide column">
            <div className="bg-text"></div>
          </div> */}
          <div class="right floated five wide column">
          <div className="bg-text">Directions part 2</div>
          </div>
        </div>
        {/* <div className="bg-text">TEXT</div> */}
        <div  className="space"></div>
      </div>
      <div className="login-form-bar">
        <div className="logo">
          <h1>Before I Die</h1>
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
        {showSignup &&<Signup user={user} setUser={setUser}/>}
        </div>
        
      </div>
      {/* <div class="ui vertically divided grid">
        <div class="two column row"><div class="column">
          <img src="/images/wireframe/paragraph.png" class="ui image"/>
        </div>
        <div class="column">
          <img src="/images/wireframe/paragraph.png" class="ui image"/>
        </div>
      </div>
      <div class="three column row">
        <div class="column">
          <img src="/images/wireframe/paragraph.png" class="ui image"/>
        </div>
        <div class="column">
          <img src="/images/wireframe/paragraph.png" class="ui image"/>
        </div>
        <div class="column">
          <img src="/images/wireframe/paragraph.png" class="ui image"/>
        </div>
      </div>
      </div> */}
    </div>
  )
}

export default Login