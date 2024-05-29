class RestaurantItem {
  id: number
  description: string
  infos: string[]
  title: string
  image: string
  details: string
  nota: string

  constructor(
    id: number,
    description: string,
    infos: string[],
    title: string,
    image: string,
    details: string,
    nota: string
  ) {
    this.id = id
    this.description = description
    this.infos = infos
    this.title = title
    this.image = image
    this.details = details
    this.nota = nota
  }
}

export default RestaurantItem
