import { useEffect, useState } from 'react'
import Header from '../../components/Header'
import RestaurantList from '../../components/RestaurantList'
import { useParams } from 'react-router-dom'

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
  const { id } = useParams()
  const [Restaurant, setRestaurant] = useState<RestaurantsData[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurant(res))
      .catch((error) => alert(`Erro ao buscar os dados: ${error}`))
  }, [id])

  if (!Restaurant) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <Header isHome={true} />
      <RestaurantList restaurants={Restaurant} />
    </>
  )
}

export default Restaurants
