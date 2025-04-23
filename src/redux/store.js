import { configureStore } from '@reduxjs/toolkit'
import dataReducer from './features/default'
import alertasReducer from './features/alertas'

export const store = configureStore({
  reducer: {
    data: dataReducer,
    alertas: alertasReducer,
  },
})