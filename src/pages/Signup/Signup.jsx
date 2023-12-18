
import { useState, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'


import * as authService from '../../services/authService'


import styles from './Signup.module.css'

const Signup = ({ handleAuthEvt }) => {
  const navigate = useNavigate()

  const [message, setMessage] = useState('')
  const [formData, setFormData] = useState({
    fullName: '',
    userName: '',
    password: '',
    passwordConf: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = evt => {
    setMessage('')
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }



  const handleSubmit = async evt => {
    evt.preventDefault()
    try {
      if (!import.meta.env.VITE_BACK_END_SERVER_URL) {
        throw new Error('No VITE_BACK_END_SERVER_URL in front-end .env')
      }
      setIsSubmitted(true)
      await authService.signup(formData)
      handleAuthEvt()
      navigate('/')
    } catch (err) {
      console.log(err)
      setMessage(err.message)
      setIsSubmitted(false)
    }
  }

  const { fullName, userName, password, passwordConf } = formData

  const isFormInvalid = () => {
    return !(fullName && userName && password && password === passwordConf)
  }

  return (
    <main className={styles.container}>
      <h1>Sign Up</h1>
      <p className={styles.message}>{message}</p>
      <div className={styles.signup}>
        <form autoComplete="off" onSubmit={handleSubmit} className={styles.form}>
          <label className={styles.label}>
            Full Name 
          </label>
            <input type="text" value={fullName} name="fullName" onChange={handleChange} />
          <label className={styles.label}>
            UserName
            </label>
            <input
              type="text"
              value={userName}
              name="userName"
              onChange={handleChange}
              />
            <label className={styles.label}>
            Password
            </label>
            <input
              type="password"
              value={password}
              name="password"
              onChange={handleChange}
              />
          <label className={styles.label}>
            Confirm Password
            </label>
            <input
              type="password"
              value={passwordConf}
              name="passwordConf"
              onChange={handleChange}
              />
          <div>
            <Link to="/">Cancel</Link>
            <button
              className={styles.button}
              disabled={ isFormInvalid() || isSubmitted }
              >
              {!isSubmitted ? 'Sign Up' : 'Sending...'}
            </button>
          </div>
        </form>
        <p className={styles.p}>Already Have An Account? <Link to="/auth/login">Log In!</Link></p>
      </div>
    </main>
  )
}

export default Signup
