// src/components/Layout.js

import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { incrementByOne, decrementByOne, selectCartItems, selectCartNumberOfItems, selectCartTotalAmount } from '../../store/reducers/cartSlice';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
//import '../../styles/NewLayout.css'; // Assuming the styles for the header are here
import '../../styles/Layout.css'; // Assuming the styles for the header are here


function Layout({ children }) {
  const cartItems = useSelector(selectCartItems);
  const numOfItems = useSelector(selectCartNumberOfItems);
  const cartTotalPrice = useSelector(selectCartTotalAmount);
  const [menuActive, setMenuActive] = useState(false);
  const dispatch = useDispatch();

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const handleIncrement = (item) => {
    dispatch(incrementByOne(item))
  }

  const handleDecrement = (item) => {
    dispatch(decrementByOne(item));
  }


  return (
    <div className="home-page">
      <header className="header">
        <h1 className="logo">Your Store Name</h1>
        <nav className='layoutnavbar'>
          <ul>
            <li>
              <a>Men</a>
              <ul className="layoutdropdown">
                <li><Link to="/men/shoes">Shoes</Link></li>
                <li><Link to="/men/t-shirts">T-Shirts</Link></li>
                <li><Link to="/men/pants">Pants</Link></li>
                <li><Link to="/men/viewall">VIEW All</Link></li>
              </ul>
            </li>
            <li>
              <a>Women</a>
              <ul className="layoutdropdown">
                <li><Link to="/women/shoes">Shoes</Link></li>
                <li><Link to="/women/t-shirts">T-Shirts</Link></li>
                <li><Link to="/women/pants">Pants</Link></li>
                <li><Link to="/women/viewall">VIEW All</Link></li>
              </ul>
            </li>
            <li>
              <a>Kids</a>
              <ul className="layoutdropdown">
                <li><Link to="/kids/shoes">Shoes</Link></li>
                <li><Link to="/kids/t-shirts">T-Shirts</Link></li>
                <li><Link to="/kids/pants">Pants</Link></li>
                <li><Link to="/kids/viewall">VIEW All</Link></li>
              </ul>
            </li>
            <li>
              <a>New Arrivals</a>
              <ul className='layoutdropdown'>
                <li><Link to="/newarrivals/men">Men</Link></li>
                <li><Link to="/newarrivals/women">Women</Link></li>
                <li><Link to="/newarrivals/kids">Kids</Link></li>
                <li><Link to="/newarrivals/viewall">VIEW All</Link></li>
              </ul>
            </li>
            <li>
              <a>Best Sellers</a>
              <ul className='layoutdropdown'>
                <li><Link to="/bestsellers/men">Men</Link></li>
                <li><Link to="/bestsellers/women">Women</Link></li>
                <li><Link to="/bestsellers/kids">Kids</Link></li>
                <li><Link to="/bestsellers/viewall">VIEW All</Link></li>
              </ul>
            </li>
            <li>
              <a>Cart<span className='layout-total-cart-quantity'>{numOfItems > 0 ? numOfItems : ''}</span></a>
              <ul className="layoutdropdown cartlayoutdropdown">
                {cartItems.map(item => (
                  <li key={item.id}>
                    <div className='layout-item-container'>
                      <img src={item.imgSrc} alt={item.description}/>
                      <p className='layout-item-detail' id='layout-item-name'>{item.name}</p>
                      <p className='layout-item-detail' id='layout-item-price'>${item.price}</p>
                      <button className='layout-button' onClick={() => handleDecrement(item.id)}>-</button>
                      <span className='layout-item-detail' id='layout-item-quantity'>{item.quantity}</span>
                      <button className='layout-button' onClick={() => handleIncrement(item.id)}>+</button>
                    </div>
                  </li>
                ))}
                {cartTotalPrice > 0 ? <li className='item-detail' id='cart-total-price'>Total Price: ${cartTotalPrice}</li> : 'Your cart is currently empty'}
              </ul>
            </li>
          </ul>
        </nav>
      </header>
      {children}
    </div>
  );
}

export default Layout;

