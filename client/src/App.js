import React from 'react'
import LandingPage from './components/LandingPage'
import Signup from './components/Signup'
import Login from './components/Login'
import NavBar from './components/NavBar'
import Memories from './components/Memories'

function App() {
  return (
    <div>
      Learn React
      <Signup />
      <Login />
      <NavBar />
      <LandingPage />
      <Memories />

    </div>
  );
}

export default App;
