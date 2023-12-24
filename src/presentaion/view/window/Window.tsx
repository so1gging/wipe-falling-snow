import { useContext } from 'react'
import { WrapperContext } from '@/context/WrapperContext.tsx'
import Frost from '@/presentaion/domains/Frost/Frost.tsx'
import SnowCanvas from '@/presentaion/domains/SnowCanvas/SnowCanvas.tsx'
import MouseTrigger from '@/context/MouseTriggerContext.tsx'
import { FROST_UNIT_WIDTH } from '@/utils/const.ts'

export default function Window() {
  const wrapperContext = useContext(WrapperContext)
  const screen = {
    width: wrapperContext.element.offsetWidth,
    height: wrapperContext.element.offsetHeight,
  }
  const xSize = Math.floor(screen.width / FROST_UNIT_WIDTH + 1)
  const ySize = Math.floor(screen.height / FROST_UNIT_WIDTH)

  return (
    <MouseTrigger>
      <div style={{ position: 'relative' }}>
        <SnowCanvas width={screen.width} height={screen.height}>
          <SnowCanvas.Flake />
        </SnowCanvas>
        <div style={{ position: 'absolute', top: 0 }}>
          <Frost xSize={xSize} ySize={ySize} />
        </div>
      </div>
    </MouseTrigger>
  )
}
