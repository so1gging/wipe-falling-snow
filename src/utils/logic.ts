export const toReverseMouseMove = (x: number, y: number, diffX: number, diffY: number) => {
  const angle = Math.atan2(+diffY, +diffX) * (180 / Math.PI)
  let vx = 1
  let vy = 1

  const formatX = Math.abs(Number((diffX / 60).toFixed(2)))
  const formatY = Math.abs(Number((diffY / 60).toFixed(2)))

  if (angle > 0 && angle < 90) {
    vx *= -1
    vy *= -1
  } else if (angle > 90 && angle < 180) {
    vx *= 1
    vy *= -1
  } else if (angle < -90 && angle > -180) {
    vx *= 1
    vy *= 1
  } else if (angle < 0 && angle > -90) {
    vx *= -1
    vy *= 1
  }

  if (angle === 0) {
    vx = -1
    vy = 0
  }

  if (angle === 90) {
    vx = 0
    vy = -1
  }

  if (angle === 180) {
    vx = 1
    vy = 0
  }

  if (angle === -90) {
    vx = 0
    vy = 1
  }

  return {
    x: x + vx * 10 * formatX,
    y: y + vy * 10 * formatY,
  }
}
