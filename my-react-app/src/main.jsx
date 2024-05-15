import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import LandingPage from './routes/LandingPage.jsx'
import{
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import ResultadosBusqueda from './routes/ResultadosBusqueda.jsx'
import DetalleProducto from './routes/DetalleProducto.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />
  },
  {
    path: "/resultadoBusqueda",
    element: <ResultadosBusqueda />
  },
  {
    path: "/detalleProducto",
    element: <DetalleProducto />
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router}/>
  </React.StrictMode>,
)
