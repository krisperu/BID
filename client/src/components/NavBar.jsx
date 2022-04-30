import React from 'react'
import { NavLink } from "react-router-dom";

function NavBar({ setUser, user }) {

  const logout = () => {
    fetch('/logout',{
        method:'DELETE'
    })
    .then(()=>{
        setUser(null)
    })
  }

  return (
    <aside className="ui color vertical menu">
      <NavLink
        to="/"
        exact
        className="ui item"
        activeStyle={{
          background: "#EDEADE",
        }}
      >
        Home
      </NavLink> 

      <NavLink
        to="/memories"
        exact
        className="ui item"
        activeStyle={{
          background: "#EDEADE",
        }}
      >
        Memories
      </NavLink>
      
      <NavLink
        to="/profile"
        exact
        className="ui item"
        activeStyle={{
          background: "#EDEADE",
        }}
      >
        Profile
      </NavLink>

      <button className="ui fluid basic button" onClick={()=>logout()}>Logout</button>
    </aside>
  )
}

export default NavBar
