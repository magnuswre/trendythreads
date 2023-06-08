import React from 'react'

const TopPost = ({ card }) => {
  return (
      <div className='top-post-card'>
        <div className='image-container'>
          <img src={card.imageURL} alt={card.name} />
        </div>
        <div className='post-info'>
          <div className='post-product'>
            <p>{card.name}</p>
            <p>{card.description}</p>
          </div>
          <div className='post-comment'>
            <p>POSTED BY: ADMIN</p>
            <p>COMMENTS 6</p>
          </div>
        </div>
      </div>
  )
}

export default TopPost