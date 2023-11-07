import { createSlice } from "@reduxjs/toolkit";
import { data } from "../data";

const womenShoesItems = data.items.filter(item => item.category === 'Women Shoes');
const womenPantsItems = data.items.filter(item => item.category === 'Women Pants');
const womenTShirtsItems = data.items.filter(item => item.category === 'Women T-Shirts');

const womenInitialState = {
  items: [...womenShoesItems, ...womenPantsItems, ...womenTShirtsItems],
  filters: {
    type: [], 
    color: [],
    size: [],
    priceRange: { min: 0, max: 500 }
  }
};

const womenSlice = createSlice({
  name: 'women',
  initialState: womenInitialState,
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
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

      if (type) {
        if (type === 'all') {
          state.filters.type = [];
        } else if (!state.filters.type.includes(type)) {
          state.filters.type.push(type);
        } else {
          state.filters.type = state.filters.type.filter(t => t !== type);  // Remove if already present
        }
      }

      if (color) {
        if (color === 'all') {
          state.filters.color = [];
        } else if (!state.filters.color.includes(color)) {
          state.filters.color.push(color);
        } else {
          state.filters.color = state.filters.color.filter(c => c !== color);
        }
      }

      if (size) {
        if (size === 'all') {
          state.filters.size = [];
        } else if (!state.filters.size.includes(size)) {
          state.filters.size.push(size);
        } else {
          state.filters.size = state.filters.size.filter(s => s !== size);
        }
      }

      if (priceRange) state.filters.priceRange = priceRange;
    },
    clearFilters: (state) => {
      state.filters = {
        type: [],
        color: [],
        size: [],
        priceRange: { min: 0, max: 500 }
      };
    }
  }
});

export const selectWomenShoes = (state) => state.women.items.filter(item => item.category === 'Women Shoes');
export const selectWomenPants = (state) => state.women.items.filter(item => item.category === 'Women Pants');
export const selectWomenTShirts = (state) => state.women.items.filter(item => item.category === 'Women T-Shirts');
export const selectWomenAll = (state) => state.women.items;
export const selectSpecificItemFromWomen = (state, itemId) => state.women.items.find(item => item.id == itemId);
export const selectFilteredWomenItems = (state, startingState) => {
  let filteredItems = startingState;
  const { type, color, size, priceRange } = state.women.filters;

  if (type.length > 0) filteredItems = filteredItems.filter(item => type.includes(item.category));
  if (color.length > 0) filteredItems = filteredItems.filter(item => color.includes(item.color));
  if (size.length > 0) filteredItems = filteredItems.filter(item => size.includes(item.size));

  filteredItems = filteredItems.filter(item => item.price >= priceRange.min && item.price <= priceRange.max);

  return filteredItems;
};

export const selectCurrentFilters = (state) => state.women.filters;



export const { addItem, removeItem, updateItem, applyFilter, clearFilters } = womenSlice.actions;
export default womenSlice.reducer;



