import { createContext, PropsWithChildren, useCallback, useContext, useEffect, useState } from 'react'
import { SnowMaker } from '../../../utils/snowMaker.ts'

interface SnowCanvasProps {
  width: number // 캔버스 width
  height: number // 캔버스 height
}
interface SnowCanvasContextProps extends SnowCanvasProps {
  canvas: HTMLCanvasElement | null
}
const SnowCanvasContext = createContext<SnowCanvasContextProps>({} as SnowCanvasContextProps)

function SnowCanvas({ width, height, children }: PropsWithChildren<SnowCanvasProps>) {
  const [state, setState] = useState<SnowCanvasContextProps>({
    canvas: null,
    width,
    height,
  })

  const refCallback = useCallback((ref: HTMLCanvasElement) => {
    setState((prev) => ({ ...prev, canvas: ref }))
  }, [])

  return (
    <SnowCanvasContext.Provider value={state}>
      <canvas ref={refCallback} width={width} height={height} style={{ backgroundColor: 'blue' }}>
        <FlakeLayout>{children}</FlakeLayout>
      </canvas>
    </SnowCanvasContext.Provider>
  )
}

function FlakeLayout({ children }: PropsWithChildren) {
  const state = useContext(SnowCanvasContext)

  if (Object.keys(state).length === 0) {
    return null
  }

  if (!state.canvas) {
    return null
  }

  return children
}

function Flake() {
  const slowlyState = useContext(SnowCanvasContext)

  useEffect(() => {
    const context = slowlyState.canvas?.getContext('2d')

    if (!context || !slowlyState.canvas) {
      return
    }

    const snow = SnowMaker(slowlyState.canvas, context)
    const animationNumber = snow.init()
    return () => cancelAnimationFrame(animationNumber)
  }, [slowlyState.canvas])

  return <></>
}

SnowCanvas.Flake = Flake

export default SnowCanvas
