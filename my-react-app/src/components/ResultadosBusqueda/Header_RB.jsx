import { useState } from "react"
import { productosTotal } from "../../data/productosTotal"

export default function Header_RB(){
    const labelStyle={
        fontSize: '35px'
    }
    const selectStyle={
        height: '60px',
        width: '220px',
        fontSize: '30px',
        marginLeft: '30px'
    }
    const spanStyle ={
        marginLeft: '75%',
        marginBottom: '50px'
    }
    const divStyle = {
        backgroundColor:'grey',
        padding: '20px',
        fontSize: '30px',
        color: 'white',
        paddingLeft: '60px',
        paddingRight: '2100px',
        marginLeft: '30px',
        marginTop: '80px'
        
    }
    const [sortCriteria, setSortCriteria] = useState('default')
    const [ItemsFiltrados, setItemsFiltrados] = useState(productosTotal)
    const handleSortChange = (event) => {
        setSortCriteria(event.target.value);
    }
    
    const handleShowClick = () =>{
        let filtrados = productosTotal.filter(item =>
            item.nombre.toLowerCase().includes(localStorage.getItem('busqueda').toLowerCase()) ||
            item.grafica.toLowerCase().includes(localStorage.getItem('busqueda').toLowerCase()) ||
            item.procesador.toLowerCase().includes(localStorage.getItem('busqueda').toLowerCase()) ||
            item.precio.toString().includes(localStorage.getItem('busqueda').toLowerCase())
        );

        if(sortCriteria === 'precio alto-bajo'){
            filtrados = filtrados.sort((a,b) => b.precio - a.precio);
        } else if (sortCriteria === 'precio bajo-alto'){
            filtrados = filtrados.sort((a,b) => a.precio - b.precio);
        } else if (sortCriteria === 'nombre a-z'){
            filtrados = filtrados.sort((a,b)=>a.nombre.localeCompare(b.nombre));
        } else if (sortCriteria === 'nombre z-a'){
            filtrados = filtrados.sort((a,b) => b.nombre.localeCompare(a.nombre));
        }

        setItemsFiltrados(filtrados);

    }

    return (
        <>
            <span style={spanStyle}>
                <label style={labelStyle} for="opciones">Ordenar Por:</label>
                <select style={selectStyle} value={sortCriteria} onChange={handleSortChange}>
                    <option value="Default">Default</option>
                    <option value="precio alto-bajo">Precio (de mayor a menor)</option>
                    <option value="precio bajo-alto">Precio (de menor a mayor)</option>
                    <option value="nombre a-z">Nombre (A-Z)</option>
                    <option value="nombre z-a">Nombre (Z-A)</option>
                </select>
                <button onClick={handleShowClick}>Mostrar</button>
            </span>
            <br></br>
            <br></br>
            <br></br>
            <span style={divStyle}><b>RESULTADOS DE BUSQUEDA</b></span>
            <br></br>
            <br></br>
            <span>
                {ItemsFiltrados.map(item => (
                    <span>
                        <img src={item.imagen}></img>
                        <div>
                            <h2>{item.nombre}</h2>
                            <p>S/.{item.precio}</p>
                        </div>
                    </span>
                ))}
            </span>
        </>
    )
}