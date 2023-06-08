import { useContext } from 'react'
import HomeSaleAd from '../home/HomeSaleAd'
import HomeSaleProduct from './HomeSaleProduct'
import { ProductContext } from '../../contexts/ProductContext'

const HomeSale = () => {

  const { data } = useContext(ProductContext)

  return (
      <div className='sale-container'>
        <div className='grid-sale-template'>
          <HomeSaleAd />
          {
          data.map(card => (
            <div key={card._id}>
              <HomeSaleProduct card={card} key={card._id} />
            </div>
          ))
        }
        </div>
      </div>
  )
}

export default HomeSale