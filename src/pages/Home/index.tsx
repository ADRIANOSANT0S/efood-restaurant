import Header from '../../components/Header'
import Loading from '../../components/Loading'
import RestaurantList from '../../components/RestaurantList'

import { useGetRestaurantsQuery } from '../../services/api'

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
    return <Loading />
  }
}

export default Restaurants
