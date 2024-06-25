import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import DishList from '../../components/DishList'
import Header from '../../components/Header'

import { RestaurantsData } from '../Home'

const DishesPage = () => {
  const { id } = useParams()
  const [restaurants, setRestaurants] = useState<RestaurantsData[]>([])

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setRestaurants([res]))
      .catch((error) => alert(`Erro ao buscar os dados: ${error}`))
  }, [id])

  if (!restaurants) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <Header isHome={false} />
      {restaurants.map((restaurant) => (
        <DishList
          key={restaurant.id}
          imgBg={restaurant.capa}
          title={restaurant.titulo}
          subTitle={restaurant.tipo}
          restaurantDishes={restaurant.cardapio}
        />
      ))}
    </>
  )
}

export default DishesPage
