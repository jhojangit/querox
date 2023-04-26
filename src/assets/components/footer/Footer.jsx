import React from 'react'
import "./footer.css"



const Footer = () => {
    return (
        <div className='container__footer'>
            <h4 className='copy__container'><a className='copy__text' href="https://portfoliojhojan.netlify.app/" target="_blank" rel="noopener noreferrer">Copyright ©️ 2023 <br /> Jhojan R.G</a> </h4>

            <div className="whats">
                <a target="_blank" aria-label="Compra por WhatsApp" href="https://wa.me/573204102059?text= ¡Hola! Quisiera averigurar un producto"> <i class='bx bxl-whatsapp bx-lg bx-tada'></i> </a>
            </div>

        </div>
    )
}

export default Footer