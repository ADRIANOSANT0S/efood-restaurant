import { configureStore } from '@reduxjs/toolkit'

import cardReducer from './reducers/card'

import api from '../services/api'

const store = configureStore({
  reducer: {
    card: cardReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export default store

export type RootReducer = ReturnType<typeof store.getState>
