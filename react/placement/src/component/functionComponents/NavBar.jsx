import React from 'react'
import { Link } from 'react-router-dom'
import '../../assets/NavBar.css'
const NavBar = () => {
  return (
    <div>
        <ul id="ul">
          <Link className="Link" to="/"><li  id="li">Home</li></Link>
          <Link className="Link" to= "/About"><li id="li">About</li></Link>
          <Link className="Link" to="/Gallery"><li id="li">Gallery</li></Link>
          <Link className="Link" to="/useEffect"><li id="li">UseEf</li></Link>
          <Link className="Link" to="/useEffect_1"><li id="li">UseEfT</li></Link>
          <Link className="Link" to="/UseRef"><li id="li">UseRef</li></Link>
          <Link className="Link" to="/UseCon"><li id="li">UseCon</li></Link>
          <Link className="Link" to="/Contact"><li id="li">Contact</li></Link>
        </ul>
        <hr/>
    </div>
  )
}

export default NavBar