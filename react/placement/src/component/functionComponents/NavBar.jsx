import React from 'react'
import { Link } from 'react-router-dom'
import '../../assets/NavBar.css'
const NavBar = () => {
  return (
    <div>
        <ul>
          <li><Link class="Link" to="/">Home</Link></li> 
          <li><Link class="Link" to= "/About">About</Link></li>
          <li><Link class="Link" to="/Contact">Contact</Link></li>
          <li><Link class="Link" to="/Gallery">Gallery</Link></li>
        </ul>
        <hr/>
    </div>
  )
}

export default NavBar