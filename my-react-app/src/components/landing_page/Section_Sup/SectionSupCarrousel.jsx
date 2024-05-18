import Card from "./SectionSupCard"
export default function Carrousel(props){
    const CarrouselStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 750px)',
        gridTemplateRows: 'repeat(3, 750px)'
    }
    return <div style={CarrouselStyle}>
        {
            props.data.map((obj)=>{
                return <Card key={obj.id} content={obj.imagen} nombre={obj.nombre}/>
            })
        }
    </div>
}