import React, { useState } from 'react'
import EditProfile from './EditProfile'

function Profile({ user, setUser }) {
  const [showEditForm, setShowEditForm] = useState(false)

  function handleEditForm(showEditForm) {
    setShowEditForm(!showEditForm)
  }
  return (
    <div>
      <br></br>
      <h2>My Profile:</h2>
      <div className="center">
        <div className="ui centered card">
        <div className="image">
          <img src={user.image} alt={user.id}/>
        </div>
        <div className="content">
          <div className="header">Name: {user.name}</div>
          <div className="meta">Email: {user.email}</div>
          <div className="meta">Username: {user.username}</div>
          <div className="description">Bio: {user.bio}</div>
        </div>
        <div className="extra content">
          <button className="ui submit grey basic button center" onClick={() => handleEditForm(showEditForm)}>Edit Profile</button>
        </div>
        {showEditForm &&<EditProfile user={user} setUser={setUser}/>}
      </div>
      </div>
      <br></br>
    </div>
  )
}

export default Profile


