import { useState } from 'react'
import useInterval from '@/hooks/useInterval.ts'
import { getRandomIntegerWithinBounds } from '@/utils/random.ts'

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

  useInterval(toUpdateWindow, 1000)

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {window.map((row, index) => (
        <div key={`row-${index}`} style={{ display: 'flex' }}>
          {row.map((column, index) => (
            <div
              style={{
                width: '10px',
                height: '10px',
                display: 'flex',
                padding: '5px',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid black',
              }}
              key={`column-${column}-${index}`}
            >
              {column}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
