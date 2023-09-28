import React from 'react'
import "./navbar.css"
import { Link } from 'react-router-dom'

const navbar = () => {
  return (
    <nav className='navbar'>
      <div className="logo__container">
        <img className='navbar__img' src="../img-products/LOGO1.png" alt="" />
      </div>
    </nav>
  )
}

export default navbar