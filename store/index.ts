
import { configureStore } from "@reduxjs/toolkit";
import userReducer  from "./user";



import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Lưu trữ trong Local Storage
// import rootReducer from './reducers'; // Thay rootReducer bằng reducer của bạn

const persistConfig = {
    key: 'root',
    storage,
  };
  
  const persistedReducerUser = persistReducer(persistConfig, userReducer);
  
  const store = configureStore({
    reducer: persistedReducerUser,
  });
  
  export const persistor = persistStore(store);
  
  export default store;