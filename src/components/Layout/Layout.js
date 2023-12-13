import { useState } from 'react';
import { Link } from 'react-router-dom';
import { incrementByOne, decrementByOne, selectCartItems, selectCartNumberOfItems, selectCartTotalAmount } from '../../store/reducers/cartSlice';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import '../../styles/Layout.css';


function Layout({ children }) {
  const cartItems = useSelector(selectCartItems);
  const numOfItems = useSelector(selectCartNumberOfItems);
  const cartTotalPrice = useSelector(selectCartTotalAmount);
  const dispatch = useDispatch();

  const [isCartDropdownVisible, setIsCartDropdownVisible] = useState(false);


  const options = ['men', 'women', 'kids'];
  const generalOptions = ['bestsellers', 'newarrivals'];

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }


  const handleIncrement = (item) => {
    dispatch(incrementByOne(item))
  }

  const handleDecrement = (item) => {
    dispatch(decrementByOne(item));
  }

  const showCartDropdown = () => {
    setIsCartDropdownVisible(!isCartDropdownVisible);
  };

  const hideCartDropdown = () => {
    setIsCartDropdownVisible(false);
  };



  return (
    <div className="home-page" onClick={hideCartDropdown}>
      <header className="header">
        <Link className='logo-link' to='/'><h1 className="logo">My Fashion Store</h1></Link>
        <nav className='layoutnavbar'>
          {options.map(option => (
            <Dropdown >
              <DropdownTrigger>
                <Button
                  variant="ghost"
                  className='layout-button'
                  color='primary'
                >
                  {capitalizeFirstLetter(option)}
                </Button>
              </DropdownTrigger>
              <DropdownMenu aria-label="Static Actions">
                <DropdownItem key=""><Link className='nav-link men-link' to={`/${option}/shoes`}>Shoes</Link></DropdownItem>
                <DropdownItem key=""><Link className='nav-link men-link' to={`/${option}/tshirts`}>T-Shirts</Link></DropdownItem>
                <DropdownItem key=""><Link className='nav-link men-link' to={`/${option}/pants`}>Pants</Link></DropdownItem>
                <DropdownItem key=""><Link className='nav-link men-link' to={`/${option}/viewall`}>View All</Link></DropdownItem>
              </DropdownMenu>
            </Dropdown>
          ))}

          {generalOptions.map(option => (
            <Dropdown className='layout-dropdown'>
              <DropdownTrigger>
                <Button
                  variant="ghost"
                  className='layout-button'
                  color='primary'
                >
                  {capitalizeFirstLetter(option)}
                </Button>
              </DropdownTrigger>
              <DropdownMenu aria-label="Static Actions">
                <DropdownItem key=""><Link className='nav-link men-link' to={`/${option}/men`}>Men</Link></DropdownItem>
                <DropdownItem key=""><Link className='nav-link men-link' to={`/${option}/women`}>Women</Link></DropdownItem>
                <DropdownItem key=""><Link className='nav-link men-link' to={`/${option}/kids`}>Kids</Link></DropdownItem>
                <DropdownItem key=""><Link className='nav-link men-link' to={`/${option}/viewall`}>View All</Link></DropdownItem>
              </DropdownMenu>
            </Dropdown>
          ))}




          <Button
            variant="ghost"
            className='layout-button layout-cart-button'
            color='success'
            aria-label='Cart'
            onClick={showCartDropdown}
          >
            Cart
            <span className='layout-total-cart-quantity' style={numOfItems === 0 ? { backgroundColor: 'transparent' } : null}>{numOfItems > 0 ? numOfItems : ''}</span>
          </Button>
          <li className='layoutdropdown-cart-li'>
            <ul className={`layoutdropdown cartlayoutdropdown ${isCartDropdownVisible ? 'visible' : ''}`}
            >
              {cartItems.map(item => (
                <li key={item.id}>
                  <div className='layout-item-container'>
                    <img className='layout-cart-item-img' src={item.imgSrc} alt={item.description} />
                    <div className='layout-item-details'>
                      <p className='layout-item-detail' id='layout-item-name'>{item.name}</p>
                      <p className='layout-item-detail' id='layout-item-price'>${item.price} ea.</p>
                      <div>
                        <button onClick={() => handleDecrement(item.id)}>
                          <img className='cart-icon' src='/square-minus-regular.svg'></img>
                        </button>
                        <span className='cart-item-detail' id='layout-item-quantity'>{item.quantity}</span>
                        <button onClick={() => handleIncrement(item.id)}>
                          <img className='cart-icon' src='/square-plus-regular.svg'></img>
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
              {cartTotalPrice > 0 ? <li className='item-detail' id='cart-total-price'>Total Price: ${cartTotalPrice}</li> : 'Your cart is currently empty'}
              <br />
              <Link className='cart-link' to="/cart">
                <Button size='sm' variant="flat" color='success' className='gotocart-button'>
                  Go To Cart
                </Button>
              </Link>

            </ul>
          </li>
        </nav>
      </header>
      {children}
    </div>
  );
}

export default Layout;



