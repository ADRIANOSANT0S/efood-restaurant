import Restaurant from '../Restaurant'

import { RestaurantsContainer } from './styles'

type Props = {
  restaurants: RestaurantsData[]
}

const RestaurantList = ({ restaurants }: Props) => (
  <div className="container">
    <RestaurantsContainer>
      {restaurants.map((restaurantInfos) => (
        <Restaurant
          key={restaurantInfos.id}
          image={restaurantInfos.capa}
          highline={restaurantInfos.destacado}
          type={restaurantInfos.avaliacao}
          title={restaurantInfos.titulo}
          nota={restaurantInfos.avaliacao}
          description={restaurantInfos.descricao}
          id={restaurantInfos.id}
        />
      ))}
    </RestaurantsContainer>
  </div>
)
export default RestaurantList
