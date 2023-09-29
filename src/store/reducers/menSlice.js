import { createSlice } from '@reduxjs/toolkit';
import { data } from '../data';


/* Extracting the Shoes , Ptants and T-shirts from the state.   */
const menShoesItems = data.items.filter(item => item.category === 'Men Shoes');
const menPantsItems = data.items.filter(item => item.category === 'Men Pants');
const menTShirtsItems = data.items.filter(item => item.category === 'Men T-Shirts');

const menInitialState = {
  items: [...menShoesItems, ...menPantsItems, ...menTShirtsItems],
  filters: {
    type: [],  // Now an array
    color: [],
    size: [],
    priceRange: { min: 0, max: 500 }
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
      
      if(type) {
        if(type === 'all') {
          state.filters.type = [];
        } else if(!state.filters.type.includes(type)) {
          state.filters.type.push(type);
        } else {
          state.filters.type = state.filters.type.filter(t => t !== type);  // Remove if already present
        }
      }
    
      // Repeat similar logic for color and size
      if(color) {
        if(color === 'all') {
          state.filters.color = [];
        } else if(!state.filters.color.includes(color)) {
          state.filters.color.push(color);
        } else {
          state.filters.color = state.filters.color.filter(c => c !== color);
        }
      }
    
      if(size) {
        if(size === 'all') {
          state.filters.size = [];
        } else if(!state.filters.size.includes(size)) {
          state.filters.size.push(size);
        } else {
          state.filters.size = state.filters.size.filter(s => s !== size);
        }
      }
      
      if(priceRange) state.filters.priceRange = priceRange;
    },
    clearFilters: (state) => {
      state.filters = {
        type: [],
        color: [],
        size: [],
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
export const selectSpecificItemFromMen = (state, itemId) => state.men.items.find(item => item.id == itemId);
export const selectFilteredMenItems = (state, startingState) => {
  let filteredItems = startingState;
  const { type, color, size, priceRange } = state.men.filters;

  if (type.length > 0) filteredItems = filteredItems.filter(item => type.includes(item.category));
  if (color.length > 0) filteredItems = filteredItems.filter(item => color.includes(item.color));
  if (size.length > 0) filteredItems = filteredItems.filter(item => size.includes(item.size));

  // Assuming each item has a 'price' field
  filteredItems = filteredItems.filter(item => item.price >= priceRange.min && item.price <= priceRange.max);

  return filteredItems;
};



export const { addItem, removeItem, updateItem, applyFilter, clearFilters } = menSlice.actions;
export default menSlice.reducer;
