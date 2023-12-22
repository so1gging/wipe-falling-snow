import { useEffect } from 'react'
import { Snowly } from '../../utils/snow.ts'

export default function Window() {
  useEffect(() => {
    const canvas = document.getElementById('test') as HTMLCanvasElement
    const ctx = canvas.getContext('2d')!

    const snow = Snowly(canvas, ctx)

    const ss = snow.init()

    window.onresize = () => {
      snow.canvasWidth = canvas.clientWidth
      snow.canvasHeight = canvas.clientHeight

      snow.make()
    }
    return () => cancelAnimationFrame(ss)
  }, [])

  return <canvas id="test" width="500px" height="500px" style={{ backgroundColor: 'blue' }}></canvas>
}
