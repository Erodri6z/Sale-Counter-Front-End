// css
import styles from './Landing.module.css'
import Buttons from '../../components/Buttons/Buttons'
import PriceInput from '../../components/PriceCount/PriceInput'
import CountInput from '../../components/CountInput/CountInput'
import { useState } from 'react'

const Landing = ({ user }) => {

  const [form, setForm] = useState('Nothing selected')

  const updateForm = (newValue) => {
    setForm(newValue)
  }
  console.log(form)

  return (
    <main className={styles.container}>
      <h1>hello, {user ? user.userName : 'friend'}</h1>
      <div className='count-input insurance'>
      <CountInput title='Insurance count' /> 
      </div>
      <div className='count-input apple'>
      <CountInput title='Apple-Care count' /> 
      </div>
      <div className='count-input prepaid'>
      <CountInput title='Prepaid Phone count'/> 
      </div>
      <div className='count-input accesories'>
      <PriceInput title='Accesories Price Count' />
      </div>
      <div className='count-input gen-electrics'>
      <PriceInput title='General Electronics Price count' />
      </div>
      <Buttons onUpdateForm={updateForm} />
    </main>
  )
}

export default Landing
