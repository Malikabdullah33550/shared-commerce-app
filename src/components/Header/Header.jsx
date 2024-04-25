import React from 'react'

const Header = () => {
  return (
    <>
        <nav>
    <div className="nav-wrapper orange">
      <a href="/" className="brand-logo">Logo</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="/dashboard">Dashboard</a></li>
        <li><a href="/users">Users</a></li>
        <li><a href="/login">Login</a></li>
        <li><a href="/signup">SignUp</a></li>
      </ul>
    </div>
  </nav>
    </>
  )
}

export default Header
