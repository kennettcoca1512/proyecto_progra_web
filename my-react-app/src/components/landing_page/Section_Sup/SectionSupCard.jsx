import { Navigate, useNavigate } from "react-router-dom"
import { useItemId } from "../../../context/itemIdContext"
export default function Card(props){
    const imageStyle = {
        height: '400px',
        width: '350px',
        marginRight: '40px',
        marginLeft: '65px',
        marginTop: '50px',
        borderRadius: '20px'
    }
    const buttonStyle = {
        borderWidth: '0px',
        borderRadius: '20px',
        backgroundColor: 'white'
    }
    const nombreStyle = {
        marginLeft: '55px',
        fontSize: '23px',
        paddingRight: '155px'
    }
    const buttonStyle2 ={
        marginLeft: '180px',
        borderRadius: '5px',
        padding: '10px'
    }

    const navigate = useNavigate()
    const {setItemIdContext} = useItemId()
    
    function handleClick(itemId){
        setItemIdContext(itemId)
        navigate(`/detalleProducto/${itemId}`)
    }
    return<>
        <div>
            <button style={buttonStyle}>
                <img style={imageStyle} type="image" src={props.content}></img>
            </button>
            <h3 style={nombreStyle}>{props.nombre}</h3>
            <button  onClick={() => handleClick(props.id)}  style={buttonStyle2}>Learn More</button>
        </div>
        
    </>
    
}