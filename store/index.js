import { configureStore } from '@reduxjs/toolkit';
import { addToLikeList } from './AddToLikeList';

const store = configureStore({
  reducer: {
    addToLikeList: addToLikeList.reducer,
  },
});

export default store;