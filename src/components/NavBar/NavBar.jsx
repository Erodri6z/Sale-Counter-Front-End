// npm modules
import { NavLink } from 'react-router-dom'
import '../NavBar/NavBar.css'

const NavBar = ({ user, handleLogout }) => {
  return (
    <nav>
      {user ?
        <ul className='nav-options'>
          <li className='nav-item-hello'>Hi, {user.userName.charAt(0).toUpperCase() + user.userName.slice(1)}</li>
          <li className='nav-item'><NavLink to="" onClick={handleLogout}>LOG OUT</NavLink></li>
        </ul>
      :
        <ul className='nav-options'>
          <li className='nav-item'><NavLink to="/auth/login">Log In</NavLink></li>
          <li className='nav-item'><NavLink to="/auth/signup">Sign Up</NavLink></li>
        </ul>
      }
    </nav>
  )
}

export default NavBar
