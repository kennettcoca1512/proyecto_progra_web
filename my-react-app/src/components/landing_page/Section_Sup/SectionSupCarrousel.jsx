import Card from "./SectionSupCard"
export default function Carrousel(props){
    const styleToApply = props.useGrid ? {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 700px)',
        gridTemplateRows: 'repeat(3, 700px)'
      } : {
        display: 'flex',
        justifyContent: 'space-evenly',
        marginRight: '70px'
      };
    return <div style={styleToApply}>
        {
            props.data.map((obj)=>{
                return <Card key={obj.id} content={obj.imagen} nombre={obj.nombre}/>
            })
        }
    </div>
}