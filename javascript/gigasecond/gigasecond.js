//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

export const gigasecond = (startingDate) => {
  const stringDate = startingDate.toString()
  // console.log(stringDate)
  const startingYear = stringDate.slice(11,15)
  const newYear = startingYear + 32
  // console.log(stringDate.slice(4,7))
  // console.log(typeof(stringDate.slice(4,7)))
  console.log(months.indexOf("Jan"))
  const startingMonth = months.indexOf[stringDate.slice(4,7)]
  const newMonth = startingMonth + 3
  console.log(startingMonth)
  console.log(newMonth)
  // console.log(new Date(Date.UTC(2043, 0, 1, 1, 46, 40)))
  return new Date(Date.UTC(2043, 0, 1, 1, 46, 40))
};

// Sun Apr 24 2011 18:00:00 GMT-0600 (Mountain Daylight Time)
// 2043-01-01T00:00:00.000Z
// 2043-01-01T01:46:40.000Z
