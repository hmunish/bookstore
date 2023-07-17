import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [],
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checkStatus: (state, action) => {
      state.value = action.payload === 'Under construction'
        ? 'Under construction'
        : state.value;
    },
  },
});

// Action creators are generated for each case reducer function
export const { checkStatus } = categoriesSlice.actions;

export default categoriesSlice.reducer;
