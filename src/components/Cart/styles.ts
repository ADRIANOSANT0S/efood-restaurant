import styled from 'styled-components'
import { colors } from '../../GlobalStyles'
import { ButtonContainer } from '../Button/styles'

export const CartContainer = styled.div`
  &.hide {
    display: none;
  }

  &.show {
    display: block;
  }
`

export const CheckoutContainer = styled(CartContainer)``

export const CardEntry = styled.h3`
  font-size: 16px;
  font-weight: 500;
  color: ${colors.white2};
`

export const CardItem = styled.li`
  display: flex;
  padding: 8px 8px 12px 8px;
  background-color: ${colors.white2};
  color: ${colors.red};
  position: relative;
  height: 100px;
  margin-bottom: 16px;

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
  color: ${colors.orange};
  font-size: 16px;
  font-weight: 700;
  margin: 40px 0 16px 0;
`
