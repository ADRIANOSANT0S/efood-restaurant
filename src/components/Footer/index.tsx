import BackgroundImag from '../BackgroundImag'
import ImageLink from '../ImagLink'

import logo from '../../assets/images/logo.png'
import Instagram from '../../assets/images/social/instagram.png'
import Facebook from '../../assets/images/social/facebook.png'
import X from '../../assets/images/social/x.png'
import imageBg from '../../assets/images/imagem-bg.png'

import { FooterContainer, SocialLink, TextFooter } from './styles'

const Footer = () => (
  <BackgroundImag
    url={imageBg}
    description="Imagem de garfos e colher em um fundo alaranjado"
  >
    <FooterContainer className="container">
      <div>
        <ImageLink to="/" image={logo} description="Logo da marca Efood" />
        <SocialLink>
          <li>
            <ImageLink
              to="/"
              image={Instagram}
              description="Logo do Instagram"
            />
          </li>
          <li>
            <ImageLink to="/" image={Facebook} description="Logo do Facebook" />
          </li>
          <li>
            <ImageLink to="/" image={X} description="Logo do X" />
          </li>
        </SocialLink>
      </div>
      <TextFooter>
        A Efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </TextFooter>
    </FooterContainer>
  </BackgroundImag>
)

export default Footer
