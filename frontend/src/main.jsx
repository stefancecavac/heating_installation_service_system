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
import Redirect from './layouts/redirect'
import ServiceInstallation from './pages/serviceInstallation'
import AuthRedirect from './layouts/authRedirect'
import './i18n';



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
        element: <ServicePage />,
      },
      {
        path: '/services/installation',
        element: <AuthRedirect><ServiceInstallation></ServiceInstallation></AuthRedirect>
      }
    ],
  },
  {
    path: '/user',
    element: <MainLayout />,
    children: [
      {
        path: 'register',
        element: <Redirect><Register /></Redirect>
      },
      {
        path: 'login',
        element: <Redirect><Login /></Redirect>
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
