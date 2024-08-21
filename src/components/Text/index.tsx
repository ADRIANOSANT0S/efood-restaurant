import { ReactNode } from 'react'
import { Text } from './styles'

export type Props = {
  children: ReactNode
  color: 'red' | 'white' | 'orange'
}

const Text = ({ children, color }: Props) => (
  <Text color={color}>{children}</Text>
)

export default Text
