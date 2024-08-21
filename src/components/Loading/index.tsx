import { BeatLoader } from 'react-spinners'

import { colors } from '../../GlobalStyles'
import { ContainerLoading } from './styles'

const Loading = () => (
  <ContainerLoading>
    <BeatLoader color={colors.red} size={18} />
  </ContainerLoading>
)

export default Loading
