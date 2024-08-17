
import { configureStore } from '@reduxjs/toolkit';
//import {createStore} from 'redux';
import productReducer from './productSlice';

//import rootReducer from './reducers';
//const store = createStore(rootReducer);

//export default store;

const store = configureStore({
    reducer: {
      products: productReducer,
    },
  });
  
export default store;
