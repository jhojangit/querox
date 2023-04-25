import React from 'react'
import "./navbar.css"

const navbar = () => {
  return (
    <nav>
      <div className="logo__container">
        <img src="public\img-products\logo\logoBrown.jpg" alt="" />
      </div>

      <ul>
        <li>Nosotros</li>
        <li>Política de venta</li>
      </ul>

    </nav>
  )
}

export default navbar