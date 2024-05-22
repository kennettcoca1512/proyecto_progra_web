import Header from "../Shares/Header/Header";
import Footer from "../Shares/Footer/Footer";
import userAccounts from "../../data/userAccounts";

import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Signin() {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');
    const [error,setError] = useState('');
    const navigate = useNavigate();

    
    function handleSubmit(e) {
        e.preventDefault();
        if (password !== confPassword) {
            setError('Las contraseñas no coinciden');
        } else {
            // correo electrónico ya está registrado?
            const existingUser = userAccounts.find(user => user.email === email);
            if (existingUser) {
                setError('El correo electrónico ya está registrado');
            } else {
                const newUser = { nombre, apellido, email, password };
                userAccounts.push(newUser);
                navigate('/login');
            }
        }
    }
    



    return (
        <>
        
        <Header/>
        <section className='sectionLogin'>
            <h3>Ingreso para clientes registrados</h3>
        <br />

            <form className="form-login" onSubmit={handleSubmit}>

                <input type="text" id="inputNombre" className="form-control" placeholder="Nombre" required value={nombre}
                            onChange={ (e) => {
                                setNombre(e.target.value);
                            }} />

                <br />
                <br />
                <input type="text" id="inputApellido" className="form-control" placeholder="Apellido" required value={apellido}
                            onChange={ (e) => {
                                setApellido(e.target.value);
                            }} />
                            <br /><br />
                
                <input type="email" id="inputEmail" className="form-control" placeholder="Email " required  value={email}
                            onChange={ (e) => {
                                setEmail(e.target.value);
                            }}  />
                
            
                <br />
                <br />
                <input type="password" id="inputPassword" className="form-control" placeholder="Password" required value={password}
                            onChange={ (e) => {
                                setPassword(e.target.value);
                            }} />
                    
       
                    <br />
                    <br />
                    <input type="password" id="inputConfPassword" className="form-control" placeholder="Confirmar Password" required value={confPassword}
                            onChange={ (e) => {
                                setConfPassword(e.target.value);
                            }} />
                    <br />
                    
                    { <p className='errorMessage'>{error}</p>}
                <br />
                <button className="submitButton" type="submit">Crear nueva cuenta</button>
                <br />
                <br />

                
            </form>
            </section>

            <Footer/>
        </>
    )
}