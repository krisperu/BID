import React, { useState } from 'react'

function Login({ setUser, setIsAuthenticated }) {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setErrors] = useState([])

  // function handleSubmit(e) {
  //   e.preventDefault();

  //   fetch(`/login`,{
  //     method:'POST',
  //     headers:{
  //       'Content-Type': 'application/json'
  //     },
  //     body:JSON.stringify({
  //       username, 
  //       password,
  //     })
  //   })
  //     .then(res => {
  //       if(res.ok){
  //         res.json()
  //         .then(username=>{
  //           setUser(username)
  //           setIsAuthenticated(true)
  //         })
  //       } else {
  //         res.json()
  //         .then((err) => setErrors(err.errors))
  //       }
  //   })
  // }

  return (
    <div>
       <form 
              className="ui two fields form center"
              // onSubmit={handleSubmit}
            >
            <label> Username
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>
            <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            <br></br>
            <div>
              {/* {errors.map((error) => (
                <ul className="errors">{error}</ul>
              ))} */}
            </div>
            <br></br>
            <button className="ui submit button center" type="submit">Login</button>
          </form>
    </div>
  )
}

export default Login