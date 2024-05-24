import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import MainLayout from '../src/layouts/mainLayout'
import ServicePage from './pages/servicePage'
import Register from './pages/Register'
import { UserContextProvider } from './context/userContext'
import NotFoundPage from './pages/NotFoundPage'
import Login from './pages/login'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home /> 
      },
      {
        path: '/services',
        element: <ServicePage /> 
      }
    ],
  },
  {
    path: '/user',
    element: <MainLayout />,
    children: [
      {
        path: 'register',
        element: <Register />
      },
      {
        path: 'login',
        element: <Login />
      }
    ]
  },
  {
    path: '*', 
    element: <NotFoundPage /> 
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserContextProvider>
    <RouterProvider router={router} />
    </UserContextProvider>
  </React.StrictMode>,
)
