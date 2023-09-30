import { createSlice } from '@reduxjs/toolkit';

const cartInitialState = {
  items: [],
  totalAmount: 0,
  totalNumOfItems: 0
};

//Will upload the saved data in storage if there's one.
const storedCart = JSON.parse(localStorage.getItem('cart')) || cartInitialState;


const cartSlice = createSlice({
  name: 'cart',
  initialState: storedCart,
  reducers: {
    addItemToCart: (state, action) => {
      const newItem = action.payload;
      const existingItemIndex = state.items.findIndex(item => item.id === newItem.id);
      
      if (existingItemIndex !== -1) {
        state.items[existingItemIndex].quantity += 1;
      } else {
        state.items.push({ ...newItem, quantity: 1 });
      }

      state.totalNumOfItems += 1;
      state.totalAmount += newItem.price;
    },
    removeItemFromCart: (state, action) => {
      const id = action.payload;
      const existingItemIndex = state.items.findIndex(item => item.id === id);
      
      if (existingItemIndex !== -1) {
        state.totalAmount -= state.items[existingItemIndex].price * state.items[existingItemIndex].quantity;
        state.totalNumOfItems -= state.items[existingItemIndex].quantity;
        state.items.splice(existingItemIndex, 1);
      }
    },
    /*
    updateItemQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const existingItemIndex = state.items.findIndex(item => item.id === id);
      
      if (existingItemIndex !== -1) {
        const quantityDifference = quantity - state.items[existingItemIndex].quantity;
        state.totalNumOfItems += quantityDifference;

        const priceDifference = (quantity - state.items[existingItemIndex].quantity) * state.items[existingItemIndex].price;
        state.totalAmount += priceDifference;
        state.items[existingItemIndex].quantity = quantity;
      }
    },
    */
    incrementByOne: (state, action) => {
      const id = action.payload;
      const existingItemIndex = state.items.findIndex(item => item.id === id);

      if (existingItemIndex !== -1) {
          state.items[existingItemIndex].quantity += 1;
          state.totalNumOfItems += 1;
          state.totalAmount += state.items[existingItemIndex].price;
      }
    },
    decrementByOne: (state, action) => {
      const id = action.payload;
      const existingItemIndex = state.items.findIndex(item => item.id === id);

      if (existingItemIndex !== -1) {
          state.items[existingItemIndex].quantity -= 1;
          state.totalNumOfItems -= 1;
          state.totalAmount -= state.items[existingItemIndex].price;

          // If quantity is 0, remove the item from the cart
          if (state.items[existingItemIndex].quantity === 0) {
              state.items.splice(existingItemIndex, 1);
          }
      }
    },
    clearCart: (state) => {
      state.items = [];
      state.totalAmount = 0;
      state.totalNumOfItems = 0;
    },
  }
});

export const selectCartTotalAmount = (state) => state.cart.totalAmount;
export const selectCartNumberOfItems= (state) => state.cart.totalNumOfItems;
export const selectCartItems = (state) => state.cart.items;




export const { addItemToCart, removeItemFromCart, incrementByOne, decrementByOne ,clearCart } = cartSlice.actions;
export default cartSlice.reducer;
