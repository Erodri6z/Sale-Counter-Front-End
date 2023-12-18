// npm modules
import { NavLink } from 'react-router-dom'
import '../NavBar/NavBar.css'

const NavBar = ({ user, handleLogout }) => {
  return (
    <nav>
      {user ?
        <ul className='nav-options'>
          <li className='nav-item-hello'>Hi, {user.userName}</li>
          {/* <li><NavLink to="/profiles">Profiles</NavLink></li> */}
          <li className='nav-item'><NavLink to="" onClick={handleLogout}>LOG OUT</NavLink></li>
          {/* <li><NavLink to="/auth/change-password">Change Password</NavLink></li> */}
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
