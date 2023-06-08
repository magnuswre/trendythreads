import { useState, useEffect } from 'react'
import HomeHero from '../components/home/HomeHero'
import Collection from '../components/home/Collection'
import HomeSale from '../components/home/HomeSale'
import TopSellers from '../components/home/TopSellers'
import NewsLetter from '../components/home/NewsLetter'
import ProductContextProvider from '../contexts/ProductContext'

const Home = () => {

  return (
    <div>
      <HomeHero />

      <ProductContextProvider limit={4}>
        <Collection />
      </ProductContextProvider>

      <ProductContextProvider limit={2}>
        <HomeSale />
      </ProductContextProvider>

      <ProductContextProvider>
        <TopSellers />
      </ProductContextProvider>

      <NewsLetter />
    </div>
  )
}

export default Home