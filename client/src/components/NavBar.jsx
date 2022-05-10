import React from 'react'
import { NavLink } from "react-router-dom";

function NavBar({ setUser, user, profilePics }) {

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
      <div className="nav-prof">
        <img src={profilePics ? profilePics.image : user.image} alt={user.id} className="ui avatar image"/>
        <span>{user.name}</span>
      </div>
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
