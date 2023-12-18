// css
import  '../Landing/Landing.css'
import Buttons from '../../components/Buttons/Buttons'
// import PriceInput from '../../components/PriceCount/PriceInput'
// import CountInput from '../../components/CountInput/'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import InsuranceCountInput from '../../components/CountInput/InusranceCountInput'
import AppleCareCountInput from '../../components/CountInput/AppleCareCountInput'
import PrePaidCountInput from '../../components/CountInput/PrePaidCountInput'
import AccessoriesPriceInput from '../../components/PriceCount/AccessoriesPriceInput'
import GeneralPriceInput from '../../components/PriceCount/GeneralPriceInput'

const Landing = ({ user, profile, handleUpdateCount, createCounter, clearCounter } ) => {


  const [form, setForm] = useState('Nothing selected')
  const [isOpen, setIsOpen] = useState(false)

  const updateForm = (newValue) => {
    setForm(newValue)
  }

  const reset = () => {
    if (profile.sales.length === 0) {
      createCounter()
    } else {
      clearCounter()
    }
  }

  const openMessage = () => {
  setIsOpen(true)
  }

  const closeMessage = () => {
    setIsOpen(false)
  }


  if (!profile) return (<h1>Loading...</h1>)

  // console.log(profile)


  return (
    <main className="container">
      <Link to="/results" className='results-a' state={{ profile }}>
        <button className='results-btn' >
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-pie-chart-fill" viewBox="0 0 16 16">
            <path d="M15.985 8.5H8.207l-5.5 5.5a8 8 0 0 0 13.277-5.5zM2 13.292A8 8 0 0 1 7.5.015v7.778l-5.5 5.5zM8.5.015V7.5h7.485A8.001 8.001 0 0 0 8.5.015z"/>
          </svg>
        </button>
      </Link>
      <h1>Hello, {user ? user.userName : 'friend'}</h1>
      {
        profile.sales.length?(
          <>
          <button onClick={openMessage} className='reset-btn'>Reset</button>
          <div className={`custom-alert ${isOpen ? 'open' : ''}`}>
            <div className="alert-content">
              <p>Are you sure that you want to reset the counters to 0?</p>
              <button className="close-btn" onClick={closeMessage}>Close</button>
              <button className="confirm-reset" onClick={reset}>Burn it all down</button>
            </div>
          </div>
        {
          (form === 'insurance')?
          <div className='count-input insurance'>
          <InsuranceCountInput title='Insurance count' handleUpdateCount={handleUpdateCount} profile={profile} /> 
          </div>
          :
          (form === 'apple')?
          <div className='count-input apple'>
            <AppleCareCountInput title='Apple-Care count' profile={profile} handleUpdateCount={handleUpdateCount} /> 
          </div>
          :
          (form === 'prepaid')?
          <div className='count-input prepaid'>
            <PrePaidCountInput title='Prepaid Phone count' profile={profile} handleUpdateCount={handleUpdateCount} /> 
          </div>
          :
          (form === 'access')?
          <div className='count-input accesories'>
            <AccessoriesPriceInput title='Accesories Price Count' profile={profile} handleUpdateCount={handleUpdateCount} />
          </div>
          :
          (form === 'gen-elec')?
          <div className='count-input gen-electrics'>
            <GeneralPriceInput title='General Electronics Price count' profile={profile} handleUpdateCount={handleUpdateCount} />
          </div>
          :
          <span></span>
        }
        <Buttons onUpdateForm={updateForm} />
        </>
        )
        :
        <button onClick={() => reset()}>Get Started</button>
      }
    </main>
  )
}

export default Landing
