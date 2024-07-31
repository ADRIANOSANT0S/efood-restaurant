import BackgroundImag from '../BackgroundImag'
import Tag from '../Tag'
import TextP from '../TextP'
import { ButtonLink } from '../Button/styles'

import star from '../../assets/images/star_favorite.png'

import {
  ItemContainer,
  DetailsContainer,
  Title,
  InfosContainer,
  StarContainer
} from './styles'
import { getLimitDescription } from '../../utils'

type Props = {
  image: string
  highline: boolean
  type: number
  title: string
  nota: number
  description: string
  id: number
}

const Restaurant = ({
  image,
  highline,
  type,
  title,
  nota,
  description,
  id
}: Props) => {
  return (
    <ItemContainer>
      <BackgroundImag url={image} description={title}>
        {highline ? <Tag>Destaque da semana</Tag> : ''}
        <Tag>{type}</Tag>
      </BackgroundImag>
      <DetailsContainer>
        <InfosContainer>
          <Title>{title}</Title>
          <StarContainer>
            <Title as="span">{nota}</Title>
            <img src={star} alt="estrelas de favoritos" />
          </StarContainer>
        </InfosContainer>
        <TextP color={'red'}>
          {getLimitDescription(description, 270, 0, 250)}
        </TextP>
        <ButtonLink
          size="small"
          type="link"
          to={`/pratos/${id}`}
          title="Click aqui para saber mais detalhes do restaurante"
        >
          Saiba mais
        </ButtonLink>
      </DetailsContainer>
    </ItemContainer>
  )
}

export default Restaurant
