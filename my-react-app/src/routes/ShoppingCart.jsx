import ShoppingCart from "../components/ShoppingCart/ShoppingCart";
import Header from "../components/Header/Header";
import { items } from "../data/items";
import Footer from "../components/footer/footer";
import { useState } from "react";

const CartPage = () => {
    const total = items.reduce((accumulator, item) => {
        return accumulator + item.Precio;
    }, 0);

    return (
        <>
            <Header />
                <h2>Carrito de compras</h2>
                <p className="dispo-envio">Items disponibles para envio</p>
                {
                items.map((item) => <ShoppingCart {...item} key={item.Modelo} />)
                }
                <div className="cart-summary">
                    <p className="total-amount">Total: {total}</p>
                    <button className="checkout-button">Checkout</button>
                    
                </div>
            <Footer />
        </>
    )
}


export default CartPage