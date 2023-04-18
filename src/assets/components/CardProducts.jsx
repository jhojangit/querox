import { useRef } from "react";
import products from "../json/products";


const CardProducts = () => {

    

    const handleClick = (id) =>{
        let ass = document.querySelector('.product-container-description')
        
            ass.classList.add('product-description-show')
    }


    return (
        <section className="container-products">
            {
                products.map((product, id) => (
                    <div className="product_element" key={product.id}>
                        <div className="product-element-container-img">
                            <img className="product-element-img" src={product.image} alt={product.description} />
                        </div>

                        <div className="product-element-main">
                            <h3 className="product-name" >{product.name}</h3>
                            <p className="product-price" >{product.price.toLocaleString('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0 })}</p>
                            <p className="product-measures">{product.measures}</p>
                        </div>

                        <div className="product-container-description">
                            <p>{product.description}</p>
                        </div>

                        <button onClick={() => handleClick(id)}>CLICK</button>
                    </div>
                ))
            }
        </section>
    )
}


export default CardProducts