declare type MenuItem = {
  id: number
  foto: string
  preco: number
  nome: string
  descricao: string
  porcao: string
}

declare type RestaurantsData = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: MenuItem[]
}
