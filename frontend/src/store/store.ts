// src/store/store.ts

import { configureStore } from '@reduxjs/toolkit'
import authReducer from './authSlice'
import remesaReducer from './remesaSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    remesa: remesaReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch