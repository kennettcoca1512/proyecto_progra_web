
import Header from '../components/HeaderUO/Header'
import Footer from '../components/FooterUO/Footer'
import Section from '../components/Usuarios_Orden/SectionUO/SectionUR'
import Aside from '../components/Usuarios_Orden/AsideUO/Aside'
export default function UsuariosRegistrados(){
    const UR = {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        background: '#f4f4f4',

    }
    const minUR = {
        flex: 1,
        display: 'flex',
    }
    const contentStyle = {
        flex: 1,
    };
    
    return(
    <>
    <div style={UR}>
       <Header />
            <div style={minUR}>
                <Aside />
                <div style={contentStyle}> 
                <Section />
                </div>
            </div>
            <Footer />           

       

    </div>
       
    </>
    )
}