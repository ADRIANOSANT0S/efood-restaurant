import styled from 'styled-components'
import { colors } from '../../GlobalStyles'

export const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 40px;
`

export const SocialLink = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 32px 0 80px;
  gap: 8px;
`

export const TextFooter = styled.p`
  color: ${colors.red};
  text-align: center;
  font-weight: bold;
  font-size: 10px;
  line-height: 12px;
  max-width: 488px;
  width: 100%;
`
