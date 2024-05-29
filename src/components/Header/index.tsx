import { Text, Container, NavContainer } from './styles'

import BackgroundImag from '../BackgroundImag'

import logo from '../../assets/images/logo.png'
import imageBg from '../../assets/images/imagem-bg.png'
import Button from '../Button'
import { Link } from 'react-router-dom'

export type Props = {
  isHome: boolean
}

const Header = ({ isHome = false }: Props) => (
  <header>
    <BackgroundImag
      url={imageBg}
      description="vetor laranja com figuras de garfos e colheres"
    >
      <div className="container">
        {isHome ? (
          <Container>
            <Link to="/">
              <img src={logo} alt="Logo E-food" />
            </Link>
            <Text>Viva experiências gastronômicas no conforto da sua casa</Text>
          </Container>
        ) : (
          <NavContainer>
            <Button type="link" to="/" title="Ir para página home">
              Restaurantes
            </Button>
            <Link to="/">
              <img src={logo} alt="Logo E-food" />
            </Link>
            <Button type="link" to="/" title="Ir para o carrinho">
              0 Produtos(s) no carrinho
            </Button>
          </NavContainer>
        )}
      </div>
    </BackgroundImag>
  </header>
)

export default Header
