import { configureStore } from '@reduxjs/toolkit';
import booksSlices from './books/booksSlice';

const store = configureStore({
  reducer: {
    books: booksSlices,
  },
});

export default store;
