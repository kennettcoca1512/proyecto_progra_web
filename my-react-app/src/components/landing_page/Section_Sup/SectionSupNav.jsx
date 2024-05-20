import { useState } from "react"
import resultBusq from "../../ResultadosBusqueda/resultBusq"
import { productosTotal } from "../../../data/productosTotal"
export default function Section_Sup_Nav(){

    const [busqueda, setBusqueda] = useState('')
    const [resultados, setResultados] = useState(null)

    const handleBuscar = () =>{
        const resultados = productosTotal.filter(producto =>
            producto.nombre.toLocaleUpperCase().includes(busqueda.toLocaleUpperCase())
        )

        setResultados(resultados)
    }
    const navStyle = {
        height: '30px',
        padding: '20px',
        marginLeft:'50px',
        paddingRight: '1800px', 
        fontSize: '25px'
    }
    const navStyle2 = {
        padding: '20px',
        height: '75px',
        marginLeft: '10px',
        fontSize: '25px'
    }
    const barraStyle={
        marginLeft: '200px',
        marginTop: '200px'
    }
    const sectionStyle ={
        marginTop: '60px',
        marginBottom: '30px'
    }
    return (
        <>
            <section style={sectionStyle}>
                <span style={barraStyle}>
                    <input style={navStyle}  type="text" placeholder="Busca productos por nombre " value={busqueda} onChange={e => setBusqueda(e.target.value)}></input>
                    <input style={navStyle2} type="submit" value="Enviar" onClick={handleBuscar}></input>
                </span>


            </section>
            {resultados && <resultBusq resultados = {resultados}/>}
        </>
    )
}