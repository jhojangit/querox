import React from 'react'
import FilterProducts from '../assets/components/filter/FilterProducts'
import CardProducts from '../assets/components/products/CardProducts'
import AboutPage from '../assets/components/about/AboutPage'

const ProductsPage = () => {

    return (
        <main className='main__container'>
            <AboutPage/>
            <FilterProducts />
            <CardProducts />
        </main>
    )
}

export default ProductsPage