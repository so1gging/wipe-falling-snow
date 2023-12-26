import { useContext } from 'react'
import { WrapperContext } from '@/context/WrapperContext.tsx'
import Frost from '@/presentaion/domains/Frost/Frost.tsx'
import SnowCanvas from '@/presentaion/domains/SnowCanvas/SnowCanvas.tsx'
import MouseTrigger from '@/context/MouseTriggerContext.tsx'
import { FROST_UNIT_WIDTH } from '@/utils/const.ts'
import usePointStore from '@/stores/point/store.ts'

export default function Window() {
  const { point } = usePointStore()
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
        <div style={{ position: 'absolute', bottom: 10, right: 10 }}>
          <span style={{ color: 'white' }}>{point}</span>
        </div>
      </div>
    </MouseTrigger>
  )
}
