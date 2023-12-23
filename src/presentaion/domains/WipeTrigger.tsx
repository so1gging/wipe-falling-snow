import { createContext, PropsWithChildren, useEffect, useRef, useState } from 'react'

interface WipeTriggerContextType {
  x: number
  y: number
}
const WipeTriggerContext = createContext<WipeTriggerContextType>({ x: 0, y: 0 })
export default function WipeTrigger({ children }: PropsWithChildren) {
  const triggerRef = useRef<HTMLDivElement | null>(null)
  const [state, setState] = useState<WipeTriggerContextType>({ x: 0, y: 0 })

  useEffect(() => {
    if (!triggerRef || !triggerRef.current) {
      return
    }
    const mousemove: EventListener = (e: MouseEventInit) => {
      const { clientX, clientY } = e
      if (clientX && clientY) {
        setState({ x: clientX, y: clientY })
      }
    }

    triggerRef.current.addEventListener('mousemove', mousemove)

    // eslint-disable-next-line react-hooks/exhaustive-deps
    return () => triggerRef.current?.removeEventListener('mousemove', mousemove)
  })

  return (
    <WipeTriggerContext.Provider value={state}>
      <div ref={triggerRef}>{children}</div>
    </WipeTriggerContext.Provider>
  )
}
