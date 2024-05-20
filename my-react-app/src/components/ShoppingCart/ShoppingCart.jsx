import './ShoppingCart.css'
import {useState } from 'react'



const ShoppingCart =(item)=>{

    
    const [subTotal, setSubTotal] = useState(item.Precio);


    return (
        <>
        <section className="cart"> 
            <div className="cart-item">
                <img src={item.imagen} alt="" />
                <div className="item-details">
                    <p>{item.Marca} {item.Modelo} {item.Procesador} {item.RAM} {item.Almacenamiento}</p>
                    <div className="actions">
                        <a href="#" className="remove-item">Eliminar |</a>
                        <a href="#" className="save-for-later"> Guardar para despues</a>
                    </div>
                </div>
                <div className="item-quantity">
                    <label for="quantity-1">Cantidad</label>
                    <select className="quantity-select" id="quantity-1" onChange={(e) => {
                        const newSubTotal = item.Precio * e.target.value;
                        setSubTotal(newSubTotal);
                    }}>
                        <option value="1" selected>1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </div>
                <div className="item-price">
                    <p>Precio: ${item.Precio}</p>
                    <p>SubTotal: <span className="subTotal">${subTotal}</span></p>
                </div>
            </div>
        </section>        
        </>
    
    )
}


export default ShoppingCart;