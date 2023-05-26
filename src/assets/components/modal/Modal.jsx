import React, { useEffect, useState } from 'react'
import "../modal/modal.css"
import Slider from '../slider/Slider'
import Navbar from '../navbar/NavbarComponent'
import logo from "../../../../public/img-products/LOGO1.png"



const Modal = ({ product, onProductExit }) => {



    console.log(product);
    


    return (
        <div className='modal__product'>

            <img className='modal__logo' src={logo} alt="" />


            <i onClick={onProductExit} className='bx bx-md bxs-x-square'></i>



            <section className='modal__main'>


                <section className='modal__slider'>
                    {product ?      // cuando se recarga la página modal, comprueba que exista, y si no es así, sale del modal
                        <Slider images={product.images} />
                        :
                        <></>
                    }
                </section>
                <h1 className='modal__name-mobile'>{product.name} ({product.material}) </h1>


                <div className="modal__content">

                    <h1 className='modal__name-desktop'>{product.name}</h1>
                    <p className='modal__material-desktop'>{product.material}</p>

                    <div className='modal__category'>
                        <p>{product.category}</p>
                    </div>

                    <div className='modal__description'>
                        <p>{product.description}</p>
                    </div>


                    <div className="modal__measures">
                        <p>{product.measures}</p>
                    </div>

                    <div className="modal__pockets-ul">
                        <ul>
                            {
                                product?.pockets?.map(pocket => (
                                    <li className='modal__pockets-li' key={pocket}>{pocket}</li>
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