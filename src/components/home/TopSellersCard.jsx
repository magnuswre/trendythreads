import React from 'react'

const TopSellersCard = ({ card }) => {
  return (
    <div className='top-sellers-card'>
      <div className='image-container'>
        <img src={card.imageURL} />
      </div>
      <div className='product-info'>
        <p>{card.name}</p>
        <p>{card.price},00 SEK</p>
      </div>
    </div>
  )
}

export default TopSellersCard