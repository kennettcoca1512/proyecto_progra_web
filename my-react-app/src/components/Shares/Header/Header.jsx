import { useNavigate } from 'react-router-dom';
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
    return(
        <>
            <header style={spanstyle}>
                <h1>TOTAL HARDWARE</h1>
                <ul style={listStyle}>
                    <li style={liStyle}><a>Nuevos</a></li>
                    <li style={liStyle}><a>Mas Vendidos</a></li>
                    <li style={liStyle}><a>Ofertas</a></li>
                </ul>
                <img></img>
                <span style={spanStyle}>
                <p style={pstyle}>Ayuda</p>
                <button style={buttonStyle}>Mi Cuenta</button>
                </span>   
            </header>
            <hr style={hrStyle}></hr>
        </>
    )
}