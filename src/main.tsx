import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'

import { Start, Slots } from './components/pages'

import './styles/style.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate replace to="/start" />
  },
  {
    path: '/start',
    element: <Start />
  },
  {
    path: '/slots',
    element: <Slots />
  }
])

const root = createRoot(document.getElementById('root') as HTMLElement)
root.render(<RouterProvider router={router} />)
