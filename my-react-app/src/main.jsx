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
import { useNavigate } from 'react-router-dom';
import { ItemIdProvider } from './context/itemIdContext.jsx'

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
    path: "/detalleProducto/:itemId",
    element: <DetalleProducto />
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ItemIdProvider>
        <RouterProvider router = {router}/>
    </ItemIdProvider>
  </React.StrictMode>,
)
