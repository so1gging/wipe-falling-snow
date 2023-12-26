import { createPortal } from 'react-dom'
import { PropsWithChildren } from 'react'

export default function Dialog({ children }: PropsWithChildren) {
  return createPortal(
    <div
      style={{
        position: 'absolute',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        top: '120px',
      }}
    >
      <div
        style={{
          width: '250px',
          backgroundColor: '#E0E8EE',
          border: '1px solid #323165',
          padding: '3px',
        }}
      >
        <div
          style={{
            border: '1px solid black',
            backgroundColor: '#323165',
            color: 'white',
            padding: '8px 12px',
            fontSize: '13px',
          }}
        >
          {children}
        </div>
      </div>
    </div>,
    document.getElementById('root-wrapper') ?? document.body,
  )
}
