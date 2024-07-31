import { useDispatch } from 'react-redux'
import { add, open } from '../../store/reducers/card'
import Button from '../Button'
import TextP from '../TextP'
import close from '../../assets/images/close.png'
import {
  DishContainer,
  InfosContainer,
  Title,
  Modal,
  ModalContainer,
  TitleModal,
  InfosModal
} from './styles'
import { getLimitDescription, moneyFormat } from '../../utils'
import { useState } from 'react'

type Props = {
  img: string
  title: string
  description: string
  porcao: string
  foto: string
  preco: number
  id: number
}

const Dishes = ({ img, title, description, porcao, foto, preco }: Props) => {
  const dispatch = useDispatch()

  const addToCard = () => {
    dispatch(
      add({
        preco,
        id: 0,
        foto: '',
        nome: '',
        descricao: '',
        porcao: ''
      })
    )
    dispatch(open())
  }

  const [modalVisible, setModalVisible] = useState(false)

  const toggleModal = () => {
    setModalVisible(!modalVisible)
  }

  return (
    <DishContainer>
      <img src={img} alt={title} />
      <InfosContainer>
        <Title>{title}</Title>
        <TextP color={'orange'}>
          {getLimitDescription(description, 170, 0, 160)}
        </TextP>
        <Button
          type="button"
          title="Click aqui para adicionar item ao carrinho"
          onClick={toggleModal}
        >
          Adicionar ao carrinho
        </Button>
      </InfosContainer>
      <Modal className={modalVisible ? 'visible' : ''}>
        <ModalContainer>
          <img src={foto} alt={title} />
          <img src={close} alt="x" className="close" onClick={toggleModal} />
          <InfosModal>
            <TitleModal>{title}</TitleModal>
            <TextP color={'white'}>{description}</TextP>
            <span>{porcao}</span>
            <Button
              type="button"
              title={'Adicionar ao carrinho'}
              onClick={addToCard}
            >
              Adicionar ao carrinho - {moneyFormat(preco)}
            </Button>
          </InfosModal>
        </ModalContainer>
        <div className="overlay" onClick={toggleModal}></div>
      </Modal>
    </DishContainer>
  )
}

export default Dishes
