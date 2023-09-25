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
    type: '',
    color: '',
    size: '',
    priceRange: { min: 0, max: 500 } // Example price range
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
export const selectBestSellersMen = (state) => state.bestSellers.items.filter(item => /\bMen\b/.test(item.category)); 
export const selectBestSellersWomen = (state) => state.bestSellers.items.filter(item => item.category.includes('Women'));
export const selectBestSellersKids = (state) => state.bestSellers.items.filter(item =>item.category.includes('Kids'));
export const selectBestSellersAll = (state) => state.bestSellers.items;


export const selectBestSellersShoes = (state) => state.bestSellers.items.filter(item => item.category === 'Men Shoes' || item.category === 'Women Shoes' || item.category === 'Kids Shoes');
export const selectBestSellersPants = (state) => state.bestSellers.items.filter(item => item.category === 'Men Pants' || item.category === 'Women Pants' || item.category === 'Kids Pants');
export const selectBestSellersTShirts = (state) => state.bestSellers.items.filter(item => item.category === 'Men T-Shirts' || item.category === 'Women T-Shirts' || item.category === 'Kids T-Shirts' );
export const selectSpecificItemFromBestSellers = (state,itemId) => state.bestSellers.items.find(item => item.id == itemId);

export const { addItem, removeItem, updateItem, applyFilter , clearFilters } = bestSellersSlice.actions;
export default bestSellersSlice.reducer;
