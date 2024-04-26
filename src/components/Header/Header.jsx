import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({loggedUser, setLoggedUser}) => {
  return (
    <>
        <nav>
    <div className="nav-wrapper orange">
      <Link to="/" className="brand-logo">Logo</Link>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        {loggedUser == true ? 
        <>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/users">Users</Link></li>
        <li><Link to="/login" onClick={()=> {
          return setLoggedUser(false)
          }}>Logout</Link></li>
        </>
        : 
        <>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">SignUp</Link></li>
        </>
        }
      </ul>
    </div>
  </nav>
    </>
  )
}

export default Header
