import Carrousel from "./SectionSupCarrousel"
import { productos } from "../../../data/productos"
import { coleccion } from "../../../data/coleccion"
export default function Section_Sup(){
    return (
        <>
            <Carrousel data={coleccion} useGrid={false}/>
            <Carrousel data={productos} useGrid={true}/>
            <br></br>
            <hr></hr>
            <br></br>
        </>
    )
}