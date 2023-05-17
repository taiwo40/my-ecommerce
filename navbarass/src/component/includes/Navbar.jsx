import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <React.Fragment>
          <ul>
            <li>
                 <Link className='father'  to="/">Home</Link>
            </li>
            <li>
                  <Link className='father' to="/products">Product</Link>
            </li>
            <li>
                     <Link className='father' to="/abouts">About</Link>
            </li>
            <li>
                 <Link className='father' to="/servicess">Service</Link>
            </li>
            <li>
                <Link className='father' to="/Registers">Register</Link>
            </li>
            <li>
                <Link className='father' to="/logins">Login</Link>
            </li>
          </ul>
    </React.Fragment>
  )
}

export default Navbar