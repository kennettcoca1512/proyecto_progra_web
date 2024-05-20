import "./checkout.css"
import { items } from "../../data/items"
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const Checkout = () =>{

    const [shippingMethod, setShippingMethod] = useState("economico");
    const [shippingCost, setShippingCost] = useState(10.0);
    const validItems = items.filter(item => typeof item.Precio === 'number');
    const subtotal = validItems.reduce((acc, item) => acc + item.Precio, 0);
    const impuesto = subtotal * 0.18;
    const total = subtotal + impuesto + shippingCost;
    const navigate = useNavigate();
    const handleButtonClick = () => {
        navigate('/OrderComplete');
      };

    return(
        <>
            <h2 className="main-title">¡Casi Listo! Tu orden no estará completa hasta que revises y presiones el botón “completar orden” al final de la página.</h2>
            <form>
                <h2 className="title1">Datos de la compra</h2>
                <div className="section-compra">
                    <div class="section-checkout">
                        <h2 className="titulo2" >Direccion de Envio</h2>
                        <div class="form-group">
                            <input type="text" id="direccion1" placeholder="Línea 1"/>
                            <input type="text" id="direccion2" placeholder="Línea 2"/>
                            <input type="text" id="distrito" placeholder="Distrito"/>
                            <input type="text" id="ciudad" placeholder="Ciudad"/>
                            <input type="text" id="pais" placeholder="País"/>
                        </div>
                    </div>
                    
                    <div class="section-checkout">
                        <h2 className="titulo2">Pago</h2>
                        <div class="form-group">
                            <label>
                                <input type="radio" name="pago" value="qr"/> Pago con código QR
                            </label>
                            <label>
                                <input type="radio" name="pago" value="tarjeta"/> Pago con tarjeta de crédito
                            </label>
                            <input type="text" id="numTarjeta" placeholder="Número de Tarjeta"/>
                            <input type="text" id="nombreTarjeta" placeholder="Nombre en tarjeta"/>
                            <input type="text" id="vencimiento" placeholder="Vencimiento"/>
                            <input type="text" id="ccv" placeholder="CCV"/>
                        </div>
                    </div>
                </div>
                <h2 className="title1">Método de envio</h2>
                <div class="section-checkout2">
                    <div class="form-group2">
                    <label>
                        <input
                        type="radio"
                        name="envio"
                        value="economico"
                        checked={shippingMethod === "economico"}
                        onChange={(e) => {
                            setShippingMethod(e.target.value);
                            setShippingCost(10.0);
                        }}
                        />
                        Económico Aéreo - S/10.00
                    </label>
                    <label>
                        <input
                        type="radio"
                        name="envio"
                        value="prioritario"
                        checked={shippingMethod === "prioritario"}
                        onChange={(e) => {
                            setShippingMethod(e.target.value);
                            setShippingCost(17.0);
                        }}
                        />
                        Envío prioritario (5 a 10 días) - S/17.00
                    </label>
                    </div>
                </div>
                <div className="section-compra">
                    <div class="section-checkout">
                        <h2 className="titulo2" >Items en Pedido</h2>
                        <ul>
                            {
                                items.map((item) => <li>{item.Marca} {item.Modelo} {item.Precio}</li>)
                            }
                        </ul>
                    </div>
                    
                    <div class="section-checkout">
                        <h2 className="titulo2" >Resumen de Orden</h2>
                        <ul>
                            <li>Subtotal: S/{subtotal - impuesto}</li>
                            <li>Envío: S/{shippingCost}</li>
                            <li>Impuestos: S/{impuesto}</li>
                            <li>Total: S/{total}</li>
                        </ul>
                        <button className="order" type="submit" onClick={handleButtonClick} >Completar Orden</button>
                    </div>
                </div>
                
            </form>
        </>
    )
}

export default Checkout