import { Text } from './styles'

export type Props = {
  children: string
  color: 'red' | 'white' | 'orange'
}

const TextP = ({ children, color }: Props) => (
  <Text color={color}>{children}</Text>
)

export default TextP
