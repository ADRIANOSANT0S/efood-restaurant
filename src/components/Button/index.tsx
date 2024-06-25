import { ReactNode } from 'react'
import { ButtonContainer, ButtonLink } from './styles'

export type Props = {
  type?: 'button' | 'link'
  to?: string
  onClick?: () => void
  children: ReactNode
  title: string
  size?: 'small' | 'big'
}

const Button = ({ type, to, onClick, children, title, size }: Props) => {
  if (type === 'button') {
    return (
      <ButtonContainer type="button" title={title} onClick={onClick}>
        {children}
      </ButtonContainer>
    )
  }

  return (
    <ButtonLink size={size} to={to as string} title={title} type={type}>
      {children}
    </ButtonLink>
  )
}

export default Button
