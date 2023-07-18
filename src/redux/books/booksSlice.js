import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const APP_ID = 'cvyaRivZIi68x1gZMrIT';

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  try {
    const res = await axios.get(
      `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${APP_ID}/books`,
    );
    return res.data;
  } catch (err) {
    return err;
  }
});

export const addNewBook = createAsyncThunk(
  'books/addNewBook',
  async (newBook) => {
    try {
      const res = await axios.post(
        `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${APP_ID}/books`,
        newBook,
        {
          'Content-Type': 'application/json',
        },
      );
      return res.data;
    } catch (err) {
      return err;
    }
  },
);

const initialState = {
  loading: false,
  value: [],
  error: null,
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, bookDetails) => {
      // Adds book on the state
      state.value.push(bookDetails.payload);
    },
    removeBook: (state, bookId) => {
      // Removes book from the state
      state.value = state.value.filter(
        (book) => book.item_id !== bookId.payload,
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.loading = false;
      state.value = action.payload || {};
      state.error = '';
    });
    builder.addCase(fetchBooks.rejected, (state, action) => {
      state.loading = false;
      state.value = [];
      state.error = action.error.message;
    });
    builder.addCase(addNewBook.fulfilled, (state, action) => {
      const newBookId = action.meta.arg.item_id;
      state.value[newBookId] = [
        {
          title: action.meta.arg.title,
          author: action.meta.arg.author,
          category: action.meta.arg.category,
        },
      ];
    });
  },
});

// Action creators are generated for each case reducer function
export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
