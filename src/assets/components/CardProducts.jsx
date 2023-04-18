import { useRef } from "react";
import products from "../json/products";


const CardProducts = () => {

    
    const descriptions = useRef([])
    

    const handleClick = (id) =>{        
        descriptions.current[id].classList.toggle('product-description-show')        
    }


    return (
        <section className="container-products">
            {
                products.map((product, id) => (
                    <div key={product.id} className="product_element" >
                        <div className="product-element-container-img">
                            <img className="product-element-img" src={product.image} alt={product.description} />
                        </div>

                        <div className="product-element-main">
                            <h3 className="product-name" >{product.name}</h3>
                            <p className="product-price" >{product.price.toLocaleString('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0 })}</p>
                            <p className="product-measures">{product.measures}</p>
                        </div>

                        <div className="product-container-description" ref={element => descriptions.current[id] = element}>
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
