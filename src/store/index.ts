import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
  reducer: {}
})

export default store

export type RootReducer = ReturnType<typeof store.getState>
