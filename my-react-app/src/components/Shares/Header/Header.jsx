import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { useAuthUser } from '../../../context/UserContext/UserContext';
import { useEffect } from 'react';

export default function Header(){
    const spanstyle={
        display: 'flex',
        marginLeft: '50px',
        marginBottom: '5px'
    }
    const listStyle={
        display: 'flex',
        whiteSpace: 'nowrap',
        listStyleType: 'none',
        marginTop: '20px',
        marginLeft: '40px',
        marginRight: '550px'
    }
    const liStyle={
        marginRight: '30px',
        fontSize: '15px'
    }
    const buttonStyle={
        padding: '5px',
        height: '40px',
        marginTop: '15px',
        fontSize: '15px'
    }
    const pstyle={
        marginRight:'20px',
        marginTop: '23px',
        fontSize: '15px'
    }
    const hrStyle={
        marginLeft: '30px',
        width: '1300px',
        marginBottom: '40px'
    }
    const spanStyle={
        display: 'flex',
    }
    const navigate = useNavigate()
    const {user} = useAuthUser() // Replace 'UserContext' with the actual name of your user context

    const handleLoginClick = () => {
        navigate('/login')
    }

    const handleAccountClick = () => {
        navigate('/account')
    }
    const [tipoFiltro, setTipoFiltro] = useState('');

    useEffect(() => {
        localStorage.setItem('tipoFiltro', tipoFiltro);
        console.log(localStorage.getItem('tipoFiltro'))
    }, [tipoFiltro]);

    const handleSectionsClick1 = () =>{
        setTipoFiltro('nuevos')
        navigate('/resultadoBusqueda')
    }
    const handleSectionsClick2 = () =>{
        setTipoFiltro('mas-vendidos')
        navigate('/resultadoBusqueda')
    }
    const handleSectionsClick3 = () =>{
        setTipoFiltro('ofertas')
        navigate('/resultadoBusqueda')
    }
    const h1Style={
        fontSize: '20px'
    }
    return(
        <>
            <header style={spanstyle}>
                <h1 style={h1Style}>TOTAL HARDWARE</h1>
                <ul style={listStyle}>
                    <li style={liStyle}><a onClick={handleSectionsClick1}>Nuevos</a></li>
                    <li style={liStyle}><a onClick={handleSectionsClick2}>Mas Vendidos</a></li>
                    <li style={liStyle}><a onClick={handleSectionsClick3}>Ofertas</a></li>
                </ul>
                <img></img>
                <span style={spanStyle}>
                <p style={pstyle}>Ayuda</p>
                {user ? (
                            <>
                                <button style={buttonStyle} onClick={handleAccountClick}>Mi Cuenta</button>
                            </>
                        ) : (
                            <>
                                <button style={buttonStyle} onClick={handleLoginClick}>Iniciar Sesion</button>
                            </>
                        )}
                </span>   
            </header>
            <hr style={hrStyle}></hr>
        </>
    )
}