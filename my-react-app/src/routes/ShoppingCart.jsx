import ShoppingCart from "../components/ShoppingCart/ShoppingCart";
import Header from "../components/Header/Header";
import { items } from "../data/items";
import { saved } from "../data/saved";
import Footer from "../components/footer/footer";
import SavedforLater from '../components/SavedforLater/SavedforLater'
import { useState, createContext } from "react";



const CartPage = () => {
    const [total, setTotal] = useState(0);

    function calculateSubtotal(subtotal) {
       setTotal(total + subtotal);
    }

    return (
        <>
            <Header />
                <h2>Carrito de compras</h2>
                <p className="dispo-envio">Items disponibles para envio</p>
                {
                items.map((item) => (
                    <ShoppingCart 
                    {...item} 
                    key={item.Modelo}
                    onSubtotalChange={calculateSubtotal} />))
                }
                <div className="cart-summary">
                    <p className="total-amount">Total: {total}</p>
                    <button className="checkout-button"><a href="/checkout">Checkout</a></button>
                    
                </div>
                <p className="dispo-envio">Guardado para despues</p>
                {
                saved.map((save) => <SavedforLater {...save} key={save.Modelo}/>)
                }
            <Footer />
        </>
    )
}


export default CartPage