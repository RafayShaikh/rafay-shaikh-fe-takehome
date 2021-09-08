import { configureStore } from '@reduxjs/toolkit';
import formState from '../slice/formSlice';

//Simple Store with the formSlice
export const store = configureStore({
  reducer: {
    form: formState,
  },
});
