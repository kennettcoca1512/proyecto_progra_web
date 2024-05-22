import { useState } from "react"
import { productosTotal } from "../../../data/productosTotal"
import { useNavigate } from "react-router-dom"
export default function Section_Sup_Nav(){

    const [busqueda, setBusqueda] = useState('')
    const navigate = useNavigate();
    useEffect(() => {
        localStorage.setItem('busqueda', busqueda);
        console.log(localStorage.getItem('busqueda'))
    }, [busqueda]);
    
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
    const Redirigir = () =>{
        navigate('/resultadoBusqueda')
    }
    return (
        <>
            <section style={sectionStyle}>
                <span style={barraStyle}>
                    <input style={navStyle}  type="text" placeholder="Busca productos por nombre " value={busqueda}  onChange={(event) => setBusqueda(event.target.value)
                        }></input>
                    <input style={navStyle2} type="submit" value="Enviar" onClick={Redirigir}></input>
                </span>


            </section>
        </>
    )
}