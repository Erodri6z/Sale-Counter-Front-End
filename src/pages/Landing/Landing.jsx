// css
import styles from './Landing.module.css'
import Buttons from '../../components/Buttons/Buttons'
import PriceInput from '../../components/PriceCount/PriceInput'
import CountInput from '../../components/CountInput/CountInput'
import { useState } from 'react'

const Landing = ({ user, profile, handleUpdateCount } ) => {

  const [form, setForm] = useState('Nothing selected')
  const insuranceCount = 'insuranceCount'
  // console.log(insura)
  const appleCareCount = 'appleCareCount'
  const prePaidPhones = 'prePaioPhones'
  // const  = profile.sales(0).insuranceCount
  // const insuranceCount = profile.sales(0).insuranceCount
  // const insuranceCount = profile.sales(0).insuranceCount
  // const insuranceCount = profile.sales(0).insuranceCount

  const updateForm = (newValue) => {
    setForm(newValue)
  }
  // console.log(profile.sales[0].insuranceCount)

  return (
    <main className={styles.container}>
      <h1>hello, {user ? user.userName : 'friend'}</h1>
      {
        (form === 'insurance')?
        <div className='count-input insurance'>
          <CountInput title='Insurance count' handleUpdateCount={handleUpdateCount} profile={profile} variable={insuranceCount} data={profile.sales[0].insuranceCount}/> 
        </div>
        :
        (form === 'apple')?
        <div className='count-input apple'>
          <CountInput title='Apple-Care count' profile={profile} variable={appleCareCount}/> 
        </div>
        :
        (form === 'prepaid')?
        <div className='count-input prepaid'>
          <CountInput title='Prepaid Phone count' profile={profile} variable={prePaidPhones}/> 
        </div>
        :
        (form === 'access')?
        <div className='count-input accesories'>
          <PriceInput title='Accesories Price Count' profile={profile}/>
        </div>
        :
        (form === 'gen-elec')?
        <div className='count-input gen-electrics'>
          <PriceInput title='General Electronics Price count' profile={profile} />
        </div>
        :
        <span></span>
      }

      <Buttons onUpdateForm={updateForm} />
    </main>
  )
}

export default Landing
