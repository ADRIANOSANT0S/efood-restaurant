import { useState } from 'react'
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
import getLimitDescription from '../../utils'

type Props = {
  img: string
  title: string
  description: string
  porcao: string
  foto: string
  preco: number
}

const moneyFormat = (preci: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preci)
}

const Dishes = ({ img, title, description, porcao, foto, preco }: Props) => {
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
          title="click aqui para adicionar item ao carrinho"
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
            <Button type="button" title={'Adicionar ao carrinho'}>
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
