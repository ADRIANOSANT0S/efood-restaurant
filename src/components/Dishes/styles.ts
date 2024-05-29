import styled from 'styled-components'
import { colors } from '../../GlobalStyles'

export const DishContainer = styled.li`
  width: 320px;
  padding: 8px;
  background-color: ${colors.red};
`
export const Title = styled.h2`
  font-size: 16px;
  line-height: 22px;
  font-weight: 700;
  color: ${colors.orange};
`

export const InfosContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`
