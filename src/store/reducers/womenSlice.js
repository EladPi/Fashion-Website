import { createSlice } from "@reduxjs/toolkit";
import { data } from "../data";

const womenShoesItems = data.items.filter(item => item.category === 'Women Shoes');
const womenPantsItems = data.items.filter(item => item.category === 'Women Pants');
const womenTShirtsItems = data.items.filter(item => item.category === 'Women T-Shirts');

const womenInitialState = {
  items: [...womenShoesItems, ...womenPantsItems, ...womenTShirtsItems],
  filters: {
    type: '',
    color: '',
    size: '',
    priceRange: { min: 0, max: 500 } // Example price range
  }
};

const womenSlice = createSlice({
  name: 'women',
  initialState: womenInitialState,
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

export const selectWomenShoes = (state) => state.women.items.filter(item => item.category === 'Women Shoes');
export const selectWomenPants = (state) => state.women.items.filter(item => item.category === 'Women Pants');
export const selectWomenTShirts = (state) => state.women.items.filter(item => item.category === 'Women T-Shirts');
export const selectWomenAll = (state) => state.women.items;
export const selectSpecificItemFromWomen = (state,itemId) => state.women.items.find(item => item.id == itemId);
  
  export const { addItem, removeItem, updateItem, applyFilter , clearFilters } = womenSlice.actions;
  export default womenSlice.reducer;
  


