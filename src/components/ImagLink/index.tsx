import { Link } from 'react-router-dom'

type Props = {
  to: string
  image: string
  description: string
}

const ImageLink = ({ to, image, description }: Props) => (
  <Link to={to}>
    <img src={image} alt={description} />
  </Link>
)

export default ImageLink
