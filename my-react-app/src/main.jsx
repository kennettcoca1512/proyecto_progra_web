import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import CartPage from './routes/ShoppingCart.jsx'
import Checkoutpage from './routes/Checkout.jsx'
import OrdenCompleta from './routes/OrderComplete.jsx'
import './index.css'
import LandingPage from './routes/LandingPage.jsx'
import LoginPage from './routes/LoginPage.jsx'
import SigninPage from './routes/SigninPage.jsx'
import RecuperacionPage from './routes/RecuperacionPage.jsx'
import DashboardAdmin from './routes/DashboardAdmin.jsx'
import ListaProductosAdmin from './routes/ListaProductosAdmin.jsx'
import DetallesProductoAdmin from './routes/DetallesProductoAdmin.jsx'
import AgregarProductosAdmin from './routes/AgregarProductosAdmin.jsx'

import { UserProvider } from './context/UserContext/UserContext.jsx'

import UserLoggedPage from './routes/UserLoggedPage.jsx'

import{
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import UsuariosRegistrados from "./routes/UsuariosRegistrados.jsx";
import DetalleUsuario from './routes/DetalleUsuario.jsx';
import ListadoOrdenes from './routes/ListadoOrdenes.jsx';
import DetalleOrden from './routes/DetalleOrden.jsx';
import { ItemIdProvider } from './context/itemIdContext.jsx'
import ResultadosBusqueda from './routes/ResultadosBusqueda.jsx'
import DetalleProducto from './routes/DetalleProducto.jsx'



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
  },
  {
    path: "/DashboardAdmin",
    element: <DashboardAdmin />
  },
  {
    path: "/ListaProductosAdmin",
    element: <ListaProductosAdmin />
  },
  {
    path: "/DetallesProductoAdmin",
    element: <DetallesProductoAdmin />
  },
  {
    path: "/AgregarProductosAdmin",
    element: <AgregarProductosAdmin />
  },
  {
    path: "/producto/:id",
    element: <AgregarProductosAdmin />
  },
  {
    path: "Carrito/",
    element: <CartPage/>,
  },
  {
    path: "checkout/",
    element: <Checkoutpage/>,
  },
  {
    path: "OrderComplete/",
    element: <OrdenCompleta/>,
  },
  {
    path: "/UsuariosRegistrados",
    element: <UsuariosRegistrados />,
  },
  {
    path: "/items/:itemId",
    element: <DetalleUsuario />,
  },
  {
    path: "/ListadoOrdenes",
    element: <ListadoOrdenes />,
  },
  {
    path:"/DetalleOrden/:itemid",
    element: <DetalleOrden />,
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <UserProvider>
      <ItemIdProvider>
          <RouterProvider router = {router}/>
      </ItemIdProvider>
    </UserProvider>
  </React.StrictMode>,
)
