import BackgroundImag from '../BackgroundImag'

import { FooterContainer, SocialLink, TextFooter } from './styles'

import logo from '../../assets/images/logo.png'
import Instagram from '../../assets/images/social/instagram.png'
import Facebook from '../../assets/images/social/facebook.png'
import x from '../../assets/images/social/x.png'
import imageBg from '../../assets/images/imagem-bg.png'

const Footer = () => (
  <BackgroundImag
    url={imageBg}
    description="Imagem de garfos e colher em um fundo alaranjado"
  >
    <FooterContainer className="container">
      <div>
        <img src={logo} alt="VETOR" />
        <SocialLink>
          <li>
            <a href="#">
              <img src={Instagram} alt="Logo Instagram" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={Facebook} alt="Logo Facebook" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={x} alt="Logo x" />
            </a>
          </li>
        </SocialLink>
      </div>
      <TextFooter>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </TextFooter>
    </FooterContainer>
  </BackgroundImag>
)

export default Footer
