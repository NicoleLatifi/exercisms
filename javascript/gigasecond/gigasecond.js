export const gigasecond = (startingDate) => {
  const endingDate = Date.parse(startingDate) + 1000000000000
  return new Date(endingDate)
}
