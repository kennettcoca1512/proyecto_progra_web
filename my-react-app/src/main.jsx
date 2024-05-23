import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import{
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import UsuariosRegistrados from "./routes/UsuariosRegistrados.jsx";
import DetalleUsuario from './routes/DetalleUsuario.jsx';
import ListadoOrdenes from './routes/ListadoOrdenes.jsx';
import DetalleOrden from './routes/DetalleOrden.jsx';
import { ItemIdProvider } from './components/Context/ItemIdContext.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <UsuariosRegistrados />
  },
  {
    path: "/items/:itemId",
    element: <DetalleUsuario />
  },
  {
    path: "/ListadoOrdenes",
    element: <ListadoOrdenes />
  },
  {
    path:"/DetalleOrden/:itemid",
    element: <DetalleOrden />
  }
  
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Envolver la aplicación con el proveedor del contexto */}
    <ItemIdProvider>
      <RouterProvider router={router} />
    </ItemIdProvider>
  </React.StrictMode>,
)
