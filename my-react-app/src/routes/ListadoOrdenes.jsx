import Header from "../components/HeaderUO/HeaderLO"
import Footer from "../components/FooterUO/Footer"
import Aside from "../components/Usuarios_Orden/AsideUO/Aside"
import Section from "../components/Usuarios_Orden/SectionUO/SectionLO"
export default function ListadoOrdenes(){
    const LO = {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        background: '#f4f4f4',

    }
    const minLO = {
        flex: 1,
        display: 'flex',
    }
    const contentStyleLO = {
        flex: 1,
    };
    
    return(
    <>
    <div style={LO}>
       <Header />
            <div style={minLO}>
                <Aside />
                <div style={contentStyleLO}> 
                <Section />
                </div>
            </div>
            <Footer />           

    </div>
       
    </>
    )
}