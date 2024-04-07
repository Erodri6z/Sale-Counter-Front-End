// npm modules
import React, { useEffect, useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

// pages
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
// import Profiles from './pages/Profiles/Profiles'
import ChangePassword from './pages/ChangePassword/ChangePassword'

// components
import NavBar from './components/NavBar/NavBar'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'

// services
import * as authService from './services/authService'
import * as profilesService from './services/profileService'

// styles
import './App.css'
import ResultsPage from './pages/ResultsPage/ResultsPage'
import NotFound from './pages/NotFoundPage/NotFoundPage'

function App() {
  const [user, setUser] = useState(authService.getUser())
  const [profile, setProfile] = useState()

  useEffect(() => {
    const fetchProfile = async () => {
      const profileData = await profilesService.getProfile(user.profile)
      setProfile(profileData)
    }
    fetchProfile()

  }, [user])

  useEffect(() => {
    const setupCounter = async () => {
      if (profile) {
        if (profile.sales.length < 1) {
          createCounter()
        } else if ( profile.sales.length > 1) {
          clearCounter()
        }
      }
    }
    setupCounter()
  }, [])

  const createCounter  = async () => {
    const initialData = {
      insuranceCount : 0,
      appleCareCount : 0,
      prePaidPhones : 0,
      accesoriesCount : 0,
      accesoriesDollarAmount: 0,
      generalElectronicsCount: 0,
      generalElectronicsDollarAmount: 0
    }
    const newProfile = await profilesService.createSaleCounter(user.profile, initialData)

    setProfile(await newProfile)
  }


  const clearCounter = async () => {
    const newProfile = await profilesService.clearCounter(profile._id)
    setProfile(await newProfile)
    createCounter()
  }


  const navigate = useNavigate()

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleAuthEvt = () => {
    setUser(authService.getUser())
  }


  const handleUpdateCount = async (formData) => {
    try{
      const newProfile = await profilesService.updateCounter(profile._id, formData)
      setProfile(newProfile)
    } catch (error) {
      console.error('error upodating count', error)
    }
  }


  return (
    <>
    {/* <button onClick={() => {clearCounter()}}>clear</button>
    <button onClick={() => {createCounter()}}>create</button> */}
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route 
          path="/" 
          element={
            <ProtectedRoute user={user}>
              <Landing 
              user={user} 
              profile={profile} 
              handleUpdateCount={handleUpdateCount}
              createCounter={createCounter}
              clearCounter={clearCounter}
              />
            </ProtectedRoute> 
          } 
        />
        <Route
          path='/results'
          element={
            <ProtectedRoute user={user}>
              <ResultsPage
                profile={profile}
              />
            </ProtectedRoute>
          }
        />
        <Route
          path="/auth/signup"
          element={<Signup handleAuthEvt={handleAuthEvt} />}
        />
        <Route
          path="/auth/login"
          element={<Login handleAuthEvt={handleAuthEvt} />}
        />
        <Route
          path="/auth/change-password"
          element={
            <ProtectedRoute user={user}>
              <ChangePassword handleAuthEvt={handleAuthEvt} />
            </ProtectedRoute>
          }
        />
        <Route
        path='*'
          element={
            <NotFound /> 
          }
        /> 
      </Routes>
    </>
  )
}

export default App
