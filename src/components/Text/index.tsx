import { ReactNode } from 'react'
import { Text as P } from './styles'

export type Props = {
  children: ReactNode
  color: 'red' | 'white' | 'orange'
}

const Text = ({ children, color }: Props) => <P color={color}>{children}</P>

export default Text
