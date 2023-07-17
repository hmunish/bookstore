import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [],
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, bookDetails) => {
      // Adds book on the state
      state.value.push(bookDetails);
    },
    removeBook: (state, bookDetails) => {
      // Removes book from the state
      state.value = state.value.filter(
        (book) => book.bookName !== bookDetails.bookName,
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
