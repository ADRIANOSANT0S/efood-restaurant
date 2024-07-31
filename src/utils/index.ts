export const getLimitDescription = (
  text: string,
  lengthString: number,
  startSlice: number,
  finishSlice: number
): string => {
  if (text.length > lengthString) {
    return text.slice(startSlice, finishSlice) + '...'
  } else {
    return text
  }
}

export const moneyFormat = (preci: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preci)
}
