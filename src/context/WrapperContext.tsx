import { createContext, PropsWithChildren, useCallback, useState } from 'react'
import { ROOT_SIZE } from '@/utils/const.ts'

type WrapperContextType = {
  element: HTMLDivElement
}
export const WrapperContext = createContext<WrapperContextType>({} as WrapperContextType)

export default function Wrapper({ children }: PropsWithChildren) {
  const [state, setState] = useState<WrapperContextType>({} as WrapperContextType)

  const callback = useCallback((ref: HTMLDivElement) => {
    setState({ element: ref })
  }, [])

  return (
    <WrapperContext.Provider value={state}>
      <div
        id="root-wrapper"
        ref={callback}
        style={{
          position: 'relative',
          width: `${ROOT_SIZE}px`,
          height: `${ROOT_SIZE}px`,
          backgroundColor: 'white',
        }}
      >
        {state.element && children}
      </div>
    </WrapperContext.Provider>
  )
}
