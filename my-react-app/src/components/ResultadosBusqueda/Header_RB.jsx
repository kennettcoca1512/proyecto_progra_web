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
    return (
        <>
            <span style={spanStyle}>
                <label style={labelStyle} for="opciones">Ordenar Por:</label>
                <select style={selectStyle} id="opciones">
                    <option value="Precio">Precio</option>
                    <option value="Nombre">Nombre</option>
                </select>
            </span>
            <br></br>
            <br></br>
            <br></br>
            <span style={divStyle}><b>RESULTADOS DE BUSQUEDA</b></span>
            <br></br>
            <br></br>
        </>
    )
}