import { colors } from './../../GlobalStyles/index'
import styled from 'styled-components'

import { Props } from '.'

export const Text = styled.p<Props>`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  /* Essa props é responsável por definir a cor dos botões */
  color: ${(props) =>
    props.color === 'red'
      ? colors.red
      : props.color === 'white'
        ? colors.white
        : colors.orange};
`
