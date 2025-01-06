import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
        <hr/>
        <ul id="ul">
            <Link className="Link" to="/"><li  id="li">Home</li></Link>
            <Link className="Link" to="/LogIn"><li id="li">LogIn</li></Link>
            <Link className="Link" to= "/About"><li id="li">About</li></Link>
            <Link className="Link" to="/Contact"><li id="li">Contact</li></Link>
            <Link className="Link" to="/Gallery"><li id="li">Gallery</li></Link>
            <Link className='Link' to="/FAQ"><li id="li">FAQ</li></Link>
        </ul>
    </div>
  )
}

export default Footer