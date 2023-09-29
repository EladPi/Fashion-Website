import { createSlice } from "@reduxjs/toolkit";
import { data } from "../data";

const kidsShoesItems = data.items.filter(item => item.category === 'Kids Shoes');
const kidsPantsItems = data.items.filter(item => item.category === 'Kids Pants');
const kidsTShirtsItems = data.items.filter(item => item.category === 'Kids T-Shirts');

const kidsInitialState = {
  items: [...kidsShoesItems, ...kidsPantsItems, ...kidsTShirtsItems],
  filters: {
    type: [],  // Now an array
    color: [],
    size: [],
    priceRange: { min: 0, max: 500 }
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

export const selectKidsShoes = (state) => state.kids.items.filter(item => item.category === 'Kids Shoes');
export const selectKidsPants = (state) => state.kids.items.filter(item => item.category === 'Kids Pants');
export const selectKidsTShirts = (state) => state.kids.items.filter(item => item.category === 'Kids T-Shirts');
export const selectKidsAll = (state) => state.kids.items;
export const selectSpecificItemFromKids = (state,itemId) => state.kids.items.find(item => item.id == itemId);

export const selectFilteredKidsItems = (state, startingState) => {
  let filteredItems = startingState;
  const { type, color, size, priceRange } = state.kids.filters;

  if (type.length > 0) filteredItems = filteredItems.filter(item => type.includes(item.category));
  if (color.length > 0) filteredItems = filteredItems.filter(item => color.includes(item.color));
  if (size.length > 0) filteredItems = filteredItems.filter(item => size.includes(item.size));

  // Assuming each item has a 'price' field
  filteredItems = filteredItems.filter(item => item.price >= priceRange.min && item.price <= priceRange.max);

  return filteredItems;
};


export const { addItem, removeItem, updateItem, applyFilter , clearFilters } = kidsSlice.actions;
export default kidsSlice.reducer;




