import Card from "./SectionSupCard"
export default function Carrousel(props){
    const styleToApply = props.useGrid ? {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 710px)',
        gridTemplateRows: 'repeat(3, 710px)'
      } : {
        display: 'flex',
        justifyContent: 'space-evenly',
        marginRight: '150px'
      };
    return <div style={styleToApply}>
        {
            props.data.map((obj)=>{
                return <Card key={obj.id} content={obj.imagen} nombre={obj.nombre}/>
            })
        }
    </div>
}