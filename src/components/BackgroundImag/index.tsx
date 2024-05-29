import { ReactNode } from 'react'

import { ImageBg } from './styles'

type Props = {
  children: ReactNode
  url: string
  description: string
}

const BackgroundImag = ({ children, url, description }: Props) => (
  <ImageBg aria-label={description} style={{ backgroundImage: `url(${url})` }}>
    {children}
  </ImageBg>
)

export default BackgroundImag
