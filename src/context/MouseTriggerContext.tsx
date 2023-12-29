import { createContext, PropsWithChildren, useEffect, useRef, useState } from 'react'

interface MouseTriggerContextType {
  x: number
  y: number
}
export const MouseTriggerContext = createContext<MouseTriggerContextType>({ x: 0, y: 0 })
export default function MouseTrigger({ children }: PropsWithChildren) {
  const triggerRef = useRef<HTMLDivElement | null>(null)
  const [state, setState] = useState<MouseTriggerContextType>({ x: 0, y: 0 })

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
    triggerRef.current.addEventListener('touchmove', mousemove)

    // eslint-disable-next-line react-hooks/exhaustive-deps
    return () => {
      triggerRef.current?.removeEventListener('mousemove', mousemove)
      triggerRef.current?.removeEventListener('touchmove', mousemove)
    }
  })

  return (
    <MouseTriggerContext.Provider value={state}>
      <div ref={triggerRef}>{children}</div>
    </MouseTriggerContext.Provider>
  )
}
