import Header from "../components/Shares/Header/Header"
import Footer from "../components/Shares/Footer/Footer"
import Section_Sup_Nav from "../components/landing_page/Section_Sup/SectionSupNav"
import Section_Sup from "../components/landing_page/Section_Sup/SectionSuperior"
export default function LandingPage(){
    return (
        <>
            <Header />
            <Section_Sup_Nav />
            <Section_Sup />
            <Footer />
        </>
    )
    
}