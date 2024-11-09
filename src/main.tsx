import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'

import { Search, Start, Slots, Live, Jackpot } from './components/pages'

import './styles/style.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate replace to="/start" />
  },
  {
    path: '/search',
    element: <Search />
  },
  {
    path: '/start',
    element: <Start />
  },
  {
    path: '/slots',
    element: <Slots />
  },
  {
    path: '/live',
    element: <Live />
  },
  {
    path: '/jackpot',
    element: <Jackpot />
  }
])

const root = createRoot(document.getElementById('root') as HTMLElement)
root.render(<RouterProvider router={router} />)
