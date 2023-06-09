import React, { useEffect, useState } from 'react'
import "../modal/modal.css"
import Slider from '../slider/Slider'
import Navbar from '../navbar/NavbarComponent'
import logo from "../../../../public/img-products/LOGO1.png"



const Modal = ({ product, onProductExit }) => {

    


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