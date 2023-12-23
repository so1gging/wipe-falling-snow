import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from '@/AppRouter.tsx'
import Layout from '@/Layout.tsx'
import '@/index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Layout>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </Layout>
  </React.StrictMode>,
)
