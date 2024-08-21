import { useState } from 'react'
import { useDispatch } from 'react-redux'

import Button from '../Button'
import Text from '../Text'

import { add, open } from '../../store/reducers/card'
import { getLimitDescription, moneyFormat } from '../../utils'

import * as S from './styles'

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
      <S.DishContainer>
        <img src={restaurantDishes.foto} alt={restaurantDishes.nome} />
        <S.InfosContainer>
          <S.Title>{restaurantDishes.nome}</S.Title>
          <Text color={'orange'}>
            {getLimitDescription(description, 170, 0, 160)}
          </Text>
          <Button
            type="button"
            title="Click aqui para adicionar item ao carrinho"
            onClick={toggleModal}
          >
            Adicionar ao carrinho
          </Button>
        </S.InfosContainer>
        {modalVisible && (
          <S.Modal className={modalVisible ? 'visible' : ''}>
            <S.ModalContainer>
              <img src={restaurantDishes.foto} alt={restaurantDishes.nome} />
              <img
                src={close}
                alt="x"
                className="close"
                onClick={toggleModal}
              />
              <S.InfosModal>
                <S.TitleModal>{restaurantDishes.nome}</S.TitleModal>
                <Text color={'white'}>{description}</Text>
                <span>{restaurantDishes.porcao}</span>
                <Button
                  type="button"
                  title={'Adicionar ao carrinho'}
                  onClick={addToCard}
                >
                  Adicionar ao carrinho - {moneyFormat(restaurantDishes.preco)}
                </Button>
              </S.InfosModal>
            </S.ModalContainer>
            <div className="overlay" onClick={toggleModal}></div>
          </S.Modal>
        )}
      </S.DishContainer>
    </>
  )
}

export default Dishes
