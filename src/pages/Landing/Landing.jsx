// css
import  '../Landing/Landing.css'
import Buttons from '../../components/Buttons/Buttons'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import InsuranceCountInput from '../../components/CountInput/InusranceCountInput'
import AppleCareCountInput from '../../components/CountInput/AppleCareCountInput'
import PrePaidCountInput from '../../components/CountInput/PrePaidCountInput'
import AccessoriesPriceInput from '../../components/PriceCount/AccessoriesPriceInput'
import GeneralPriceInput from '../../components/PriceCount/GeneralPriceInput'

const Landing = ({ user, profile, handleUpdateCount, createCounter, clearCounter } ) => {


  const [form, setForm] = useState('Nothing selected')
  const [isOpen, setIsOpen] = useState(false)
  // const [isLoading, setIsLoading] = useState(false)


  

  const updateForm = (newValue) => {
    setForm(newValue)
  }

  const reset = () => {
    if (profile.sales.length === 0) {
      createCounter()
    } else {
      clearCounter()
    }
    closeMessage()
  }

  const openMessage = () => {
  setIsOpen(true)
  setForm("nothing is selected")
  }

  const closeMessage = () => {
    setIsOpen(false)
  }


  if(profile) return (<h1 className='loading'>Loading...</h1>)

  // if (!profile)
  // console.log(profile)


  return (
    <main className="container">
      <div className='buttons'>
      <button onClick={openMessage} className='reset-btn'>Reset</button>
      <Link to="/results" className='results-a' state={{ profile }}>
        <button className='results-btn' >
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-pie-chart-fill" viewBox="0 0 16 16">
            <path d="M15.985 8.5H8.207l-5.5 5.5a8 8 0 0 0 13.277-5.5zM2 13.292A8 8 0 0 1 7.5.015v7.778l-5.5 5.5zM8.5.015V7.5h7.485A8.001 8.001 0 0 0 8.5.015z"/>
          </svg>
        </button>
      </Link>
      </div>
      <h3>{user ? user.userName.charAt(0).toUpperCase() + user.userName.slice(1) : 'Dont have a name, huh?'}</h3>
      {
        profile.sales.length?(
          <>
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
            <AccessoriesPriceInput title='Accessories' subtitle="How Much?" profile={profile} handleUpdateCount={handleUpdateCount} />
          </div>
          :
          (form === 'gen-elec')?
          <div className='count-input gen-electrics'>
            <GeneralPriceInput title='General Electronics' subtitle="How Much?" profile={profile} handleUpdateCount={handleUpdateCount} />
          </div>
          :
          <span></span>
        }
        <div className={`${isOpen ? 'hide' : ''}`}>
          <Buttons onUpdateForm={updateForm} profile={profile} form={form}/>
        </div>
        </>
        )
        :
        <button className='get-started' onClick={() => reset()}>Get Started</button>
      }
    </main>
  )
}

export default Landing
