export default function Footer(){
    const listStyle = {
        display: 'flex',
        flexDirection:'column',
        whiteSpace: 'nowrap',
        listStyleType: 'none',
        margin: '2rem',
        paddingBottom: '40px',
        marginLeft: '120px'
    }
    const genlistStyle={
        display: 'flex',
        backgroundColor: 'grey',
        maxWidth: '1400px'
    }
    const liStyle={
        marginBottom:'20px',
        fontSize:'15px'
    }
    const liStyle2={
        marginBottom: '15px',
        fontSize: '13px'
    }
    return(
        <>
            <footer style={genlistStyle}>
                    <ul style={listStyle}>
                        <li style={liStyle}><b>TOTAL HARDWARE</b></li>
                        <li style={liStyle2}>2024</li>
                        <li style={liStyle2}>Privacy Terms</li>
                    </ul>
                    <ul style={listStyle}>
                        <li style={liStyle}><b>Cuenta</b></li>
                        <li style={liStyle2}><a>Login</a></li>
                        <li style={liStyle2}><a>Registro</a></li>
                        <li style={liStyle2}><a>Carrito</a></li>
                    </ul>
                    <ul style={listStyle}>
                        <li style={liStyle}><b>Productos</b></li>
                        <li style={liStyle2}>Mas Vendidos</li>
                        <li style={liStyle2}>Ofertas</li>
                        <li style={liStyle2}>Nuevos</li>
                    </ul>
                    <ul style={listStyle}>
                        <li style={liStyle}><b>Ayuda</b></li>
                        <li style={liStyle2}>Acerca de Nosotros</li>
                        <li style={liStyle2}>Politica de Envio</li>
                        <li style={liStyle2}>FAQ</li>
                    </ul>
            </footer>
            
        </>
    )
}