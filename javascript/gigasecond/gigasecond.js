export const gigasecond = (startingDate) => {
  const gigasecondInMs = 10 ** 12
  const endingDate = startingDate.getTime() + gigasecondInMs
  return new Date(endingDate)
}
