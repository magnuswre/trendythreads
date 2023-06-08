import { useState } from 'react'

const CollectionCard = ({ card }) => {

  return (
    <div className='collection-card'>
      <div className='image-container'>
        <img src={card.imageURL} />
      </div>
      <p>{card.name}</p>
      <p>{card.price},00 SEK</p>
    </div>
  )
}

export default CollectionCard