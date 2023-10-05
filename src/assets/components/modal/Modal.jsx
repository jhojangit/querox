import React, { useEffect, useState } from 'react'
import "../modal/modal.css"
import Slider from '../slider/Slider'
import Navbar from '../navbar/NavbarComponent'
import logo from "../../../../public/img-products/LOGO1.png"



const Modal = ({ product, onProductExit }) => {
    let urr = "https://res.cloudinary.com/dojw0dkya/image/upload/v1696467681/ecommerce-api/mouse-rgb3.png"



    const nameProductURL = `https://wa.me/573223250286?text=Hola%20Me%20gustaría%20comprar%20este%20producto%20${product.name}%20=%20${product.price}%20${product.imageUrl}`

    return (
        <div className='modal__product'>

            <img className='modal__logo' src={logo} alt="" />


            <i onClick={onProductExit} className='bx bx-md bxs-x-square'></i>



            <section className='modal__main'>


                <section className='modal__slider'>
                        <Slider images={product.images} />
                </section>
                <h1 className='modal__name-mobile'>{product.name}</h1>


                <div className="modal__content">

                    <h1 className='modal__name-desktop'>{product.name}</h1>

                    <div className='modal__material'>
                        <p>{product.material}</p>
                    </div>


                    <div className="modal__whats_product">
                        <a style={{cursor:"pointer"}} target="_blank" aria-label="Compra por WhatsApp" href={nameProductURL}>COMPRAR</a>
                    </div>

                    <div className='modal__description'>
                        <p>{product.description}</p>
                    </div>

                    <p className="modal__price">
                        {product?.price.toLocaleString("es-co", { style: "currency", currency: "COP", minimumFractionDigits: 0 })}
                    </p>

                    <div className="modal__measures">
                        <p>{product.measures}</p>
                    </div>


                    <div className="modal__pockets-ul">
                        <ul>
                            {
                                product?.pockets?.map(pocket => (
                                    <li className='modal__pockets-li' key={pocket}>- {pocket}</li>
                                ))
                            }
                        </ul>

                    </div>
                </div>

            </section>

        </div>
    )
}

export default Modal