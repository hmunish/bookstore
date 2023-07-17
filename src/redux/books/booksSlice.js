import { v4 as uuidv4 } from "uuid";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [
    {
      item_id: uuidv4(),
      title: "The Great Gatsby",
      author: "John Smith",
      category: "Fiction",
      completed: 50,
    },
    {
      item_id: uuidv4(),
      title: "Anna Karenina",
      author: "Leo Tolstoy",
      category: "Fiction",
      completed: 75,
    },
    {
      item_id: uuidv4(),
      title: "The Selfish Gene",
      author: "Richard Dawkins",
      category: "Nonfiction",
      completed: 10,
    },
  ],
};

export const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBook: (state, bookDetails) => {
      // Adds book on the state
      state.value.push(bookDetails.payload);
    },
    removeBook: (state, bookId) => {
      // Removes book from the state
      state.value = state.value.filter(
        (book) => book.item_id !== bookId.payload
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
