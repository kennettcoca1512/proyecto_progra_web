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
import DetalleOrden from './routes/DetalleOrden.jsx';
import RegistroUsuario from './routes/RegistroUsuario.jsx';
import CambioPassword from './routes/CambioPassword.jsx';
import ListadoSeries from './routes/ListadoSeries.jsx';
import MantenimientoSerie from './routes/MantenimientoSerie.jsx'


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
  ,
  {
    path: "/detalle_orden",
    element: <DetalleOrden />
  }
  ,
  {
    path: "/registro_usuario",
    element: <RegistroUsuario />
  }
  ,
  {
    path: "/cambio_password",
    element: <CambioPassword />
  }
  ,
  {
    path: "/listado_series",
    element: <ListadoSeries />
  }
  ,
  {
    path: "/mantenimiento_series",
    element: <MantenimientoSerie/>
  }
  
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router}/>
  </React.StrictMode>,
)
