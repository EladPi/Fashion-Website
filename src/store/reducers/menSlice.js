import { createSlice } from '@reduxjs/toolkit';
import { data } from '../data';


/* Extracting the Shoes , Ptants and T-shirts from the state.   */ 
const menShoesItems = data.items.filter(item => item.category === 'Men Shoes');
const menPantsItems = data.items.filter(item => item.category === 'Men Pants');
const menTShirtsItems = data.items.filter(item => item.category === 'Men T-Shirts');

const menInitialState = {
  items: [...menShoesItems, ...menPantsItems, ...menTShirtsItems],
  filters: {
    type: '',
    color: '',
    size: '',
    priceRange: { min: 0, max: 500 } // Example price range
  }
};


// MEN SLICE
const menSlice = createSlice({
  name: 'men',
  initialState: menInitialState,
  reducers: {
    addItem: (state, action) => {
      // Adding the new item to the state's items array
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      // Removing the item from the state's items array based on its id
      state.items = state.items.filter(item => item.id !== action.payload.id);
    },
    updateItem: (state, action) => {
      const { id, ...updatedFields } = action.payload;
      const itemIndex = state.items.findIndex(item => item.id === id);
      if (itemIndex !== -1) {
        state.items[itemIndex] = {
          ...state.items[itemIndex],
          ...updatedFields
        };
      }
    },
    applyFilter: (state, action) => {
      const { type, color, size, priceRange } = action.payload;
      if (type) state.filters.type = type;
      if (color) state.filters.color = color;
      if (size) state.filters.size = size;
      if (priceRange) state.filters.priceRange = priceRange;
    },
    clearFilters: (state) => {
      state.filters = {
        type: '',
        color: '',
        size: '',
        priceRange: { min: 0, max: 500 }
      };
    }    
    // Other reducers will go here, like removeItem, updateItem, etc.
  }
});


/* SELECTORS */
export const selectMenShoes = (state) => state.men.items.filter(item => item.category === 'Men Shoes');
export const selectMenPants = (state) => state.men.items.filter(item => item.category === 'Men Pants');
export const selectMenTShirts = (state) => state.men.items.filter(item => item.category === 'Men T-Shirts');
export const selectMenAll = (state) => state.men.items;
export const selectSpecificItemFromMen = (state,itemId) => state.men.items.find(item => item.id == itemId);

export const { addItem, removeItem, updateItem, applyFilter , clearFilters } = menSlice.actions;
export default menSlice.reducer;
