import {useNavigate} from 'react-router-dom';
export default function OrdenFila(order){
    const navigate = useNavigate();
    function verDetalle () {
        localStorage.setItem('order', JSON.stringify(order));
        console.log(order);
        navigate('/ruta-de-detalles');
    };



    return(
        <div key={order.id} className="order-item">
            <div className="order-info">
                <p>Orden x{order.items}</p>
                <p>Fecha: {order.date} - Total: {order.total}</p>
                <p>Enviado a: {order.address}</p>
            </div>
            
            
            <div className="order-nro">Orden Nro. {order.orderNumber}</div>
            <button onClick={verDetalle}>Ver Detalle</button>
            <hr />
          </div>
    )
}