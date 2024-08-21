import { useParams } from 'react-router-dom'

import DishList from '../../components/DishList'
import Header from '../../components/Header'
import Loading from '../../components/Loading'

import { useGetDishesQuery } from '../../services/api'

type DishesParams = {
  id: string
}

const DishesPage = () => {
  const { id } = useParams() as DishesParams
  const { data: restaurant, isLoading, error } = useGetDishesQuery(id)

  if (isLoading) {
    return <Loading />
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
