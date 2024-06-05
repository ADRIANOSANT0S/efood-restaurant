import styled from 'styled-components'
import { ImageBg } from '../BackgroundImag/styles'
import { colors } from '../../GlobalStyles'

export const ItemContainer = styled.li`
  width: 472px;
  height: 400px;

  ${ImageBg} {
    position: relative;
    height: 216px;
    padding: 16px;
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
    gap: 8px;
  }

  @media screen and (max-width: 768px) {
    width: 296px;
    height: auto;
  }
`
export const ContainerTags = styled.div`
  position: absolute;
  top: 16px;
  left: 16px;
`

export const InfosContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Title = styled.h2`
  color: ${colors.red};
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
`

export const StarContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

export const DetailsContainer = styled.div`
  display: block;
  padding: 8px;
  background-color: ${colors.white};
  border-right: 1px solid ${colors.red};
  border-bottom: 1px solid ${colors.red};
  border-left: 1px solid ${colors.red};

  /* Adiciona espaçamento entre os filhos */
  & > *:not(:last-child) {
    margin-bottom: 16px;
  }
`
