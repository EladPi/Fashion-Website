import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectSpecificItemFromMen } from '../store/reducers/menSlice';
import { selectSpecificItemFromWomen } from '../store/reducers/womenSlice';
import { selectSpecificItemFromKids } from '../store/reducers/kidsSlice';
import { selectSpecificItemFromBestSellers } from '../store/reducers/bestSellersSlice';
import { selectSpecificItemFromNewArrivals } from '../store/reducers/newArrivalsSlice';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../store/reducers/cartSlice';
import { selectCartNumberOfItems } from '../store/reducers/cartSlice';
import '../styles/item.css'; // Assuming you'll have a separate CSS file for this component

export const Item = () => {
    const {category, itemId, itemName} = useParams();
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartNumberOfItems)
    const item = useSelector((state)=> {
        switch(category){
            case 'men':{
                return selectSpecificItemFromMen(state,itemId);
            }
            case 'women':{
                return selectSpecificItemFromWomen(state,itemId);
            }
            case 'kids':{
                return selectSpecificItemFromKids(state,itemId)
            }
            case 'bestsellers':{
                return selectSpecificItemFromBestSellers(state,itemId);
            }
            case 'newarrivals':{
                return selectSpecificItemFromNewArrivals(state,itemId)
            }
            default:{
                return null
            }
        }
    })

    const handleAddToCart = (item) => {
        //console.log(item);
        console.log(cartItems)
        dispatch(addItemToCart(item));
    }
    

    return (
        <div className="item-container">
            <img src={item.imgSrc} alt={item.name} className="item-image" />
            <h2 className="item-name">{item.name}</h2>
            <p className="item-description">{item.description}</p>
            <p className="item-price">${item.price}</p>
            <button onClick={() => handleAddToCart(item)} className="add-to-cart-btn">
                Add to Cart
            </button>
        </div>
    );
}

export default Item;
