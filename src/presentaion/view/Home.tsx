import { Link } from 'react-router-dom'
import { ROOT_SIZE } from '@/utils/const.ts'

export default function Home() {
  return (
    <div
      style={{
        width: '100%',
        height: `${ROOT_SIZE}px`,
        backgroundImage: 'url("/main-background.png")',
        backgroundSize: 'contain',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          paddingTop: '80px',
        }}
      >
        <div
          style={{
            backgroundImage: 'url("/logo.png")',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            width: '200px',
            height: '70px',
          }}
        />
      </div>
      <Link to="/window">START</Link>
    </div>
  )
}
