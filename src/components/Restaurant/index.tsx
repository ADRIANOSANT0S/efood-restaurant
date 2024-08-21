import BackgroundImag from '../BackgroundImag'
import Tag from '../Tag'
import Text from '../Text'
import { ButtonLink } from '../Button/styles'

import { getLimitDescription } from '../../utils'

import * as S from './styles'

import star from '../../assets/images/star_favorite.png'

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
    <S.ItemContainer>
      <BackgroundImag url={image} description={title}>
        {highline ? <Tag>Destaque da semana</Tag> : ''}
        <Tag>{type}</Tag>
      </BackgroundImag>
      <S.DetailsContainer>
        <S.InfosContainer>
          <S.Title>{title}</S.Title>
          <S.StarContainer>
            <S.Title as="span">{nota}</S.Title>
            <img src={star} alt="estrelas de favoritos" />
          </S.StarContainer>
        </S.InfosContainer>
        <Text color={'red'}>
          {getLimitDescription(description, 270, 0, 250)}
        </Text>
        <ButtonLink
          size="small"
          type="link"
          to={`/pratos/${id}`}
          title="Click aqui para saber mais detalhes do restaurante"
        >
          Saiba mais
        </ButtonLink>
      </S.DetailsContainer>
    </S.ItemContainer>
  )
}

export default Restaurant
