import Card2 from "./SectionSupCard"
export default function Carrousel2(props){
    const styleToApply = props.useGrid ? {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 700px)',
        gridTemplateRows: 'repeat(2, 700px)',
        marginLeft: '250px'
      } : {
        display: 'flex',
        justifyContent: 'space-evenly',
        marginRight: '100px'
      }
    return <div style={styleToApply}>
        {
            props.data.map((obj)=>{
                return <Card2 key={obj.id} content={obj.imagen} nombre={obj.nombre}/>
            })
        }
    </div>
}