export default function Section_Sup_Nav(){
    const navStyle = {
        padding: '10px',
        marginLeft:'50px',
        paddingRight: '990px'
    }
    const navStyle2 = {
        padding: '10px',
        marginLeft: '10px'
    }
    return (
        <>
            <section>
                <span>
                    <input style={navStyle}  type="text" placeholder="Busca productos por nombre"></input>
                    <input style={navStyle2} type="submit" value="Enviar"></input>
                </span>


            </section>
        </>
    )
}