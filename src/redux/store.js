import { configureStore } from '@reduxjs/toolkit';
import booksSlices from './books/booksSlice';
import categoriesSlices from './categories/categoriesSlice';

const store = configureStore({
  reducer: {
    books: booksSlices,
    category: categoriesSlices,
  },
});

export default store;
