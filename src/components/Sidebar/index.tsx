import { useDispatch, useSelector } from 'react-redux'

import { RootReducer } from '../../store'
import { close } from '../../store/reducers/card'

import { Aside, Overlay, SidebarContainer } from './styles'

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
    <SidebarContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeSidebar} />
      <Aside>{children}</Aside>
    </SidebarContainer>
  )
}

export default Sidebar
