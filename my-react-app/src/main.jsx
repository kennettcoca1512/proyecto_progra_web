import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import LandingPage from './routes/LandingPage.jsx'
import LoginPage from './routes/LoginPage.jsx'
import SigninPage from './routes/SigninPage.jsx'
import RecuperacionPage from './routes/RecuperacionPage.jsx'

import { UserProvider } from './context/UserContext/UserContext.jsx'

import UserLoggedPage from './routes/UserLoggedPage.jsx'

import{
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import ResultadosBusqueda from './routes/ResultadosBusqueda.jsx'
import DetalleProducto from './routes/DetalleProducto.jsx'
import { useNavigate } from 'react-router-dom';
import { ItemIdProvider } from './context/itemIdContext.jsx'

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
    element: <SigninPage/>
  },
  {
    path:'/recuperacion',
    element: <RecuperacionPage/>
  },
  {
    path:'/account',
    element: <UserLoggedPage/>
  },
  {
    path: "/resultadoBusqueda",
    element: <ResultadosBusqueda />
  },
  {
    path: "/detalleProducto/:itemId",
    element: <DetalleProducto />
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <UserProvider>
      <RouterProvider router={router}/>
    </UserProvider>
    <ItemIdProvider>
        <RouterProvider router = {router}/>
    </ItemIdProvider>
  </React.StrictMode>,
)
