import { Route, Routes } from 'react-router-dom'

import Restaurants from './pages/Home'
import Dishes from './pages/DishesPage'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Restaurants />} />
    <Route path="/pratos" element={<Dishes />} />
  </Routes>
)

export default Rotas
