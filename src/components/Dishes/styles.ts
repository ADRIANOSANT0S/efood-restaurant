import styled from 'styled-components'
import { colors } from '../../GlobalStyles'
import { Text } from '../TextP/styles'

export const DishContainer = styled.li`
  width: 320px;
  height: 338px;
  padding: 8px;
  background-color: ${colors.red};

  img {
    max-width: 304px;
    width: 100%;
    height: 168px;
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
    object-fit: all;
    width: 280px;
    height: 280px;
  }

  .close {
    position: absolute;
    top: 8px;
    right: 8px;
    width: 16px;
    height: 16px;
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
