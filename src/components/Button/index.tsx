import { ReactNode } from 'react'
import * as S from './styles'

export type Props = {
  type?: 'button' | 'link' | 'submit'
  to?: string
  onClick?: () => void
  children: ReactNode
  title: string
  size?: 'small' | 'big'
  disabled?: boolean
}

const Button = ({
  type,
  to,
  onClick,
  children,
  title,
  size,
  disabled
}: Props) => {
  if (type === 'button' || type === 'submit') {
    return (
      <S.ButtonContainer
        type="button"
        title={title}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </S.ButtonContainer>
    )
  }

  return (
    <S.ButtonLink size={size} to={to as string} title={title} type={type}>
      {children}
    </S.ButtonLink>
  )
}

export default Button
