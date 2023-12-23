import { useState } from 'react'
import useInterval from '@/hooks/useInterval.ts'
import { getRandomIntegerWithinBounds } from '@/utils/random.ts'
import FrostFlake from '@/presentaion/domains/Frost/FrostFlake.tsx'

interface FrostProps {
  size: number
}
export default function Frost({ size }: FrostProps) {
  const DEFAULT_ARRAY = Array.from(Array(size), () => new Array(size).fill(0))
  const [window, setWindow] = useState(DEFAULT_ARRAY)

  if (window.length !== size) {
    setWindow(DEFAULT_ARRAY)
  }

  const toUpdateWindow = () => {
    const x = getRandomIntegerWithinBounds(0, size)
    const y = getRandomIntegerWithinBounds(0, size)
    setWindow((prev) => {
      prev[x][y] += 1
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
                    prev[x][y] -= 1
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
                  width: '10px',
                  height: '10px',
                  display: 'flex',
                  padding: '5px',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid black',
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
