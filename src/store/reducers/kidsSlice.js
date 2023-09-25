import { createSlice } from "@reduxjs/toolkit";
import { data } from "../data";

const kidsShoesItems = data.items.filter(item => item.category === 'Kids Shoes');
const kidsPantsItems = data.items.filter(item => item.category === 'Kids Pants');
const kidsTShirtsItems = data.items.filter(item => item.category === 'Kids T-Shirts');

const kidsInitialState = {
  items: [...kidsShoesItems, ...kidsPantsItems, ...kidsTShirtsItems],
  filters: {
    type: '',
    color: '',
    size: '',
    priceRange: { min: 0, max: 500 } // Example price range
  }
};

const kidsSlice = createSlice({
  name: 'kids',
  initialState: kidsInitialState,
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

export const selectKidsShoes = (state) => state.kids.items.filter(item => item.category === 'Kids Shoes');
export const selectKidsPants = (state) => state.kids.items.filter(item => item.category === 'Kids Pants');
export const selectKidsTShirts = (state) => state.kids.items.filter(item => item.category === 'Kids T-Shirts');
export const selectKidsAll = (state) => state.kids.items;
export const selectSpecificItemFromKids = (state,itemId) => state.kids.items.find(item => item.id == itemId);

export const { addItem, removeItem, updateItem, applyFilter , clearFilters } = kidsSlice.actions;
export default kidsSlice.reducer;




