export default function Section_Sup_Nav(){
    const navStyle = {
        marginLeft: '5px',
        paddingTop: '10px',
        paddingBottom: '10px',
        paddingRight: '40px',
        width: '150px'
    }
    return (
        <>
            <section>
                <span>
                    <input style={navStyle}  type="text" placeholder="Busca productos por nombre"></input>
                    <input style={navStyle} type="submit" value="Enviar"></input>
                </span>


            </section>
        </>
    )
}