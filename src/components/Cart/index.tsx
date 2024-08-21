import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

import Button from '../Button'
import Sidebar from '../Sidebar'
import Checkout from '../Checkout'

import { remove } from '../../store/reducers/card'
import { RootReducer } from '../../store'
import { moneyFormat } from '../../utils'

import * as S from './styles'

import trash from '../../assets/images/lixeira-de-reciclagem.png'
import Loading from '../Loading'
import TextP from '../TextP'

const Card = () => {
  const { items } = useSelector((state: RootReducer) => state.card)
  const dispatch = useDispatch()
  const [showCheckout, setShowCheckout] = useState(false)

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco)
    }, 0)
  }

  const handleCheckout = () => {
    setShowCheckout(true)
  }

  const handleBackToCart = () => {
    setShowCheckout(false)
  }

  if (!items) {
    return <Loading />
  }

  return (
    <Sidebar>
      <>
        <>
          <S.CartContainer
            className={`cart-container ${showCheckout ? 'hide' : 'show'}`}
          >
            <ul>
              {items.length > 0 ? (
                items.map((item) => (
                  <S.CardItem key={item.id}>
                    <img src={item.foto} alt={item.nome} />
                    <S.Price>
                      <S.Title>{item.nome}</S.Title>
                      <S.Price>{moneyFormat(item.preco)}</S.Price>
                    </S.Price>
                    <Button
                      type="button"
                      title="Click aqui para remover esse item do carrinho"
                      onClick={() => removeItem(item.id)}
                    >
                      <img
                        src={trash}
                        alt="Imagem de uma lixeira para apagar item do carrinho"
                      />
                    </Button>
                  </S.CardItem>
                ))
              ) : (
                <TextP color={'red'}>
                  Adicione um item ao carrinho para continuar com a compra
                </TextP>
              )}
            </ul>
            <div>
              <S.CardTotal color={'orange'}>
                <span>Valor total</span>
                <span>{moneyFormat(getTotalPrice())}</span>
              </S.CardTotal>
              <Button
                type="button"
                title="Continuar para a entrega"
                onClick={handleCheckout}
              >
                Continuar com a entrega
              </Button>
            </div>
          </S.CartContainer>
        </>
        <S.CheckoutContainer
          className={`checkout-container ${showCheckout ? 'show' : 'hide'}`}
        >
          <Checkout totalPrice={getTotalPrice()} goBack={handleBackToCart} />
        </S.CheckoutContainer>
      </>
    </Sidebar>
  )
}

export default Card
