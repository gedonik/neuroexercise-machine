import { configureStore } from '@reduxjs/toolkit';

import { catalogSlice } from './slices/catalogSlice';

export const store = configureStore({
  reducer: {
    catalogProducts: catalogSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
