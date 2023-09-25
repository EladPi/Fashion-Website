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
              <a className='nav-link men-link'>Men</a>
              <ul className="layoutdropdown">
                <li><Link className='nav-link men-link' to="/men/shoes">Shoes</Link></li>
                <li><Link className='nav-link men-link' to="/men/t-shirts">T-Shirts</Link></li>
                <li><Link className='nav-link men-link' to="/men/pants">Pants</Link></li>
                <li><Link className='nav-link men-link' to="/men/viewall">VIEW All</Link></li>
              </ul>
            </li>
            <li>
              <a className='nav-link women-link'>Women</a>
              <ul className="layoutdropdown">
                <li><Link className='nav-link women-link' to="/women/shoes">Shoes</Link></li>
                <li><Link className='nav-link women-link' to="/women/t-shirts">T-Shirts</Link></li>
                <li><Link className='nav-link women-link' to="/women/pants">Pants</Link></li>
                <li><Link className='nav-link women-link' to="/women/viewall">VIEW All</Link></li>
              </ul>
            </li>
            <li>
              <a className='nav-link kids-link'>Kids</a>
              <ul className="layoutdropdown">
                <li><Link className='nav-link kids-link' to="/kids/shoes">Shoes</Link></li>
                <li><Link className='nav-link kids-link' to="/kids/t-shirts">T-Shirts</Link></li>
                <li><Link className='nav-link kids-link' to="/kids/pants">Pants</Link></li>
                <li><Link className='nav-link kids-link' to="/kids/viewall">VIEW All</Link></li>
              </ul>
            </li>
            <li>
              <a className='nav-link newarrivals-link'>New Arrivals</a>
              <ul className='layoutdropdown'>
                <li><Link className='nav-link newarrivals-link' to="/newarrivals/men">Men</Link></li>
                <li><Link className='nav-link newarrivals-link' to="/newarrivals/women">Women</Link></li>
                <li><Link className='nav-link newarrivals-link' to="/newarrivals/kids">Kids</Link></li>
                <li><Link className='nav-link newarrivals-link' to="/newarrivals/viewall">VIEW All</Link></li>
              </ul>
            </li>
            <li>
              <a className='nav-link bestsellers-link'>Best Sellers</a>
              <ul className='layoutdropdown'>
                <li><Link className='nav-link bestsellers-link' to="/bestsellers/men">Men</Link></li>
                <li><Link className='nav-link bestsellers-link' to="/bestsellers/women">Women</Link></li>
                <li><Link className='nav-link bestsellers-link' to="/bestsellers/kids">Kids</Link></li>
                <li><Link className='nav-link bestsellers-link' to="/bestsellers/viewall">VIEW All</Link></li>
              </ul>
            </li>
            <li>
              <a className='nav-link'>Cart<span className='layout-total-cart-quantity' style={numOfItems === 0 ? {backgroundColor: 'transparent'} : null}>{numOfItems > 0 ? numOfItems : ''}</span></a>
              <ul className="layoutdropdown cartlayoutdropdown">
                {cartItems.map(item => (
                  <li key={item.id}>
                    <div className='layout-item-container'>
                      <img src={item.imgSrc} alt={item.description}/>
                      <div className='layout-item-details'>
                      <p className='layout-item-detail' id='layout-item-name'>{item.name}</p>
                      <p className='layout-item-detail' id='layout-item-price'>${item.price} ea.</p>
                        <div>
                        <button className='btn btn-primary' id='layout-button-minus' onClick={() => handleDecrement(item.id)}>-</button>
                        <span className='cart-item-detail' id='layout-item-quantity'>{item.quantity}</span>
                        <button className='btn btn-primary' id='layout-button-plus' onClick={() => handleIncrement(item.id)}>+</button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
                {cartTotalPrice > 0 ? <li className='item-detail' id='cart-total-price'>Total Price: ${cartTotalPrice}</li> : 'Your cart is currently empty'}
                
                <Link className='cart-link' to="/cart"><button className='btn btn-info'>Go To Cart</button></Link>
                
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



