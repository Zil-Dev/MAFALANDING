import { configureStore } from '@reduxjs/toolkit'
import dataReducer from './features/default'


export const store = configureStore({
  reducer: {
    data: dataReducer,
  },
})