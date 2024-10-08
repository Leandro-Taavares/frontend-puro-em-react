import { configureStore } from '@reduxjs/toolkit';
import reduxReact from './reduxReact'; 

export const store = configureStore({
  reducer: {
    brand: reduxReact, 
  },
});