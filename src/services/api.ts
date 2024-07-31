import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RestaurantsData } from '../pages/Home'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getRestaurants: builder.query<RestaurantsData[], void>({
      query: () => 'restaurantes'
    }),
    getDishes: builder.query<RestaurantsData, string>({
      query: (id) => `restaurantes/${id}`
    })
  })
})

export const { useGetRestaurantsQuery, useGetDishesQuery } = api

export default api
