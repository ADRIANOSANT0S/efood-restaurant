import { ButtonContainer, ButtonLink } from './styles'

type Props = {
  type?: 'button' | 'link'
  to?: string
  onClick?: () => void
  children: string
  title: string
}

const Button = ({ type, to, onClick, children, title }: Props) => {
  if (type === 'button') {
    return (
      <ButtonContainer type="button" title={title} onClick={onClick}>
        {children}
      </ButtonContainer>
    )
  }

  return (
    <ButtonLink to={to as string} title={title} type={type}>
      {children}
    </ButtonLink>
  )
}

export default Button
