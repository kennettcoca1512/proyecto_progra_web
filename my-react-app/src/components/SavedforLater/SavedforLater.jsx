import './SavedforLater.css'
import {useState } from 'react'


const SavedforLater = (item)=>{

    const [subTotal, setSubTotal] = useState(item.Precio);
    return(
        <>
        <section className="cart"> 
            <div className="cart-item">
                <img src={item.imagen} alt="" />
                <div className="item-details">
                    <p>{item.Marca} {item.Modelo} {item.Procesador} {item.RAM} {item.Almacenamiento}</p>
                    <div className="actions">
                        <a href="#" className="remove-item">Eliminar |</a>
                        <a href="#" className="save-for-later"> Mover al carrito</a>
                    </div>
                </div>
                <div className="item-quantity">
                    <label for="quantity-1">Cantidad: 1</label>
                
                </div>
                <div className="item-price">
                    <p>Precio: ${item.Precio}</p>

                </div>
            </div>
        </section>        
        </>
    )
}

export default SavedforLater