import { configureStore } from '@reduxjs/toolkit';
import formState from '../slice/formSlice';

export const store = configureStore({
  reducer: {
    form: formState,
  },
});
