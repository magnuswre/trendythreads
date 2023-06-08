import { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../../contexts/ProductContext";

const Products = () => {

  const { data } = useContext (ProductContext)
  console.log(data)

  
  return (
    <div className="products">
      {data.map(product => (
        <Link to={`/productdetails/${product._id}`} key={product._id}>
          <div className="productCard">
            <div className="image-container">
              <img
                alt={product.name}
                src={product.imageURL}
                style={{ display: "block", maxWidth: "100%" }}
              />
            </div>
            <div className="products-info">
              <p className="products-name">{product.name}</p>
              <p className="products-desc">{product.description}</p>
            </div>
            <div>
              <p className="price">Price: {product.price},00 SEK</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Products;
