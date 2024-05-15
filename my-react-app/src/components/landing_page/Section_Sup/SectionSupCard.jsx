export default function Card(props){
    const imageStyle = {
        height: '400px',
        width: '350px',
        marginRight: '40px',
        marginLeft: '45px',
        marginTop: '50px',
        borderRadius: '20px'
    }
    const buttonStyle = {
        borderWidth: '0px',
        borderRadius: '20px',
        backgroundColor: 'white'
    }
    const nombreStyle = {
        marginLeft: '55px'
    }
    const aStyle ={
        marginLeft: '180px'
    }
    return<>
        <span>
            <button style={buttonStyle}>
                <img style={imageStyle} type="image" src={props.content}></img>
            </button>
            <h3 style={nombreStyle}>{props.nombre}</h3>
            <a style={aStyle} href="">Learn More</a>
        </span>
        
    </>
    
}