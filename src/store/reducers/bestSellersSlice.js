import { createSlice } from '@reduxjs/toolkit';
import { data } from '../data';


//Taking the first 2 object of each category and adding
//them to bestSellers.
function getBestSellers(data) {
    const categories = ['Men Shoes', 'Men Pants', 'Men T-Shirts', 'Women Shoes', 'Women Pants', 'Women T-Shirts', 'Kids Shoes', 'Kids Pants', 'Kids T-Shirts'];
    const bestSellers = [];

    categories.forEach(category => {
        const itemsFromCategory = data.items.filter(item => item.category === category).slice(0, 2);
        bestSellers.push(...itemsFromCategory);
    });

    return bestSellers;
}

const bestSellersInitialState = {
  items: [...getBestSellers(data)],
  filters: {
    type: [],  // Now an array
    color: [],
    size: [],
    priceRange: { min: 0, max: 500 }
  }
};



// BESTSELLERS SLICE
const bestSellersSlice = createSlice({
  name: 'bestSellers',
  initialState: bestSellersInitialState,
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
export const selectBestSellersMen = (state) => state.bestSellers.items.filter(item => /\bMen\b/.test(item.category)); 
export const selectBestSellersWomen = (state) => state.bestSellers.items.filter(item => item.category.includes('Women'));
export const selectBestSellersKids = (state) => state.bestSellers.items.filter(item =>item.category.includes('Kids'));
export const selectBestSellersAll = (state) => state.bestSellers.items;

/*
MIGHT BE POSSIBLE TO DELETE.
export const selectBestSellersShoes = (state) => state.bestSellers.items.filter(item => item.category === 'Men Shoes' || item.category === 'Women Shoes' || item.category === 'Kids Shoes');
export const selectBestSellersPants = (state) => state.bestSellers.items.filter(item => item.category === 'Men Pants' || item.category === 'Women Pants' || item.category === 'Kids Pants');
export const selectBestSellersTShirts = (state) => state.bestSellers.items.filter(item => item.category === 'Men T-Shirts' || item.category === 'Women T-Shirts' || item.category === 'Kids T-Shirts' );
*/

export const selectSpecificItemFromBestSellers = (state,itemId) => state.bestSellers.items.find(item => item.id == itemId);

export const selectFilteredBestSellersItems = (state, startingState) => {
  let filteredItems = startingState;
  const { type, color, size, priceRange } = state.bestSellers.filters;

  if (type.length > 0) filteredItems = filteredItems.filter(item => type.includes(item.category));
  if (color.length > 0) filteredItems = filteredItems.filter(item => color.includes(item.color));
  if (size.length > 0) filteredItems = filteredItems.filter(item => size.includes(item.size));

  // Assuming each item has a 'price' field
  filteredItems = filteredItems.filter(item => item.price >= priceRange.min && item.price <= priceRange.max);

  return filteredItems;
};


export const { addItem, removeItem, updateItem, applyFilter , clearFilters } = bestSellersSlice.actions;
export default bestSellersSlice.reducer;
