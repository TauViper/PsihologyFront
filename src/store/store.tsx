import { configureStore } from '@reduxjs/toolkit';
import { singUpReducer } from './sigUpSlice.tsx';

export const store = configureStore({
  reducer: {
    singUp: singUpReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
