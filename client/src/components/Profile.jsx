import React from 'react'
import NavBar from './NavBar'

function Profile({ setIsAuthenticated, setUser, user }) {
  return (
    <div>Profile
      <NavBar
        setUser={setUser} 
        // setIsAuthenticated={setIsAuthenticated}
      />
    </div>
  )
}

export default Profile