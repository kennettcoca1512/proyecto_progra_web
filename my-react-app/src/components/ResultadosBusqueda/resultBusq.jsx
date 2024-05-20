export default function resultBusq({resultados}){
    return (
        
        <div>
            <h1>RESULTADOS DE BUSQUEDA</h1>
            <div>
                {resultados.map((resultado, index) => (
                    <span key={index}>
                        <img src={resultado.imagen}></img>
                        <div>
                            <h2>{resultado.nombre}</h2>
                            <p>{resultado.precio}</p>
                        </div>
                    </span>
                ))}
            </div>
        </div>
    )
}