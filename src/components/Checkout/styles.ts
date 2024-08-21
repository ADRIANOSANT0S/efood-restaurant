import styled from 'styled-components'
import { colors } from '../../GlobalStyles'
import { ButtonContainer } from '../Button/styles'
import { Text } from '../TextP/styles'

export type SizeProp = {
  $widthElement?: number
}

export const DataSendOrder = styled.div`
  display: none;
`

export const DataConfirmationOrder = styled(DataSendOrder)``

export const title = styled.h2`
  font-size: 16px;
  font-weight: 700;
  line-height: 18.75px;
  color: ${colors.orange};
  margin-bottom: 16px;
`

export const InputGroup = styled.div`
  display: block;
  max-width: 344px;
  width: 100%;
  margin-top: 8px;

  font-size: 14px;
  font-weight: 700;
  line-height: 16.41px;

  label {
    color: ${colors.orange};
  }

  input {
    margin-top: 8px;
    width: 100%;
    background-color: ${colors.orange};
    padding: 8px;
    color: ${colors.black};
    font-weight: 700;
    outline: none;

    &.error {
      border: 4px solid red;
    }
  }
`

export const InlineInputGroup = styled.div<SizeProp>`
  display: flex;
  column-gap: 34px;
  flex: auto;

  div {
    &:last-child {
      width: ${(prop) =>
        prop.$widthElement ? `${prop.$widthElement}px` : '100%'};
    }
  }
`

export const ButtonGroup = styled.div`
  margin-top: 24px;
  display: block;

  ${ButtonContainer} {
    width: 100%;
    margin-bottom: 8px;
  }
`
export const OrderConfirmation = styled.div`
  ${Text} {
    margin-bottom: 16px;
  }
`
