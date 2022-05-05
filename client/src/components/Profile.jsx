import React from 'react'


function Profile({  user }) {
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
          <div className="description">Bio: {user.bio}</div>
        </div>
        <div className="extra content">
          <div>Add Edit Button Here</div>
        </div>
      </div>
      </div>
      <br></br>
    </div>
  )
}

export default Profile


