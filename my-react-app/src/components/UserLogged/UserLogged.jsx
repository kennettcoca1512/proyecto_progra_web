import ListOrders from "../ListOrdenes/ListOrdenes";
import './UserLogged.css';
import { useState } from "react";
export default function UserLogged(){

    const [userMenuOption, setUserMenuOption] = useState('Orders');

    const menuOptionComponents = {
        'Orders': ListOrders,
        /*'RegistrationData': RegistrationData,
        'ChangePassword': ChangePassword*/
      };

      const handleMenuClick = (option) => {
        setUserMenuOption(option);
    };

      const SelectedComponent = menuOptionComponents[userMenuOption];


    return (
        <>
            <section id="UserLoggedsection">
                <nav id="UserNavMenu">
                    <h3>Mi cuenta</h3>
                    <ul>
                        <li><a href="" onClick={() => handleMenuClick('Orders')}>Ordenar recientes</a></li>
                        <li><a href="" /*onClick={() => handleMenuClick('RegistrationData')}*/>Datos de registro</a></li>
                        <li><a href=""/* onClick={() => handleMenuClick('ChangePassword')}*/>Cambiar password</a></li>
                    </ul>
                </nav>
                <SelectedComponent/>
            </section>
        </>
    );
}