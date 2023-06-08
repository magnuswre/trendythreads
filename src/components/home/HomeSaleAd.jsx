import React from 'react'
import { Link } from 'react-router-dom'

const HomeSaleAd = () => {
  return (
    <div className='sale-ad'>
      <p>UP FOR SALE</p>
      <h2>50% OFF</h2>
      <p>Get The Best Price!</p>
      <p>Hurry up before the sale ends!</p>
      <Link to='/product'>Discover More</Link>
    </div>
  )
}

export default HomeSaleAd