import styled from 'styled-components'
import { ImageBg } from '../BackgroundImag/styles'
import { colors } from '../../GlobalStyles'

export const Main = styled.main`
  ${ImageBg} {
    height: 280px;
    position: relative;

    .overlay {
      position: absolute;
      content: '';
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.45);
      z-index: 0;
    }
  }
`
export const DishSection = styled.section`
  position: relative;
  padding: 24px 0 32px 0;
  display: flex;
  flex-direction: column;
  gap: 149px;
  z-index: 2;
  height: 100%;
`

export const TitleCountry = styled.h2`
  color: ${colors.white};
  font-size: 32px;
  font-weight: 100;
  line-height: 37.5px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`
export const RestaurantTitle = styled(TitleCountry)`
  font-weight: 900;
`

export const DishesList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  padding: 56px 0 120px 0;

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    justify-items: center;
    column-gap: 0;
  }

  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    gap: 24px;
  }
`
