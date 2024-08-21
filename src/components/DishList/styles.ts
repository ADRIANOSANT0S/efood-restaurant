import { breakPointers } from './../../GlobalStyles/index'
import styled from 'styled-components'
import { ImageBg } from '../BackgroundImag/styles'
import { colors } from '../../GlobalStyles'

export const Main = styled.main`
  ${ImageBg} {
    position: relative;
    height: 280px;

    &::before {
      position: absolute;
      content: '';
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.8);
    }
  }
`
export const DishSection = styled.section`
  position: relative;
  padding: 24px 0 32px 0;
  display: flex;
  flex-direction: column;
  gap: 149px;
  height: 100%;
`

export const TitleCountry = styled.h2`
  color: ${colors.white};
  font-size: 32px;
  font-weight: 100;
  line-height: 37.5px;

  @media screen and (max-width: ${breakPointers.mobile}) {
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
  flex-wrap: wrap;
  margin: 0;

  @media screen and (min-width: ${breakPointers.mobile}) and (max-width: ${breakPointers.tablet}) {
    grid-template-columns: repeat(2, 1fr);
    align-items: stretch;
    justify-items: stretch;
    column-gap: 24px;
  }

  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
