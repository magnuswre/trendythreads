import React from 'react'
import ProductDetailInfo from '../components/products/ProductDetailInfo'
import ProductDetailDesc from '../components/products/ProductDetailDesc'
import ProductDetailHero from '../components/products/ProductDetailsHero';
import ProductDetailsProvider from '../contexts/ProductDetailContext';
import ProductContextProvider from '../contexts/ProductContext';

const ProductDetails = () => {



  return (
    <div>
      <ProductDetailHero />
      <ProductContextProvider>
        <ProductDetailsProvider>
          <ProductDetailInfo />
          <ProductDetailDesc />
        </ProductDetailsProvider>
      </ProductContextProvider>
    </div>
  )
}

export default ProductDetails