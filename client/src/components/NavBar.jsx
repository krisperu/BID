import React from 'react'
import { NavLink } from "react-router-dom";

function NavBar({ setIsAuthenticated, setUser, user }) {

  const logout = () => {
    fetch('/logout',{
        method:'DELETE'
    })
    .then(()=>{
        // setIsAuthenticated(false)
        setUser(null)
    })
  }

  return (
    <div>
      <NavLink
        to="/"
        exact
        className="ui center floated button"
        activeStyle={{
          background: "#E6E6E8",
        }}
      >
        Home
      </NavLink> 

      <NavLink
        to="/memories"
        exact
        className="ui center floated button"
        activeStyle={{
          background: "#E6E6E8",
        }}
      >
        Memories
      </NavLink>
      
      <NavLink
        to="/profile"
        exact
        className="ui center floated button"
        activeStyle={{
          background: "#E6E6E8",
        }}
      >
        Profile
      </NavLink>

      <button className="ui center floated button" onClick={()=>logout()}>Logout</button>
    </div>
  )
}

export default NavBar