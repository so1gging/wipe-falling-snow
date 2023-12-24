import { useContext, useEffect, useRef, useState } from 'react'
import { getRandomIntegerWithinBounds } from '@/utils/random.ts'
import { MouseTriggerContext } from '@/context/MouseTriggerContext.tsx'
import { WrapperContext } from '@/context/WrapperContext.tsx'
import { toReverseMouseMove } from '@/utils/logic.ts'
import { FROST_UNIT_WIDTH } from '@/utils/const.ts'

interface FrostProps {
  xSize: number
  ySize: number
}

interface Item {
  count: number
  x: number
  y: number
  isVisible: boolean
}

export default function Frost({ xSize, ySize }: FrostProps) {
  const wrapperContext = useContext(WrapperContext)
  const mouseContext = useContext(MouseTriggerContext)

  const pointer = {
    x: mouseContext.x - wrapperContext.element.offsetLeft,
    y: mouseContext.y - wrapperContext.element.offsetTop,
  }

  const DEFAULT_ARRAY: Item[][] = Array.from(Array(xSize), () =>
    new Array(ySize).fill({
      count: 0,
      x: 0,
      y: 0,
      isVisible: false,
    }),
  )
  const [window, setWindow] = useState(DEFAULT_ARRAY)

  if (window.length !== xSize || window[0].length !== ySize) {
    setWindow(DEFAULT_ARRAY)
  }

  const savedCallback = useRef<() => void>()
  const toUpdateWindow = () => {
    const count = getRandomIntegerWithinBounds(0, 10)
    setWindow((prev) => {
      for (let i = 0; i < count; i++) {
        const x = getRandomIntegerWithinBounds(0, xSize)
        const y = getRandomIntegerWithinBounds(0, ySize)

        const item: Item = {
          count: prev[x][y].count + 1,
          x: x * FROST_UNIT_WIDTH,
          y: y * FROST_UNIT_WIDTH,
          isVisible: true,
        }
        prev[x][y] = item
      }
      return [...prev]
    })
  }

  useEffect(() => {
    savedCallback.current = toUpdateWindow
  }, [toUpdateWindow])

  useEffect(() => {
    const tick = () => {
      if (savedCallback.current) {
        savedCallback.current()
      }
    }

    const timer = setInterval(tick, 1000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    setWindow((prev) => {
      prev.forEach((row, x) =>
        row.forEach((item, y) => {
          if (isCrush(pointer.x, pointer.y, item.x, item.y)) {
            const movePosition = move(pointer.x, pointer.y, item.x, item.y)
            prev[x][y].x = movePosition.x
            prev[x][y].y = movePosition.y
          }
        }),
      )

      return [...prev]
    })
  }, [pointer.x, pointer.y])

  return (
    <div style={{ position: 'relative' }}>
      {window.map((row, x) =>
        row.map((item, y) => (
          <div
            key={`item-${x}-${y}-${item.y}`}
            style={{
              top: item.y,
              left: item.x,
              position: 'absolute',
              width: `${FROST_UNIT_WIDTH}px`,
              height: `${FROST_UNIT_WIDTH}px`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#F0F2F2',
              opacity: item.count * 0.4,
              color: '#5E7B8C',
            }}
          />
        )),
      )}
    </div>
  )
}

const isCrush = (mouseX: number, mouseY: number, frostX: number, frostY: number) => {
  const diffX = mouseX - frostX
  const diffY = mouseY - frostY
  const mousePointerRadius = Math.pow(diffX, 2) + Math.pow(diffY, 2)
  return Math.sqrt(mousePointerRadius) <= 50
}
const move = (mouseX: number, mouseY: number, frostX: number, frostY: number) => {
  const diffX = mouseX - frostX
  const diffY = mouseY - frostY
  const movePosition = toReverseMouseMove(frostX, frostY, diffX, diffY)

  return {
    x: movePosition.x,
    y: movePosition.y,
  }
}
