import { useContext } from 'react'
import TopSellersCard from './TopSellersCard'
import { Link } from 'react-router-dom'
import TopPost from './TopPost'
import { ProductContext } from '../../contexts/ProductContext'

const TopSellers = () => {

  const { data } = useContext(ProductContext)
  
  const topCard = [3, 5, 8, 6, 2, 0];
  const topPost = [1, 4, 7];

  return (
    <>
    <div className='top-sellers-container'>
      <h3>Top selling products this week</h3>
      <div className='top-sellers-grid-template'>
        {
          data.map((card, index) => {
            if (topCard.includes(index)) {
              return (
                <div key={card._id}>
                  <Link to={`/productdetails/${card._id}`}>
                    <TopSellersCard card={card} key={card._id} />
                  </Link>
                </div>
              )
            }
            return null
          })
        }
      </div>
    </div>
    <div className='top-post-container'>
      <div className='top-post-grid-template'>
        {
          data.map((card, index) => {
            if (topPost.includes(index)) {
              return (
                <div key={card._id}>
                  <Link to={`/productdetails/${card._id}`}>
                    <TopPost card={card} key={card._id} />
                  </Link>
                </div>
              )
            }
            return null
          })
        }
      </div>
    </div>
    </>
  )
}

export default TopSellers