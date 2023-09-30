import { configureStore } from '@reduxjs/toolkit';
import menReducer from './reducers/menSlice';
import womenReducer from './reducers/womenSlice';
import kidsReducer from './reducers/kidsSlice';
import cartReducer from './reducers/cartSlice';
import bestSellersReducer from './reducers/bestSellersSlice'
import newArrivalsReducer from './reducers/newArrivalsSlice'


const rootReducer = {
  men: menReducer,
  women: womenReducer,
  kids: kidsReducer,
  bestSellers: bestSellersReducer,
  newArrivals: newArrivalsReducer,
  cart: cartReducer
};

const store = configureStore({
  reducer: rootReducer
});


//Save the cart in the local storage on every change.
store.subscribe(() => {
  localStorage.setItem('cart', JSON.stringify(store.getState().cart));
});



export default store;
