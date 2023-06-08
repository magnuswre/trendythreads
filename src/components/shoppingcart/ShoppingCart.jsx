import { useContext, useState } from "react";
import { CartContext } from "../../contexts/CartContext";
import CartProduct from "./CartProduct";

const ShoppingCart = () => {
  const { cartItems, totalQuantity, removeFromCart, clearCart, incrementQuantity, decrementQuantity, checkOut } = useContext(CartContext);
  const [isToggled, setIsToggled] = useState(false);

  const calculateTotal = () => {
    let totalPrice = 0
    cartItems.forEach(item => {
      totalPrice = item.product.price * totalQuantity
    })
    return totalPrice
  }

  return (
    <div onClick={e => e.stopPropagation()}>
      {cartItems.length < 1 && (
        <div className="p-2 text-center">Your cart is empty.</div>
        )}
      {cartItems.map((item, index) => <CartProduct key={index + item.product._id} item={item} index={index} />)}
      <div className="dropdown-divider"></div>
      <div className="d-flex justify-content-between align-items-center p-2">
       <div className="price-info">
         <p className="m-0">Total: {calculateTotal()} SEK</p>
         <small className='text-muted'>incl. vat</small>
       </div>
       <div className="d-flex gap-2">
         <button className="btn btn-cart clear" onClick={clearCart}>Clear Cart</button>
         <button className="btn btn-cart info" onClick={checkOut}>Checkout</button>
        </div>
      </div>
    </div>
  )

};

export default ShoppingCart;
