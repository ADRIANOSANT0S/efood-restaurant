import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { add, open } from '../../store/reducers/card'
import { getLimitDescription, moneyFormat } from '../../utils'

import Button from '../Button'
import TextP from '../TextP'

import {
  DishContainer,
  InfosContainer,
  Title,
  Modal,
  ModalContainer,
  TitleModal,
  InfosModal
} from './styles'
import close from '../../assets/images/close.png'

type Props = {
  restaurantDishes: MenuItem
}

const Dishes = ({ restaurantDishes }: Props) => {
  const dispatch = useDispatch()

  const [modalVisible, setModalVisible] = useState(false)

  const toggleModal = () => {
    setModalVisible(!modalVisible)
  }

  const addToCard = () => {
    dispatch(add(restaurantDishes))
    dispatch(open())
    toggleModal()
  }

  if (!restaurantDishes) {
    return null
  }

  const description = restaurantDishes.descricao || ''

  return (
    <>
      <DishContainer>
        <img src={restaurantDishes.foto} alt={restaurantDishes.nome} />
        <InfosContainer>
          <Title>{restaurantDishes.nome}</Title>
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
        {modalVisible && (
          <Modal className={modalVisible ? 'visible' : ''}>
            <ModalContainer>
              <img src={restaurantDishes.foto} alt={restaurantDishes.nome} />
              <img
                src={close}
                alt="x"
                className="close"
                onClick={toggleModal}
              />
              <InfosModal>
                <TitleModal>{restaurantDishes.nome}</TitleModal>
                <TextP color={'white'}>{description}</TextP>
                <span>{restaurantDishes.porcao}</span>
                <Button
                  type="button"
                  title={'Adicionar ao carrinho'}
                  onClick={addToCard}
                >
                  Adicionar ao carrinho - {moneyFormat(restaurantDishes.preco)}
                </Button>
              </InfosModal>
            </ModalContainer>
            <div className="overlay" onClick={toggleModal}></div>
          </Modal>
        )}
      </DishContainer>
    </>
  )
}

export default Dishes
