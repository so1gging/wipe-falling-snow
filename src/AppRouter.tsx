import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './presentaion/view/Home.tsx'

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  )
}

export default AppRouter
