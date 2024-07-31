import Header from '../../components/Header'
import RestaurantList from '../../components/RestaurantList'

import { useGetRestaurantsQuery } from '../../services/api'

export type CardapioItem = {
  id: number
  foto: string
  preco: number
  nome: string
  descricao: string
  porcao: string
}

export type RestaurantsData = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: CardapioItem[]
}

const Restaurants = () => {
  const { data: restaurant } = useGetRestaurantsQuery()

  if (restaurant) {
    return (
      <>
        <Header isHome={true} />
        <RestaurantList restaurants={restaurant} />
      </>
    )
  } else {
    return <h3>Carregando...</h3>
  }
}

export default Restaurants
