import { PropsWithChildren } from 'react'
import Wrapper from '@/context/WrapperContext.tsx'

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F0F2F2',
      }}
    >
      <Wrapper>{children}</Wrapper>
    </div>
  )
}
