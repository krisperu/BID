import React, { useState } from 'react'
import EditProfile from './EditProfile'
import { Button, Modal } from 'semantic-ui-react'
import { useHistory } from "react-router-dom"

function exampleReducer(state, action) {
  switch (action.type) {
    case 'close':
      return { open: false }
    case 'open':
      return { open: true, size: action.size }
    default:
      throw new Error('Unsupported action...')
  }
}

function Profile({ user, setUser,profilePics }) {
  let hisotry = useHistory()
  const [showEditForm, setShowEditForm] = useState(false)
  const [state, dispatch] = React.useReducer(exampleReducer, {
    open: false,
    size: undefined,
  })
  const { open, size } = state

  function handleEditForm(showEditForm) {
    setShowEditForm(!showEditForm)
  }

  const deleteProfile = (id) => {
    fetch(`/users/${id}`, {
      method: 'DELETE',
    }).then((r) => {
      if (r.ok) {
        setUser(null)
      }
    })
    hisotry.push("/")
  }

  return (
    <div>
      <br></br>
      <h2>My Profile:</h2>
      <br></br>
      <div className="center">
        <div className="ui centered card">
        <div className="image">
          <img src={profilePics ? profilePics.image : user.image} alt={user.id}/>
        </div>
        <div className="content">
          <div className="header">Name: {user.name}</div>
          <div className="meta">Username: {user.username}</div>
          <div className="meta">Email: {user.email}</div>
          <div className="description">Bio: {user.bio}</div>
        </div>
        <div className="extra content">
            <div className="description"><b>Lists: </b>{user.lists.length}</div>
        </div>
        <div className="extra content">
          <button className="ui submit grey basic button center" onClick={() => handleEditForm(showEditForm)}>Edit Profile</button>
        </div>
        {showEditForm &&<EditProfile user={user} setUser={setUser}/>}
        <Button basic color="red" onClick={() => dispatch({ type: 'open', size: 'mini' })}>
        Delete Account
      </Button>

      <Modal
        size={size}
        open={open}
        onClose={() => dispatch({ type: 'close' })}
      >
        <Modal.Header>Delete Your Account</Modal.Header>
        <Modal.Content>
          <p>Are you sure you want to delete your account?</p>
          <p>This cannot be undone.</p>
        </Modal.Content>
        <Modal.Actions>
          <Button negative onClick={() => dispatch({ type: 'close' })}>
            No
          </Button>
          <Button positive onClick={() => deleteProfile(user.id)}>
            Yes
          </Button>
        </Modal.Actions>
      </Modal>
      </div>
      </div>
      <br></br>
      <div className='footer'>
          <div>BID | //Flatiron School</div>   
          <div>Created By: Kristina Peru | <a href="https://github.com/krisperu/BID">GitHub</a> | <a href="https://www.linkedin.com/in/kristina-peru-205557189/">Contact Me</a></div>
        </div>
    </div>
  )
}

export default Profile


