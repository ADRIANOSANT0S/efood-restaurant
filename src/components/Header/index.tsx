import { useDispatch } from 'react-redux'

import { open } from '../../store/reducers/card'

import BackgroundImag from '../BackgroundImag'

import logo from '../../assets/images/logo.png'
import imageBg from '../../assets/images/imagem-bg.png'
import Button from '../Button'
import ImageLink from '../ImagLink'

import { Text, Container, NavContainer } from './styles'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

export type Props = {
  isHome: boolean
}

const Header = ({ isHome = false }: Props) => {
  const dispatch = useDispatch()

  const openCard = () => {
    dispatch(open())
  }

  const { items } = useSelector((state: RootReducer) => state.card)

  return (
    <header>
      <BackgroundImag
        url={imageBg}
        description="vetor laranja com figuras de garfos e colheres"
      >
        <div className="container">
          {isHome ? (
            <Container>
              <ImageLink
                to="/"
                image={logo}
                description="loga da marca Efood"
              />
              <Text>
                Viva experiências gastronômicas no conforto da sua casa
              </Text>
            </Container>
          ) : (
            <NavContainer>
              <Button type="link" to="/" title="Ir para página home" size="big">
                Restaurantes
              </Button>
              <ImageLink
                to="/"
                image={logo}
                description="Logo da marca Efood"
              />
              <Button
                type="button"
                onClick={openCard}
                title="Ir para o carrinho"
                size="big"
              >
                {items.length} Produtos(s) no carrinho
              </Button>
            </NavContainer>
          )}
        </div>
      </BackgroundImag>
    </header>
  )
}

export default Header
