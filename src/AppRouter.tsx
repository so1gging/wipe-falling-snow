import { Route, Routes } from 'react-router-dom'
import Home from '@/presentaion/view/Home.tsx'
import Window from '@/presentaion/view/window/Window.tsx'

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/window" element={<Window />} />
    </Routes>
  )
}

export default AppRouter
