import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import LandingPage from './routes/LandingPage.jsx'
import LoginPage from './routes/LoginPage.jsx'
import Signin from './components/Login/Signin/Signin.jsx'
import { AuthProvider } from './components/Login/UserContext/UserContext.jsx'

import UserLoggedPage from './routes/UserLoggedPage.jsx'

import{
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import Recuperacion from './components/Login/Recuperacion/Recuperacion.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />
  },
  {
    path:'/login',
    element: <LoginPage/>
  },
  {
    path:'/signin',
    element: <Signin/>
  },
  {
    path:'/recuperacion',
    element: <Recuperacion/>
  },
  {
    path:'/account',
    element: <UserLoggedPage/>
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}/>
    </AuthProvider>
  </React.StrictMode>,
)
