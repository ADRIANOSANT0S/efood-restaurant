import styled from 'styled-components'
import { colors } from '../../GlobalStyles'
import { ButtonContainer } from '../Button/styles'

export const Overlay = styled.div`
  position: absolute;
  content: '';
  top: 0;
  left: 0;
  width: 100%;
  height: 100dvh;
  background-color: #000;
  opacity: 0.7;
  z-index: 1;
`

export const CardContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100dvh;
  display: none;
  justify-content: flex-end;
  transition: 0.5 ease;

  &.is-open {
    display: flex;
    transition: 0.5 ease;
  }

  ul {
    display: flex;
    flex-direction: column;
    row-gap: 16px;
    margin-bottom: 40px;
  }
`

export const Aside = styled.aside`
  max-width: 360px;
  width: 100%;
  background-color: ${colors.red};
  padding: 32px 8px 0 8px;
  z-index: 10;

  /* Esse seletor deixa o último butão com a largura total */
  div > ${ButtonContainer}:last-of-type {
    width: 100%;
  }
`
export const CardItem = styled.li`
  display: flex;
  padding: 8px 8px 12px 8px;
  background-color: ${colors.white2};
  color: ${colors.red};
  position: relative;
  height: 100px;

  img {
    object-fit: cover;
    width: 80px;
    height: 80px;
    margin-right: 8px;
  }

  ${ButtonContainer} {
    background-color: transparent;
    position: absolute;
    right: 8px;
    bottom: 8px;
    padding: 0;

    img {
      margin: 0;
      width: 16px;
      height: 16px;
      right: 8px;
      bottom: 8px;
    }
  }
`

export const Title = styled.h3`
  font-weight: 900;
  font-size: 18px;
  line-height: 21.09px;
  margin-bottom: 16px;
`
export const Price = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
`

export const CardTotal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  color: ${colors.orange};
  font-size: 16px;
  font-weight: 700;
`
