// css
import styles from './Landing.module.css'
import Buttons from '../../components/Buttons/Buttons'
import PriceInput from '../../components/PriceCount/PriceInput'
import CountInput from '../../components/CountInput/CountInput'

const Landing = ({ user }) => {
  return (
    <main className={styles.container}>
      <h1>hello, {user ? user.userName : 'friend'}</h1>
      <CountInput title='insurance count' /> 
      <CountInput title='Apple-Care count' /> 
      <CountInput title='Prepaid Phone count'/> 
      <PriceInput title='Accesories Price Count' />
      <PriceInput title='General Electronics Price count' />
      <Buttons />
    </main>
  )
}

export default Landing
