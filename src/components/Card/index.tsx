import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

import { close, remove } from '../../store/reducers/card'
import { RootReducer } from '../../store'

import Button from '../Button'
import { moneyFormat } from '../../utils'
import {
  Aside,
  CardContainer,
  Overlay,
  CardItem,
  Title,
  Price,
  CardTotal
} from './styles'

import trash from '../../assets/images/lixeira-de-reciclagem.png'

const Card = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.card)

  const dispatch = useDispatch()

  const closeCard = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const getTotalPrice = () => {
    return items?.reduce((accumulator, item) => {
      return (
        accumulator +
        item.cardapio.reduce((cardapioAcc, cardapioItem) => {
          return cardapioAcc + cardapioItem.preco
        }, 0)
      )
    }, 0)
  }

  if (!items) {
    return <div>Loading...</div> // ou qualquer outro fallback apropriado
  }

  return (
    <CardContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCard} />
      <Aside>
        <ul>
          {items.length > 0 ? (
            items.map((item) => (
              <CardItem key={item.id}>
                <img src={item.capa} alt={item.titulo} />
                <Price>
                  <Title>{item.titulo}</Title>
                  {item.cardapio.map((cardapioItem) => (
                    <div key={cardapioItem.id}>
                      <span>{moneyFormat(cardapioItem.preco)}</span>
                    </div>
                  ))}
                </Price>
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
              </CardItem>
            ))
          ) : (
            <li>Não há itens no carrinho.</li>
          )}
        </ul>
        <div>
          <CardTotal color={'orange'}>
            <span>Valor total</span>
            <span>{moneyFormat(getTotalPrice())}</span>
          </CardTotal>
          <Button type="button" title="Continuar para a entrega">
            Continuar com a entrega
          </Button>
        </div>
      </Aside>
    </CardContainer>
  )
}

export default Card
