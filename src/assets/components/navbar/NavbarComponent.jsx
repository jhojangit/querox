import React from 'react'
import "./navbar.css"
import { Link } from 'react-router-dom'

const navbar = () => {
  return (
    <nav className='navbar'>
      <div className="logo__container">
        <img src="../img-products/logoBrown.jpg" alt="" />
      </div>


      <ul>
        <li><Link to="/" >Productos</Link></li>
        <li><Link className='aaa' to="/venta">Política de venta</Link></li>
      </ul>

    </nav>
  )
}

export default navbar