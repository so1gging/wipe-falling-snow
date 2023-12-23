import { useState } from 'react'
import useInterval from '@/hooks/useInterval.ts'
import { getRandomIntegerWithinBounds } from '@/utils/random.ts'
import FrostFlake from '@/presentaion/domains/Frost/FrostFlake.tsx'

interface FrostProps {
  xSize: number
  ySize: number
}
export default function Frost({ xSize, ySize }: FrostProps) {
  const DEFAULT_ARRAY = Array.from(Array(xSize), () => new Array(ySize).fill(0))
  const [window, setWindow] = useState(DEFAULT_ARRAY)

  if (window.length !== xSize || window[0].length !== ySize) {
    setWindow(DEFAULT_ARRAY)
  }

  const toUpdateWindow = () => {
    const count = getRandomIntegerWithinBounds(0, 10)
    setWindow((prev) => {
      for (let i = 0; i < count; i++) {
        const x = getRandomIntegerWithinBounds(0, xSize)
        const y = getRandomIntegerWithinBounds(0, ySize)
        prev[x][y] += 1
      }
      return [...prev]
    })
  }

  useInterval(toUpdateWindow, 500)

  return (
    <div style={{ position: 'relative' }}>
      <div style={{ display: 'flex', position: 'absolute', flexDirection: 'column', zIndex: '1' }}>
        {DEFAULT_ARRAY.map((row, x) => (
          <div key={`row-${x}`} style={{ display: 'flex' }}>
            {row.map((column, y) => (
              <FrostFlake
                key={`column-${column}-${y}`}
                onMouseenter={() => {
                  setWindow((prev) => {
                    prev[x][y] -= 2
                    if (prev[x][y] < 0) {
                      prev[x][y] = 0
                    }
                    return [...prev]
                  })
                }}
              />
            ))}
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', position: 'absolute', flexDirection: 'column' }}>
        {window.map((row, x) => (
          <div key={`row-${x}`} style={{ display: 'flex' }}>
            {row.map((column, y) => (
              <div
                key={`column-${column}-${y}`}
                style={{
                  width: '22px',
                  height: '22px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#F0F2F2',
                  opacity: column * 0.1,
                  color: '#5E7B8C',
                }}
              >
                {column}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
