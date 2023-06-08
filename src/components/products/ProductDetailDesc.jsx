import React, { useContext } from 'react';
import { ProductDetailContext } from '../../contexts/ProductDetailContext';
import CollectionCard from '../home/CollectionCard';
import { ProductContext } from '../../contexts/ProductContext';
import { Link } from 'react-router-dom'
import SubDetailsCard from '../SubDetailsCard';

const ProductDetailDesc = () => {

  const { data } = useContext(ProductDetailContext)
  const { data: product} = useContext(ProductContext)

  const related4 = [5, 1, 3, 8]
  const related5 = [0, 4, 3, 8, 2]

  return (
  <>
    <div className="additional-info-container">
    <div className="button-row">
      <button className="tab-button selected"><a href="#">Description</a></button>
      <button className="tab-button"><a href="#">Additional Info</a></button>
      <button className="tab-button"><a href="#">Reviews</a></button>
      <button className="tab-button"><a href="#">Shipping &amp; Delivery</a></button>
    </div>
    <div className="tab-content">
      <div className="tab-text">
        <h3>{data.name}</h3>
        <div className="text-and-image">
          <p>{data.description}</p>
          <div className='image-container'>
            <img src={data.imageURL} alt={data.name} />
          </div>
        </div>
      </div>
    </div>
  <div>
    <div className='collection-container'>
    <h2>Related products</h2>
    <div className='grid-collection-template'>
      {
        product.map((card, index) => {
          if (related4.includes(index)) {
            return (
              <div key={card._id}>
                <Link to={
                  `/productdetails/${card._id}`} key={card._id}>
                  <CollectionCard card={card} key={card._id} />
                </Link>
              </div>
            )
          }
          return null
        })
      }
    </div>
    </div>
  </div>
  </div>
  <div className='collection-container sub-footer'>
    <div className='grid-sub-template'>
      {
        product.map((card, index) => {
          if (related5.includes(index)) {
            return (
              // <p>{card.imageURL}</p>
              <div key={card._id}>
                <Link to={
                  `/productdetails/${card._id}`} key={card._id}>
                  <SubDetailsCard card={card} key={card._id} />
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
  
  );
};

export default ProductDetailDesc;