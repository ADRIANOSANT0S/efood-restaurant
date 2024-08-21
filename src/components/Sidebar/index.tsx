import { useDispatch, useSelector } from 'react-redux'

import { RootReducer } from '../../store'
import { close } from '../../store/reducers/card'

import * as S from './styles'

type Props = {
  children: JSX.Element
}

const Sidebar = ({ children }: Props) => {
  const { isOpen } = useSelector((state: RootReducer) => state.card)

  const dispatch = useDispatch()

  const closeSidebar = () => {
    dispatch(close())
  }

  return (
    <S.SidebarContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeSidebar} />
      <S.Aside>{children}</S.Aside>
    </S.SidebarContainer>
  )
}

export default Sidebar
