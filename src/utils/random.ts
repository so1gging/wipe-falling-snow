export const getRandomWithinBounds = (min: number, max: number) => {
  return Math.random() * (max - min) + min
}

export const getRandomIntegerWithinBounds = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min) + min)
}
