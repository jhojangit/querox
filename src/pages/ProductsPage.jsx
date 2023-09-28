import React, { useEffect, useState } from 'react'
import FilterProducts from '../assets/components/filter/FilterProducts'
import CardProducts from '../assets/components/products/CardProducts'
import AboutPage from '../assets/components/about/AboutPage'
import products from "../assets/json/products.json";
import "../pages/productsPage.css"
import "../assets/components/modal/modal.css"
import Modal from '../assets/components/modal/Modal'



const ProductsPage = () => {
    
    

    const [productModal, setProductModal] = useState("");
    const [addClass, setAddClass] = useState("");




    const handleProductClick = (selectedProduct) =>{

        setProductModal(selectedProduct);
        setAddClass("modal__show")
    }

    const handleExitModal = () =>{
        setAddClass("")
        setProductModal("");
    }




    return (
        <main className='main__container'>
            <AboutPage/>
            <FilterProducts />
            



            <div className='container__products'>
                
                {
                    
                    products.map(product => (
                        <CardProducts
                            key={product.id}
                            product={product}
                            onProductClick={handleProductClick}
                        />
                    ))
                }
                
            </div>


            <div className={`modal__container ${addClass}`}>
                {
                    productModal?
                    <Modal 
                    product={productModal}
                    onProductExit={handleExitModal}
                    />
                    :<></>
                }
            </div>


        </main>
    )
}

export default ProductsPage