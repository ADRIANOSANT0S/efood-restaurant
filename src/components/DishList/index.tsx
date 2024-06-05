import Dish from '../../models/Dish'
import Dishes from '../Dishes'
import BackgroundImag from '../BackgroundImag'

import {
  Main,
  DishSection,
  TitleCountry,
  RestaurantTitle,
  DishesList
} from './styles'

type Props = {
  imgBg: string
  title: string
  subTitle: string
  dishes: Dish[]
}

const DishList = ({ imgBg, title, subTitle, dishes }: Props) => (
  <Main>
    <BackgroundImag url={imgBg} description={title}>
      <DishSection className="container">
        <TitleCountry>{subTitle}</TitleCountry>
        <RestaurantTitle as="h1">{title}</RestaurantTitle>e
      </DishSection>
    </BackgroundImag>
    <div className="container">
      <DishesList>
        {dishes.map((dish) => (
          <Dishes
            key={dish.id}
            img={dish.img}
            title={dish.title}
            description={dish.description}
          />
        ))}
      </DishesList>
    </div>
  </Main>
)

export default DishList
