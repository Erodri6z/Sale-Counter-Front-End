// css
import styles from './Landing.module.css'
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

const Landing = ({ user, profile, handleUpdateCount } ) => {

  const [form, setForm] = useState('Nothing selected')

  const updateForm = (newValue) => {
    setForm(newValue)
  }

  // console.log(profile)


  return (
    <main className={styles.container}>
      <Link to="/results" state={{ profile }}>
        <button>Results</button>
      </Link>
      <h1>hello, {user ? user.userName : 'friend'}</h1>
      {
        user?(
        <>
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
        <h2>Please Sign In</h2>
      }
    </main>
  )
}

export default Landing
