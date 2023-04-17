import products from "../json/products";

const CardProducts = () => {

    return (
        <section className="container-products">
            {
                products.map(product => (
                    <div className="product_element" key={product.id}>
                        <div className="product-element-container-img">
                            <img className="product-element-img" src={product.image} alt={product.description} />
                        </div>
                        <div className="product-element-main">
                            <h3 className="product-name" >{product.name}</h3>
                            <p className="product-price" >{product.price.toLocaleString('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0 })}</p>
                            <p className="product-measures">{product.measures}</p>
                        </div>

                    </div>
                ))
            }
        </section>
    )
}


export default CardProducts