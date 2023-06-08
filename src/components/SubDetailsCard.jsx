import React from 'react'

const SubDetailsCard = ({card}) => {
  return (
    <div className='collection-card'>
      <div className='image-container'>
        <img src={card.imageURL} />
      </div>
    </div>
  )
}

export default SubDetailsCard