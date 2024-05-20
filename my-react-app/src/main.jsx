import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import CartPage from './routes/ShoppingCart.jsx'
import Checkoutpage from './routes/Checkout.jsx'
import OrdenCompleta from './routes/OrderComplete.jsx'
import {
  createBrowserRouter, RouterProvider
} from 'react-router-dom'
import './index.css'
import { UserProvider } from './context/User.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
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
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <UserProvider>
    <React.StrictMode>
      <RouterProvider router={router}></RouterProvider>
    </React.StrictMode>
  </UserProvider>
)
