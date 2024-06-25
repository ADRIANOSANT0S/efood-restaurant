const getLimitDescription = (
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

export default getLimitDescription
