export default function Footer(){
    const listStyle = {
        display: 'flex',
        flexDirection:'column',
        whiteSpace: 'nowrap',
        listStyleType: 'none',
        margin: '3rem',
        paddingBottom: '40px'
    }
    const genlistStyle={
        display: 'flex',
        backgroundColor: 'grey',
        PaddingLeft:'50%'
    }
    const liStyle={
        marginBottom:'30px',
        fontSize:'30px',
        marginLeft: '150px'
    }
    const liStyle2={
        marginBottom: '25px',
        fontSize: '23px',
        marginLeft: '150px'
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
                        <li style={liStyle2}>Login</li>
                        <li style={liStyle2}>Registro</li>
                        <li style={liStyle2}>Carrito</li>
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