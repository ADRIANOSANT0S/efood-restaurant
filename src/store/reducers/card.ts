import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type RestaurantState = {
  items: MenuItem[]
  isOpen: boolean
}

const initialState: RestaurantState = {
  items: [],
  isOpen: false
}

const cardSlice = createSlice({
  name: 'restaurant',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<MenuItem>) => {
      const item = state.items.find((item) => item.id === action.payload.id)
      if (!item) {
        state.items.push(action.payload)
      } else {
        alert('Prato já está no carrinho')
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    }
  }
})

export const { add, remove, open, close } = cardSlice.actions
export default cardSlice.reducer
