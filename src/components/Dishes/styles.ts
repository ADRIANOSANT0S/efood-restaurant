import { breakPointers, colors } from './../../GlobalStyles/index'
import styled from 'styled-components'
import { Text } from '../Text/styles'

export const DishContainer = styled.li`
  max-width: 320px;
  height: 338px;
  padding: 8px;
  background-color: ${colors.red};

  img {
    width: 100%;
    height: 168px;
  }

  @media screen and (max-width: ${breakPointers.mobile}) {
    display: block;
    width: 90%;
    height: auto;
  }
`
export const Title = styled.h2`
  font-size: 16px;
  line-height: 18.75px;
  font-weight: 700;
  color: ${colors.orange};
`

export const InfosContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  ${Text} {
    max-width: 656px;
    width: 100%;
  }
`
export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  align-items: center;
  justify-content: center;

  &.visible {
    display: flex;
  }

  .overlay {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
  }
`
export const ModalContainer = styled.div`
  position: relative;
  display: flex;
  gap: 24px;
  padding: 32px;
  max-width: 1024px;
  width: 100%;
  height: 344px;
  z-index: 1000;
  background-color: ${colors.red};

  img {
    object-fit: contain;
    width: 280px;
    height: 280px;

    &:last-of-type {
      cursor: pointer;
    }
  }

  .close {
    position: absolute;
    top: 8px;
    right: 8px;
    width: 16px;
    height: 16px;
  }

  @media screen and (max-width: ${breakPointers.tablet}) {
    width: 90%;
  }

  @media screen and (max-width: ${breakPointers.mobile}) {
    max-width: 480px;
    display: flex;
    row-gap: 24px;
    flex-direction: column;
    width: 90%;
    height: auto;
    padding: 24px 16px 16px 16px;

    img {
      width: 100%;
    }
  }
`
export const TitleModal = styled.h3`
  font-size: 18px;
  line-height: 21.09px;
  font-weight: 900;
  color: ${colors.white};
  margin-bottom: 16px;
`
export const InfosModal = styled.div`
  > span {
    display: block;
    margin: 16px 0;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    color: ${colors.white};
  }
`
