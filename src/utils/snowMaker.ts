interface SnowMaker {
  x: number
  y: number
  size: number
  speed: number
  direction: number
}

export const SnowMaker = (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => ({
  data: [] as SnowMaker[],
  canvasWidth: canvas.clientWidth,
  canvasHeight: canvas.clientHeight,

  make() {
    const data: SnowMaker[] = []

    // 랜덤한 데이터 200개 생성
    for (let i = 0; i < 200; i++) {
      const x = Math.random() * this.canvasWidth
      const y = Math.random() * this.canvasHeight

      const size = Math.random() + 0.5
      const speed = Math.random() * 0.3 + 0.1
      const direction = [-1, 1][Math.floor(Math.random() * 2)]

      data.push({ x, y, size, speed, direction })
    }

    // SnowMaker 객체에 데이터 저장
    this.data = data
  },

  move() {
    this.data = this.data.map((item) => {
      // 방향에 맞게 이동
      item.x += item.direction * item.speed
      item.y += item.speed

      // 캔버스를 벗어났는지 판단
      const isMinOverPositionX = -item.size > item.x
      const isMaxOverPositionX = item.x > this.canvasWidth
      const isOverPositionY = item.y > this.canvasHeight

      // 벗어나면 반대방향, 맨 위로
      if (isMinOverPositionX || isMaxOverPositionX) {
        item.direction *= -1
      }
      if (isOverPositionY) {
        item.y = -item.size
      }

      return item
    })
  },

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
  init() {
    this.make()
    return this.loop()
  },

  loop(): number {
    this.move()
    this.draw()

    return window.requestAnimationFrame(this.loop.bind(this))
  },
})
