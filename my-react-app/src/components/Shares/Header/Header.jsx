import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { useAuthUser } from '../../../context/UserContext/UserContext';

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
        marginTop: '24px',
        marginLeft: '40px',
        marginRight: '650px'
    }
    const liStyle={
        marginRight: '30px',
        fontSize: '30px'
    }
    const buttonStyle={
        padding: '10px',
        height: '70px',
        marginTop: '15px',
        fontSize: '30px'
    }
    const pstyle={
        marginRight:'35px',
        marginTop: '23px',
        fontSize: '30px'
    }
    const hrStyle={
        width: 'maxWidth',
        marginLeft: '30px',
        marginBottom: '20px'
    }
    const spanStyle={
        display: 'flex',
        marginLeft: '750px'
    }
    const navigate = useNavigate()
    const {user} = useAuthUser() // Replace 'UserContext' with the actual name of your user context

    const handleLoginClick = () => {
        navigate('/login')
    }

    const handleAccountClick = () => {
        navigate('/account')
    }

    return(
        <>
            <header style={spanstyle}>
                <h1>TOTAL HARDWARE</h1>
                <ul style={listStyle}>
                    <li style={liStyle}>Nuevos</li>
                    <li style={liStyle}>Mas Vendidos</li>
                    <li style={liStyle}>Ofertas</li>
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