import BackgroundImag from '../BackgroundImag'
import Tag from '../Tag'
import TextP from '../TextP'

import star from '../../assets/images/star_favorite.png'

type Props = {
  image: string
  details: string
  tags: string[]
  title: string
  nota: string
  description: string
}

import {
  ItemContainer,
  DetailsContainer,
  InfosContainer,
  StarContainer
} from './styles'
import { ButtonLink } from '../Button/styles'

const Restaurant = ({
  image,
  details,
  tags,
  title,
  nota,
  description
}: Props) => (
  <ItemContainer>
    <BackgroundImag url={image} description={details}>
      {tags.map((tag) => (
        <Tag key={tag}>{tag}</Tag>
      ))}
    </BackgroundImag>
    <DetailsContainer>
      <InfosContainer>
        <h2>{title}</h2>
        <StarContainer>
          <span>{nota}</span>
          <img src={star} alt="estrelas de favoritos" />
        </StarContainer>
      </InfosContainer>
      <TextP color={'red'}>{description}</TextP>
      <ButtonLink
        type="link"
        to="/pratos"
        title="Click aqui para saber mais detalhes do restaurante"
      >
        Saiba mais
      </ButtonLink>
    </DetailsContainer>
  </ItemContainer>
)

export default Restaurant
