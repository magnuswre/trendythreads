import React from 'react'
import details_header from '../../assets/details-header.jpg'




const ProductDetailHero = () => {
    return (
        <div className='product-details-hero'>
            <div className='hero-image'>
                <img src={details_header} alt="Placeholder" />
            </div>
        </div>
    )
}

export default ProductDetailHero