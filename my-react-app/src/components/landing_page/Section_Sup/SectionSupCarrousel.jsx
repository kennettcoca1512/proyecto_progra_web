import Card from "./SectionSupCard"
export default function Carrousel(props){
    const CarrouselStyle = {
        display: 'flex'
    }
    return <div style={CarrouselStyle}>
        {
            props.data.map((obj)=>{
                return <Card key={obj.id} content={obj.imagen} nombre={obj.nombre}/>
            })
        }
    </div>
}