import React, { useEffect, useRef } from "react";
import products from "../json/products.json";


const CardProducts = () => {

    useEffect(() => {
        mixitup(".container-products", {
            selectors: {
                target: ".product_element"
            },
            animation: {
                duration: 602,
                nudge: false,
                reverseOut: true,
                effects:
                    "fade translateX(20%) translateY(20%) translateZ(-100px) rotateX(90deg) rotateY(90deg) stagger(30ms)"
            }
        });
    }, []);





    const descriptions = useRef([]);

    const handleClick = (id) => {
        console.log(id);
        descriptions.current[id].classList.toggle("product-description-show");
    };




    return (
        <section className="container-products">
            {products.map((product, id) => (
                <div key={product.id} className={`mix ${product.category} product_element`}>
                    <div onClick={() => handleClick(id)} className="product-element-container-img">
                        <img className="product-element-img" src={product.image} alt={product.description} />
                    </div>

                    <div className="product-element-main">
                        <h3 className="product-name">{product.name}</h3>
                        <p className="product-price">
                            {product.price.toLocaleString("es-CO", { style: "currency", currency: "COP", minimumFractionDigits: 0 })}
                        </p>
                        <p className="product-measures">{product.measures}</p>
                    </div>

                    <div onClick={() => handleClick(id)} className="product-container-description" ref={(element) => (descriptions.current[id] = element)}>
                        <div className="product-list-container">
                            <p className="product-description-name">{product.description}</p>
                            {product.pockets.map((pocket, index) => (
                                <div key={index} className="porduct-description-list">
                                    <ul>
                                        <li>{pocket}</li>
                                    </ul>
                                </div>
                            ))}
                        </div>
                        <br />
                    </div>
                </div>
            ))}
        </section>
    );
};

export default CardProducts;
