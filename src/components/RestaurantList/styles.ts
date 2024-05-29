import styled from 'styled-components'

export const RestaurantsContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 48px;
  column-gap: 80px;
  padding-top: 80px;
  padding-bottom: 120px;

  @media screen and (max-width: 1023px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
  }
`
