// css
import styles from './Landing.module.css'
import Buttons from '../../components/Buttons/Buttons'

const Landing = ({ user }) => {
  return (
    <main className={styles.container}>
      <h1>hello, {user ? user.userName : 'friend'}</h1>
      <button>Get started?</button>
      <Buttons />
    </main>
  )
}

export default Landing
