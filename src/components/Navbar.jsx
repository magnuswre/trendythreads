import React, { useContext, useEffect } from 'react'
import { FaTshirt } from "react-icons/fa";
import { BsSearch, BsCart3 } from "react-icons/bs";
import { NavLink } from 'react-router-dom';
import ShoppingCart from './shoppingcart/ShoppingCart';
import { CartContext } from '../contexts/CartContext';
import { UserContext } from '../contexts/UserContext';

const Navbar = () => {
  const { user, setUser } = useContext(UserContext)

  const { totalQuantity } = useContext(CartContext);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
  };

  return (
    <div className='header'>
      <div className='title-logo'>
        <FaTshirt size={35} />
        <h1>TRENDY THREADS</h1>
      </div>
      <div className='navigation'>
        <li>
          <NavLink to='/'>HOME</NavLink>
        </li>
        <li>
          <NavLink to='/product'>PRODUCT</NavLink>
        </li>
        <li>
          <NavLink to='/contact'>CONTACT</NavLink>
        </li>
        <li>
          <NavLink to='/aboutus'>ABOUT US</NavLink>
        </li>
        {user ? (
          <>
          <NavLink to='/userprofile'>
            <li className='text-uppercase'>{user}</li>
          </NavLink>
            <li>
              <button className='btn btn-danger btn-sm' onClick={handleLogout}>Logout</button>
            </li>
          </>
        ) : (
          <li>
            <NavLink to='/login'>LOGIN</NavLink>
          </li>
        )}
        <li>
          <BsSearch />
        </li>
        <li className='nav-item dropdown'>
          <div
            className='nav-link'
            role='button'
            data-bs-toggle='dropdown'
            aria-expanded='false'
          >
            <BsCart3 size={30} />
            {totalQuantity > 0 && <span className='rounded-pill'>{totalQuantity}</span>}
          </div>
          <ul className='dropdown-menu dropdown-menu-end shopping-cart'>
            <ShoppingCart />
          </ul>
        </li>
      </div>
    </div>
  );
}

export default Navbar