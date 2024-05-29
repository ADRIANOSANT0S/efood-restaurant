import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { colors } from '../../GlobalStyles'

export const ButtonContainer = styled.button`
  display: block;
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
  text-align: center;
  padding: 4px 0;
  background-color: ${colors.orange};
  color: ${colors.red};
  border: none;
`
export const ButtonLink = styled(Link)`
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
  text-align: center;
  padding: 4px 8px;
  background-color: ${colors.red};
  color: ${colors.orange};
  text-decoration: none;
`
