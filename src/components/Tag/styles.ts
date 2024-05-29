import styled from 'styled-components'
import { colors } from '../../GlobalStyles'

import { Props } from '.'

export const TagContainer = styled.div<Props>`
  display: inline-block;
  padding: 4px 6px;
  font-weight: 700;
  text-align: center;
  color: ${colors.orange};
  background-color: ${colors.red};
  font-size: ${(prop) => (prop.size === 'small' ? '12px' : '14px')};
  line-height: ${(prop) => (prop.size === 'small' ? '14px' : '16px')};
`
