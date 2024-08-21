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

export const SidebarContainer = styled.div`
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
