import { Navigate} from "react-router-dom";
import { useItemId } from "../../context/itemIdContext";
import { productosTotal } from "../../data/productosTotal";
import { useState } from "react";

const ItemDetail = () => {
    const {itemId} = useItemId();

    const [count, setCount] = useState(0)
    function handleIncrement(){
        setCount(count+1)
    }
    function handleDecrement(){
        if(count==0)
            {
            setCount(0)
        }
        else{
            setCount(count-1)
        }
    }
    const findItembyId = (id) => {
        return productosTotal.find(item => item.id === parseInt(id));
    };
    const item = findItembyId(itemId);
    if(!item){
        return <h1>ITEM NO ENCONTRADO</h1>
    }

    const spanStyle ={
        display: 'flex',
        justifyContent: 'space-evenly'
        
    }
    const nombreStyle ={
        paddingLeft:'50px',
        fontSize: '35px'
    }
    const sectionStyle = {
        marginTop: '100px'
    }
    const dispStyle = {
        backgroundColor: '#f0f0f0',
        border: '2px solid black',
        width: '400px',
        paddingTop: '30px',
        paddingBottom: '30px',
        paddingLeft: '250px',
        fontSize: '30px',
        fontWeight: 'bolder'
    }
    const demasStyle={
        border: '2px solid black',
        width: '400px',
        height: '100',
        paddingTop: '30px',
        paddingBottom: '300px',
        paddingLeft: '250px',
        marginRight: '30px',
    }
    const precioStyle ={
        fontSize: '50px',
        marginLeft:'-100px',
        paddingBottom: '20px'
    }
    const buttonStyle ={
        padding: '20px',
        backgroundColor: 'black',
        color: 'white',
        fontWeight: 'bold',
        fontSize: '35px',
        marginLeft: '-140px',
        marginBottom: '10px'
    }
    const cantidadStyle ={
        fontSize: '30px',
        marginRight: '50px'
    }
    const spanStyle2={
        display: 'flex',
        justifyContent: 'space-between',
        marginRight: '250px'
    }
    const buttonStyle2 ={
        paddingLeft: '15px',
        paddingRight: '15px',
        fontSize: '25px',
    }
    const sectionStyle2 ={
        border: '2px solid black',
        width: '1000px',
        height: '250px',
        paddingTop: '30px',
        paddingBottom: '150px',
        paddingLeft: '600px',
        paddingRight: '300px',
        marginRight: '30px',
        marginLeft: '400px',
        marginTop: '100px',
        fontSize: '25px',
        backgroundColor: '#f0f0f0'
    }
    const listyle = {
        fontWeight: 'bold',
        marginBottom: '30px'
    }
    const h2style ={
        fontSize: '40px'
    }
    return (
        <>
                <h2 style={nombreStyle}>{item.nombre}</h2>
                <br></br>
                <hr></hr>
                <section style={sectionStyle}>
                    <span style={spanStyle}>
                        <img src={item.imagen}></img>
                        <div>
                            <h2 style={dispStyle}>DISPONIBLE</h2>
                            <div style={demasStyle}>
                                <h2 style={precioStyle}>PRECIO: S/.{item.precio}</h2>
                                <button style={buttonStyle}>AGREGAR AL CARRITO</button>
                                <h5 style={cantidadStyle}>CANTIDAD:</h5>
                                <span style={spanStyle2}>
                                    <button onClick={handleDecrement} style={buttonStyle2}>-</button>
                                    <h2>{count}</h2>
                                    <button onClick={handleIncrement} style={buttonStyle2}>+</button>
                                </span>
                            </div>
                        </div>
                    </span>
                </section>
                <section style={sectionStyle2}>
                    <ul>
                        <h2 style={h2style}>CARACTERISTICAS DEL PRODUCTO</h2>
                        <li style={listyle}>ESPACIO RAM : {item.RAM}</li>
                        <li style={listyle}>TIPO DE GRAFICA : {item.grafica}</li>
                        <li style={listyle}> PROCESADOR : {item.procesador}</li>
                        <li style={listyle}> CANTIDAD EN STOCK : {item.stock}</li>
                    </ul>
                </section>
                <br></br>
                <br></br>
        </>
    );
};
export default ItemDetail