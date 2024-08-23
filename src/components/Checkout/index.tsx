import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import InputMask from 'react-input-mask'

import Button from '../Button'
import Text from '../Text'

import { usePurchaseMutation } from '../../services/api'
import { moneyFormat } from '../../utils'
import { clean, close } from '../../store/reducers/card'

import * as S from './styles'
import { useNavigate } from 'react-router-dom'

type CheckoutProps = {
  totalPrice: number
  goBack: () => void
}

type FormValues = {
  fullName: string
  address: string
  city: string
  zipCode: string
  localNumber: string
  complement: string
}

const Checkout = ({ totalPrice, goBack }: CheckoutProps) => {
  const dispatch = useDispatch()
  const [purchase, { data, isSuccess }] = usePurchaseMutation()
  const [isOrderSend, setIsOrderSend] = useState(false)
  const navigate = useNavigate()

  const form = useFormik({
    initialValues: {
      fullName: '',
      address: '',
      city: '',
      zipCode: '',
      localNumber: '',
      complement: '',
      cardName: '',
      cardNumber: '',
      cvv: '',
      expiresMonth: '',
      expiresYear: ''
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      address: Yup.string()
        .min(8, 'O endereço deve ter pelo menos 8 caracteres')
        .required('O campo é obrigatório'),
      city: Yup.string()
        .min(3, 'O campo precisa ter pelo menos 3 caracteres')
        .required('O campo é obrigatório'),
      zipCode: Yup.string()
        .min(8, 'O campo deve conter 8 caracteres')
        .required('O campo é obrigatório'),
      localNumber: Yup.string()
        .min(1, 'O campo deve conter pelo menos um caractere')
        .required('O campo é obrigatório'),
      cardName: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      cardNumber: Yup.string().required('O campo é obrigatório'),
      cvv: Yup.string().required('O campo é obrigatório'),
      expiresMonth: Yup.number()
        .min(1, 'O mês deve estar entre 01 e 12')
        .max(12, 'O mês deve estar entre 01 e 12')
        .required('O campo é obrigatório'),
      expiresYear: Yup.string().required('O campo é obrigatório')
    }),
    onSubmit: (values) => {
      purchase({
        products: [
          {
            id: Number(data?.orderId),
            price: totalPrice
          }
        ],
        delivery: {
          receiver: values.fullName,
          address: {
            description: values.address,
            city: values.city,
            zipCode: values.zipCode,
            number: Number(values.localNumber),
            complement: values.complement
          }
        },
        payment: {
          card: {
            name: values.cardName,
            number: values.cardNumber,
            code: Number(values.cvv),
            expires: {
              month: Number(values.expiresMonth),
              year: Number(values.expiresYear)
            }
          }
        }
      })
    }
  })

  const areDeliveryFieldsFilled = () => {
    const requiredFields: (keyof FormValues)[] = [
      'fullName',
      'address',
      'city',
      'zipCode',
      'localNumber'
    ]
    return requiredFields.every(
      (field) => form.values[field].trim() !== '' && !checkInputError(field)
    )
  }

  const closeSidebar = () => {
    dispatch(close())
  }

  const finishBuy = () => {
    closeSidebar()
    dispatch(clean())
    navigate('/')
    setTimeout(() => window.location.reload(), 300)
  }

  const checkInputError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

  const goToNext = () => {
    setIsOrderSend(true)
  }

  const goBackCart = () => {
    setIsOrderSend(false)
    goBack()
  }

  const goBackAddress = () => {
    setIsOrderSend(false)
  }

  return (
    <div>
      {isSuccess && data ? (
        <>
          <S.OrderConfirmation>
            <S.title>Pedido realizado - {data.orderId} </S.title>
            <Text color="orange">
              Estamos felizes em informar que seu pedido já está em processo de
              preparação e, em breve, será entregue no endereço fornecido.
            </Text>
            <Text color="orange">
              Gostaríamos de ressaltar que nossos entregadores não estão
              autorizados a realizar cobranças extras.
            </Text>
            <Text color="orange">
              Lembre-se da importância de higienizar as mãos após o recebimento
              do pedido, garantindo assim sua segurança e bem-estar durante a
              refeição.
            </Text>
            <Text color="orange">
              Esperamos que desfrute de uma deliciosa e agradável experiência
              gastronômica. Bom apetite!
            </Text>
            <Button
              type="button"
              title="Click aqui e conclua o pedido"
              onClick={finishBuy}
            >
              Concluir
            </Button>
          </S.OrderConfirmation>
        </>
      ) : (
        <>
          <form onSubmit={form.handleSubmit}>
            <S.DataSendOrder
              className={!isOrderSend ? 'showContainer' : 'hide'}
            >
              <S.title>Entrega</S.title>
              <S.InputGroup>
                <label htmlFor="fullName">Quem irá receber</label>
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  value={form.values.fullName}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputError('fullName') ? 'error' : ''}
                />
              </S.InputGroup>
              <S.InputGroup>
                <label htmlFor="address">Endereço</label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  value={form.values.address}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputError('address') ? 'error' : ''}
                />
              </S.InputGroup>
              <S.InputGroup>
                <label htmlFor="city">Cidade</label>
                <input
                  type="text"
                  name="city"
                  id="city"
                  value={form.values.city}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputError('city') ? 'error' : ''}
                />
              </S.InputGroup>
              <S.InlineInputGroup>
                <S.InputGroup>
                  <label htmlFor="zipCode">CEP</label>
                  <InputMask
                    type="text"
                    name="zipCode"
                    id="zipCode"
                    mask="99999-999"
                    value={form.values.zipCode}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputError('zipCode') ? 'error' : ''}
                  />
                </S.InputGroup>
                <S.InputGroup>
                  <label htmlFor="localNumber">Número</label>
                  <input
                    type="text"
                    name="localNumber"
                    id="localNumber"
                    value={form.values.localNumber}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputError('localNumber') ? 'error' : ''}
                  />
                </S.InputGroup>
              </S.InlineInputGroup>
              <S.InputGroup>
                <label htmlFor="complement">Complemento (opcional)</label>
                <input
                  type="text"
                  name="complement"
                  id="complement"
                  value={form.values.complement}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
              </S.InputGroup>
              <S.ButtonGroup>
                <Button
                  type="button"
                  title="Click aqui para continuar a compra"
                  onClick={goToNext}
                  disabled={!areDeliveryFieldsFilled()}
                >
                  Continuar com o pagamento
                </Button>
                <Button
                  type="button"
                  title="Clique aqui para voltar aos dados de envio"
                  onClick={goBackCart}
                >
                  Voltar para o carrinho
                </Button>
              </S.ButtonGroup>
            </S.DataSendOrder>

            <S.DataConfirmationOrder
              className={isOrderSend ? 'showContainer' : ''}
            >
              <S.title>Valor a pagar - {moneyFormat(totalPrice)}</S.title>
              <S.InputGroup>
                <label htmlFor="cardName">Nome no cartão</label>
                <input
                  type="text"
                  name="cardName"
                  id="cardName"
                  value={form.values.cardName}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputError('cardName') ? 'error' : ''}
                />
              </S.InputGroup>
              <S.InlineInputGroup size={87}>
                <S.InputGroup>
                  <label htmlFor="cardNumber">Número do cartão</label>
                  <InputMask
                    type="text"
                    name="cardNumber"
                    id="cardNumber"
                    value={form.values.cardNumber}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    mask="9999 9999 9999 9999"
                    className={checkInputError('cardNumber') ? 'error' : ''}
                  />
                </S.InputGroup>
                <S.InputGroup>
                  <label htmlFor="cvv">CVV</label>
                  <InputMask
                    type="text"
                    name="cvv"
                    id="cvv"
                    value={form.values.cvv}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    mask="999"
                    className={checkInputError('cvv') ? 'error' : ''}
                  />
                </S.InputGroup>
              </S.InlineInputGroup>

              <S.InlineInputGroup>
                <S.InputGroup>
                  <label htmlFor="expiresMonth">Mês de vencimento</label>
                  <InputMask
                    type="text"
                    name="expiresMonth"
                    id="expiresMonth"
                    value={form.values.expiresMonth}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    mask="99"
                    className={checkInputError('expiresMonth') ? 'error' : ''}
                  />
                </S.InputGroup>
                <S.InputGroup>
                  <label htmlFor="expiresYear">Ano de vencimento</label>
                  <InputMask
                    type="text"
                    name="expiresYear"
                    id="expiresYear"
                    value={form.values.expiresYear}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    mask="99"
                    className={checkInputError('expiresYear') ? 'error' : ''}
                  />
                </S.InputGroup>
              </S.InlineInputGroup>
              <S.ButtonGroup>
                <Button
                  type="submit"
                  title="Click aqui para continuar a compra"
                  onClick={form.handleSubmit}
                >
                  Finalizar pagamento
                </Button>
                <Button
                  type="button"
                  title="Clique aqui para voltar aos dados de envio"
                  onClick={goBackAddress}
                >
                  Voltar para a edição de endereço
                </Button>
              </S.ButtonGroup>
            </S.DataConfirmationOrder>
          </form>
        </>
      )}
    </div>
  )
}

export default Checkout
