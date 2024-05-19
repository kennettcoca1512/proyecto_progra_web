import Orders from "../ListOrdenes/ListOrdenes";
import './UserLogged.css';
export default function UserLogged(){
    return (
        <>
            <section id="UserLoggedsection">
                <nav>
                    <h3>Mi cuenta</h3>
                    <ul>
                        <li><a href="#">Ordenar recientes</a></li>
                        <li><a href="#">Datos de registro</a></li>
                        <li><a href="#">Cambiar password</a></li>
                    </ul>
                </nav>
                <Orders/>
            </section>
        </>
    );
}