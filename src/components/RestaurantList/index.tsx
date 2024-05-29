import Restaurant from '../Restaurant'
import { RestaurantsContainer } from './styles'
import RestaurantItem from '../../models/RestauranteItem'

type Props = {
  restaurants: RestaurantItem[]
}

const RestaurantList = ({ restaurants }: Props) => (
  <div className="container">
    <RestaurantsContainer>
      {restaurants.map((restaurantInfos) => (
        <Restaurant
          key={restaurantInfos.id}
          image={restaurantInfos.image}
          details={restaurantInfos.details}
          tags={restaurantInfos.infos}
          title={restaurantInfos.title}
          nota={restaurantInfos.nota}
          description={restaurantInfos.description}
        />
      ))}
    </RestaurantsContainer>
  </div>
)
export default RestaurantList
