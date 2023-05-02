import React from 'react'
import "./navbar.css"
import { Link } from 'react-router-dom'

const navbar = () => {
  return (
    <nav className='navbar'>
      <div className="logo__container">
        <img className='navbar__img' src="public\img-products\LOGO1.png" alt="" />
      </div>


      <ul>
        <li><Link to="/" >Productos</Link></li>
        <li><Link className='navbar__politica' to="/venta">Política de venta</Link></li>
      </ul>

    </nav>
  )
}

export default navbar