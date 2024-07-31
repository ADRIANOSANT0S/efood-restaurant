import { useParams } from 'react-router-dom'

import { useGetDishesQuery } from '../../services/api'

import DishList from '../../components/DishList'
import Header from '../../components/Header'

const DishesPage = () => {
  const { id } = useParams()
  const { data: restaurant, isLoading, error } = useGetDishesQuery(id!)

  if (isLoading) {
    return <h3>Carregando...</h3>
  }

  if (error) {
    return <h3>Erro ao buscar os dados.</h3>
  }

  if (!restaurant) {
    return <h3>Restaurante não encontrado</h3>
  }

  return (
    <>
      <Header isHome={false} />
      <DishList
        key={restaurant.id}
        imgBg={restaurant.capa}
        title={restaurant.titulo}
        subTitle={restaurant.tipo}
        restaurantDishes={restaurant.cardapio}
      />
    </>
  )
}

export default DishesPage
