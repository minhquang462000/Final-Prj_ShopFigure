import { createSlice } from '@reduxjs/toolkit';

export const addToLikeList = createSlice({
  name: 'addtoLikeList',
  initialState: { value: [] },
  reducers: {
    addProduct: (state, action) => {
      state.value.push(action.payload);
    },
    removeProduct: (state, action) => {
      let index = state.value.indexOf(action.payload);
      state.value.splice(index, 1);
    },
  },
});

export const { addProduct, removeProduct } = addToLikeList.actions;

export default addToLikeList.reducer;