import React, { useEffect, useRef, useState } from "react";
import "./products.css"


const CardProducts = ({ product, onProductClick }) => {

    useEffect(() => {
        mixitup(".container__products", {
            selectors: {
                target: ".card__product"
            },
            "animation": {
                "duration": 250,
                "nudge": true,
                "reverseOut": false,
                "effects": "fade translateZ(-100px)"
            }
        });
    }, []);




    return (


        <section onClick={() => onProductClick(product)} className={`mix ${product.category} card__product`}>
            <p className="card__product-materialOnImage">{product.material}</p>

            <div className="card__product-container-img">
                <img className="card__product-img card__product-img1" src={product?.images[0]} alt={product.description} />
                <img className="card__product-img card__product-img2" src={product?.images[1]} alt={product.description} />
            </div>

            <div className="card__product-main">
                <h3 className="card__product-name">{product.name}</h3>
                <p className="card__product-price">
                    {product.price.toLocaleString("es-CO", { style: "currency", currency: "COP", minimumFractionDigits: 0 })}
                </p>
            </div>

        </section>

    );
};

export default CardProducts;
