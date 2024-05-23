import StructureItem from "../components/ShoppingCart/ShoppingCartStructure";
import Header from "../components/Header/Header";
import Footer from "../components/footer/footer";
import { CartProvider } from "../components/ShoppingCart/CartContext";




const CartPage = () => {


    return (
        <>
        <CartProvider>
            <Header />
            <StructureItem/>
            <Footer />
        </CartProvider>
        </>
    )
}



export default CartPage