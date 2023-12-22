import { createContext, PropsWithChildren, useCallback, useContext, useEffect, useState } from 'react'
import { SnowMaker } from '../../../utils/snowMaker.ts'

interface SnowlyProps {
  width: number
  height: number
}
interface SnowlyContextType extends SnowlyProps {
  canvas: HTMLCanvasElement | null
}
const SnowlyContext = createContext<SnowlyContextType>({} as SnowlyContextType)

function Snowly({ width, height, children }: PropsWithChildren<SnowlyProps>) {
  const [state, setState] = useState<SnowlyContextType>({
    canvas: null,
    width,
    height,
  })

  const refCallback = useCallback((ref: HTMLCanvasElement) => {
    setState((prev) => ({ ...prev, canvas: ref }))
  }, [])

  return (
    <SnowlyContext.Provider value={state}>
      <canvas ref={refCallback} width={width} height={height} style={{ backgroundColor: 'blue' }}>
        <Container>{children}</Container>
      </canvas>
    </SnowlyContext.Provider>
  )
}

function Container({ children }: PropsWithChildren) {
  const snowlyState = useContext(SnowlyContext)

  if (Object.keys(snowlyState).length === 0) {
    return null
  }

  if (!snowlyState.canvas) {
    return null
  }

  return children
}

function Flake() {
  const slowlyState = useContext(SnowlyContext)

  useEffect(() => {
    const context = slowlyState.canvas?.getContext('2d')

    if (!context || !slowlyState.canvas) {
      return
    }

    const snow = SnowMaker(slowlyState.canvas, context)
    const ss = snow.init()
    return () => cancelAnimationFrame(ss)
  }, [slowlyState.canvas])

  return <></>
}

Snowly.Flake = Flake

export default Snowly
