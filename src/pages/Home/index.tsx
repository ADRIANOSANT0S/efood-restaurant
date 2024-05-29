import Header from '../../components/Header'
import RestaurantList from '../../components/RestaurantList'
import RestaurantItem from '../../models/RestauranteItem'

import japanese from '../../assets/images/restaurants/japanese.png'
import italian from '../../assets/images/restaurants/italian.png'

const Restaurant: RestaurantItem[] = [
  {
    id: 1,
    image: japanese,
    details: 'imagem de um prato de sushi',
    infos: ['Destaque da semana', 'Japonesa'],
    title: 'Hioki Sushi',
    nota: '4.9',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!'
  },
  {
    id: 2,
    image: italian,
    details: 'imagem de um prato de macarrão carbonara',
    infos: ['Italiana'],
    title: 'La Dolce Vita Trattoria',
    nota: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
  },
  {
    id: 3,
    image: italian,
    details: 'imagem de um prato de macarrão carbonara',
    infos: ['Italiana'],
    title: 'La Dolce Vita Trattoria',
    nota: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
  },
  {
    id: 4,
    image: italian,
    details: 'imagem de um prato de macarrão carbonara',
    infos: ['Italiana'],
    title: 'La Dolce Vita Trattoria',
    nota: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
  },
  {
    id: 4,
    image: italian,
    details: 'imagem de um prato de macarrão carbonara',
    infos: ['Italiana'],
    title: 'La Dolce Vita Trattoria',
    nota: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
  },
  {
    id: 5,
    image: italian,
    details: 'imagem de um prato de macarrão carbonara',
    infos: ['Italiana'],
    title: 'La Dolce Vita Trattoria',
    nota: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
  },
  {
    id: 5,
    image: italian,
    details: 'imagem de um prato de macarrão carbonara',
    infos: ['Italiana'],
    title: 'La Dolce Vita Trattoria',
    nota: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
  },
  {
    id: 6,
    image: italian,
    details: 'imagem de um prato de macarrão carbonara',
    infos: ['Italiana'],
    title: 'La Dolce Vita Trattoria',
    nota: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
  }
]

const Restaurants = () => (
  <>
    <Header isHome={true} />
    <RestaurantList restaurants={Restaurant} />
  </>
)

export default Restaurants
