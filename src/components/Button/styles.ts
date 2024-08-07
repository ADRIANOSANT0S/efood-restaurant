import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { colors } from '../../GlobalStyles'

import { Props } from '.'

export const ButtonContainer = styled.button`
  display: block;
  font-size: 14px;
  font-weight: 700;
  line-height: 16.41px;
  text-align: center;
  padding: 4px 8px;
  background-color: ${colors.orange};
  color: ${colors.red};
  border: none;
  cursor: pointer;
`
export const ButtonLink = styled(Link)<Props>`
  font-size: ${(prop) => (prop.size === 'small' ? '14px' : '18px')};
  font-weight: ${(prop) => (prop.size === 'small' ? '700' : '900')};
  line-height: ${(prop) => (prop.size === 'small' ? '16.5px' : '22px')};
  text-align: center;
  padding: ${(prop) => (prop.size === 'small' ? '4px 8px' : '0')};
  background-color: ${colors.red};
  color: ${colors.orange};
  text-decoration: none;
`
