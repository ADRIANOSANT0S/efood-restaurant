import BackgroundImag from '../BackgroundImag'
import ImageLink from '../ImagLink'

import * as S from './styles'

import logo from '../../assets/images/logo.png'
import Instagram from '../../assets/images/social/instagram.png'
import Facebook from '../../assets/images/social/facebook.png'
import X from '../../assets/images/social/x.png'
import imageBg from '../../assets/images/imagem-bg.png'

const Footer = () => (
  <BackgroundImag
    url={imageBg}
    description="Imagem de garfos e colher em um fundo alaranjado"
  >
    <S.FooterContainer className="container">
      <div>
        <ImageLink to="/" image={logo} description="Logo da marca Efood" />
        <S.SocialLink>
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
        </S.SocialLink>
      </div>
      <S.TextFooter>
        A Efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </S.TextFooter>
    </S.FooterContainer>
  </BackgroundImag>
)

export default Footer
