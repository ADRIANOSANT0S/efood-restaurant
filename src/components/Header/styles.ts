import styled from 'styled-components'
import { breakPointers, colors } from '../../GlobalStyles'
import { ButtonLink } from '../Button/styles'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 40px 0;
`

export const Text = styled.p`
  display: block;
  margin-top: 136px;
  font-weight: 900;
  font-size: 36px;
  line-height: 40px;
  text-align: center;
  color: ${colors.red};
  max-width: 544px;
`
export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 64px 0;

  ${ButtonLink} {
    color: ${colors.red};
    size: 18px;
    line-height: 22px;
    font-weight: 900;
    background-color: transparent;
  }

  @media screen and (max-width: ${breakPointers.tablet}) {
    justify-content: space-between;
  }

  @media screen and (max-width: ${breakPointers.mobile}) {
    flex-direction: column;
    gap: 24px;
  }
`
