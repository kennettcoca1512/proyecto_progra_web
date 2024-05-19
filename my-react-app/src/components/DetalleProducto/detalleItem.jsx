import { Navigate} from "react-router-dom";
import { useItemId } from "../../context/itemIdContext";
import { productosTotal } from "../../data/productosTotal";

const ItemDetail = () => {
    const {itemId} = useItemId();

    const findItembyId = (id) => {
        return productosTotal.find(item => item.id === parseInt(id));
    };
    const item = findItembyId(itemId);
    if(!item){
        return <h1>ITEM NO ENCONTRADO</h1>
    }

    return (
        <>
                <h2>{item.nombre}</h2>
                <br></br>
                <hr></hr>
                <section>
                    <img src={item.imagen}></img>
                </section>
                <aside>
                    <div>
                        <h2>DISPONIBLE</h2>
                        <h2>S/.{item.precio}</h2>
                        <button>AGREGAR AL CARRITO</button>
                        <h5>Cantidad:</h5>
                    </div>
                </aside>
                <section>
                    <ul>
                        <h2>Caracteristicas del producto</h2>
                        <li>{item.RAM}</li>
                        <li>{item.grafica}</li>
                        <li>{item.procesador}</li>
                        <li>{item.stock}</li>
                    </ul>
                </section>
        </>
    );
};
export default ItemDetail