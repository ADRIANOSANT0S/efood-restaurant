import { CardapioItem } from '../../pages/Home'
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
  restaurantDishes: CardapioItem[]
}

const DishList = ({ imgBg, title, subTitle, restaurantDishes }: Props) => (
  <Main>
    <BackgroundImag url={imgBg} description={title}>
      <DishSection className="container">
        <TitleCountry>{subTitle}</TitleCountry>
        <RestaurantTitle as="h1">{title}</RestaurantTitle>
      </DishSection>
      <div className="overlay"></div>
    </BackgroundImag>
    <div className="container">
      <DishesList>
        {restaurantDishes.map((dish) => (
          <Dishes
            key={dish.id}
            img={dish.foto}
            title={dish.nome}
            description={dish.descricao}
            porcao={dish.porcao}
            foto={dish.foto}
            id={dish.id}
            preco={dish.preco}
          />
        ))}
      </DishesList>
    </div>
  </Main>
)

export default DishList
