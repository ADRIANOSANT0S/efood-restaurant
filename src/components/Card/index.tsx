import Button from '../Button'
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
import pizza from '../../assets/images/foods/pizza.png'

const Card = () => {
  return (
    <CardContainer>
      <Overlay />
      <Aside>
        <ul>
          <CardItem>
            <img src={pizza} alt="Pizzar" />
            <div>
              <Title>Pizza Marguerita</Title>
              <span>R$ 60,90</span>
            </div>
            <Button
              type="button"
              title="Click aqui para remover esse item do carrinho"
              onClick={() => console.log('obrigado senhor Jeová')}
            >
              <img
                src={trash}
                alt="Imagem de uma lixeira para apagar item do carrinho"
              />
            </Button>
          </CardItem>
          <CardItem>
            <img src={pizza} alt="Pizzar" />
            <div>
              <Title>Pizza Marguerita</Title>
              <Price>R$ 60,90</Price>
            </div>
            <Button
              type="button"
              title="Click aqui para remover esse item do carrinho"
              onClick={() => console.log('obrigado senhor Jeová')}
            >
              <img
                src={trash}
                alt="Imagem de uma lixeira para apagar item do carrinho"
              />
            </Button>
          </CardItem>
          <CardItem>
            <img src={pizza} alt="Pizzar" />
            <div>
              <Title>Pizza Marguerita</Title>
              <span>R$ 60,90</span>
            </div>
            <Button
              type="button"
              title="Click aqui para remover esse item do carrinho"
              onClick={() => console.log('obrigado senhor Jeová')}
            >
              <img
                src={trash}
                alt="Imagem de uma lixeira para apagar item do carrinho"
              />
            </Button>
          </CardItem>
        </ul>
        <div>
          <CardTotal color={'orange'}>
            <span>Valor total</span>
            <span>R$ 182,70</span>
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
