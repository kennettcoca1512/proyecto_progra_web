import { Navigate, useNavigate } from "react-router-dom"
import { useItemId } from "../../../context/itemIdContext"
export default function Card2(props){
    const imageStyle = {
        height: '500px',
        width: '570px',
        marginRight: '65px',
        marginLeft: '55px',
        marginTop: '50px',
        borderRadius: '20px'
    }
    const buttonStyle = {
        borderWidth: '0px',
        borderRadius: '20px',
        backgroundColor: 'white',
        marginRight: '70px'
    }
    const nombreStyle = {
        marginLeft: '110px',
        fontSize: '30px',
        paddingRight: '165px',
        paddingLeft: '50px'
    }
    const buttonStyle2 ={
        marginLeft: '300px',
        borderRadius: '5px',
        padding: '10px'
    }
    const navigate = useNavigate()
    const {setItemIdContext} = useItemId();

    function handleClick(itemId){
        setItemIdContext(itemId);
        navigate(`/detalleProducto/${itemId}`)
    }

    return<>
        <div>
            <button style={buttonStyle}>
                <img style={imageStyle} type="image" src={props.content}></img>
            </button>
            <h3 style={nombreStyle}>{props.nombre}</h3>
            <button onClick={handleClick} style={buttonStyle2}>Learn More</button>
        </div>
        
    </>
    
}