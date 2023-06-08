import { MdAddShoppingCart } from "react-icons/md";
import { Link } from 'react-router-dom'


const HomeSaleProduct = ({ card }) => {

  return (
    <div className='sale-card'>
      <div className='image-container'>
        <Link to={`/productdetails/${card._id}`}>
          <img src={card.imageURL} />
        </Link>
      </div>
      <div className='product-title'>
        <p>{card.name}</p>
      </div>
      <div className='product-info'>
        <div className='sale-price'>
          <p>{card.price * 2},00 SEK</p>
          <p>{card.price},00 SEK</p>
        </div>
        <MdAddShoppingCart style={{color: '#a1a1a1'}}/>
      </div>
    </div>
  )
}

export default HomeSaleProduct