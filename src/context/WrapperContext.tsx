import { createContext, PropsWithChildren, useCallback, useState } from 'react'
import { ROOT_WIDTH } from '@/utils/const.ts'

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
        ref={callback}
        style={{
          width: `${ROOT_WIDTH}px`,
          backgroundColor: 'white',
        }}
      >
        {state.element && children}
      </div>
    </WrapperContext.Provider>
  )
}
