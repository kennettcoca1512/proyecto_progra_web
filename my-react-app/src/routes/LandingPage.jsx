import Header from "../components/Shares/Header/Header"
import Footer from "../components/Shares/Footer/Footer"
export default function LandingPage(){
    const computadoras = [
        {
            IdBuild: 2,
            Marca: "Acer",
            Procesador: "Ryzen",
            TarjetaGrafica: "4090 RTX",
            RAM: "16GB",
            SSD: "ienkf",
            Precio: 1234,
            imagen: ""
        }
    ]
    const laptops = [
        {
            Id: 2,
            Marca: "Asus",
            Modelo: "Rog Strix",
            Procesador: "Ryzen 9",
            SSD: "1TB",
            TarjetaGrafica: "NVIDIA",
            RAM: "16GB",
            SistOp: "WIN10",
            imagen: ""
        }
    ]

    return (
        <>
            <Header />
            <Footer /> 
        </>
    )
    
}