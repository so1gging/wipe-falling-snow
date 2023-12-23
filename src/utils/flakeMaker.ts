import { getRandomWithinBounds } from './random.ts'

interface Flake {
  x: number
  y: number
  size: number
  speed: number
  direction: number
}
const FlakeMaker = (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => ({
  data: [] as Flake[],
  canvasWidth: canvas.clientWidth,
  canvasHeight: canvas.clientHeight,

  /**
   *  @function FlakeMaker 를 초기화합니다.
   */
  init() {
    const initData: Flake[] = []
    for (let i = 0; i < 200; i++) {
      const x = getRandomWithinBounds(0, this.canvasWidth)
      const y = getRandomWithinBounds(0, this.canvasHeight)

      const size = getRandomWithinBounds(0.5, 3)
      const speed = getRandomWithinBounds(0.1, 0.4)
      const direction = [-1, 1][Math.floor(getRandomWithinBounds(0, 2))]

      initData.push({ x, y, size, speed, direction })
    }
    this.data = initData

    return this.falling()
  },

  /**
   *  @function 눈송이를 그립니다.
   */
  draw() {
    ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight)
    ctx.fillStyle = '#0f1018'
    ctx.fillRect(0, 0, this.canvasWidth, this.canvasHeight)

    this.data.forEach((item) => {
      ctx.beginPath()
      ctx.fillStyle = 'rgba(255, 255, 255, .6)'
      ctx.arc(item.x, item.y, item.size, 0, Math.PI * 2)
      ctx.fill()
      ctx.closePath()
    })
  },
  /**
   *  @function 눈송이를 움직입니다.
   */
  move() {
    this.data = this.data.map((item) => {
      item.x += item.direction * item.speed
      item.y += item.speed

      const isMinOverPositionX = -item.size > item.x
      const isMaxOverPositionX = item.x > this.canvasWidth
      const isOverPositionY = item.y > this.canvasHeight

      // 벗어나면 반대방향, 맨 위로
      if (isMinOverPositionX || isMaxOverPositionX) {
        item.direction *= -1
      }
      if (isOverPositionY) {
        item.y = 0
      }

      return item
    })
  },
  falling(): number {
    this.move()
    this.draw()

    return window.requestAnimationFrame(this.falling.bind(this))
  },
})

export default FlakeMaker
