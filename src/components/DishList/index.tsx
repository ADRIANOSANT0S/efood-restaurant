import Dishes from '../Dishes'
import BackgroundImag from '../BackgroundImag'

import * as S from './styles'

type Props = {
  imgBg: string
  title: string
  subTitle: string
  restaurantDishes: MenuItem[]
}

const DishList = ({ imgBg, title, subTitle, restaurantDishes }: Props) => (
  <S.Main>
    <BackgroundImag url={imgBg} description={title}>
      <S.DishSection className="container">
        <S.TitleCountry>{subTitle}</S.TitleCountry>
        <S.RestaurantTitle as="h1">{title}</S.RestaurantTitle>
      </S.DishSection>
      <div className="overlay"></div>
    </BackgroundImag>
    <div className="container">
      <S.DishesList>
        {restaurantDishes.map((dish) => (
          <Dishes key={dish.id} restaurantDishes={dish} />
        ))}
      </S.DishesList>
    </div>
  </S.Main>
)

export default DishList
