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
        marginRight: '30px'
    }
    const buttonStyle={
        padding: '5px',
        height: '35px',
        marginTop: '15px'
    }
    const pstyle={
        marginRight:'35px',
        marginTop: '23px'
    }
    const hrStyle={
        width: 'maxWidth',
        marginLeft: '30px',
        marginBottom: '20px'
    }
    return(
        <>
            <span style={spanstyle}>
                <h2>PCERDA</h2>
                <ul style={listStyle}>
                    <li style={liStyle}>Nuevos</li>
                    <li style={liStyle}>Mas Vendidos</li>
                    <li style={liStyle}>Ofertas</li>
                </ul>
                <img></img>
                <p style={pstyle}>Ayuda</p>
                <button style={buttonStyle}>Mi Cuenta</button>
            </span>
            <hr style={hrStyle}></hr>
        </>
    )
}