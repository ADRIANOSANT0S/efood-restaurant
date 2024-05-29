class Dish {
  id: number
  img: string
  title: string
  description: string
  details: string

  constructor(
    id: number,
    img: string,
    title: string,
    description: string,
    details: string
  ) {
    this.id = id
    this.img = img
    this.title = title
    this.description = description
    this.details = details
  }
}

export default Dish
