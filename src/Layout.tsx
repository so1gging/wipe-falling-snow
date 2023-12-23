import { PropsWithChildren } from 'react'

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#F0F2F2',
      }}
    >
      <div
        style={{
          minWidth: '340px',
          maxWidth: '744px',
          width: '100%',
          backgroundColor: 'white',
        }}
      >
        {children}
      </div>
    </div>
  )
}
