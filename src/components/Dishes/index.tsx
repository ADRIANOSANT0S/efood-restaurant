import Button from '../Button'
import TextP from '../TextP'

import { DishContainer, InfosContainer, Title } from './styles'

type Props = {
  img: string
  title: string
  description: string
}

const Dishes = ({ img, title, description }: Props) => (
  <DishContainer>
    <img src={img} alt={title} />
    <InfosContainer>
      <Title>{title}</Title>
      <TextP color={'orange'}>{description}</TextP>
      <Button type="button" title="click aqui para adicionar item ao carrinho">
        Adicionar ao carrinho
      </Button>
    </InfosContainer>
  </DishContainer>
)

export default Dishes
