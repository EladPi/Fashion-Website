import { incrementByOne, decrementByOne, selectCartItems, selectCartNumberOfItems, selectCartTotalAmount } from '../../store/reducers/cartSlice';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { PaymentForm } from './PaymentForm';
import '../../styles/cart.css';


export function Cart() {
    const cartItems = useSelector(selectCartItems);
    const numOfItems = useSelector(selectCartNumberOfItems);
    const cartTotalPrice = useSelector(selectCartTotalAmount);
    const dispatch = useDispatch();

    const handleIncrement = (item) => {
        dispatch(incrementByOne(item))
    }

    const handleDecrement = (item) => {
        dispatch(decrementByOne(item));
    }

    return (
        <>
            {cartTotalPrice <= 0 ? <h3>Your cart is currently empty. <br /> Please explore the website and add items into your cart!</h3> :
                <ul className='cartul'>
                    {cartItems.map(item => (
                        <li key={item.id}>
                            <div className='cart-item-container'>
                                <img src={item.imgSrc} alt={item.description} />
                                <div className='cart-item-details'>
                                    <p className='cart-item-detail' id='cart-item-name'>{item.name}</p>
                                    <p className='cart-item-detail' id='cart-item-price'>${item.price} ea.</p>
                                    <button className='btn btn-primary' onClick={() => handleDecrement(item.id)}>-</button>
                                    <span className='cart-item-detail' id='layout-item-quantity'>{item.quantity}</span>
                                    <button className='btn btn-primary' onClick={() => handleIncrement(item.id)}>+</button>

                                </div>
                            </div>
                        </li>
                    ))}
                    <li className='item-detail' id='cart-total-price'>Total Price: ${cartTotalPrice}</li>
                </ul>
            }
            {cartTotalPrice > 0 ? <PaymentForm /> : null}

        </>
    )
}