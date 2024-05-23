import './Login.css'

import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import userAccounts from '../../data/userAccounts';
import { useAuthUser } from '../../context/UserContext/UserContext.jsx';


export default function Login() {
   

    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error,setError] = useState(false);
    const navigate = useNavigate();
    const { login } = useAuthUser();


    function handleSubmit(e) {
        e.preventDefault();
        const user = userAccounts.find(user => user.email === email && user.password === password);
        if (user) {
          login(user); 
          navigate('/');
        } else {
          setError(true);
        }
      }



    return (
        <><section className='sectionLogin'>
            <h3>Ingreso para clientes registrados</h3>
        <br />

            <form className="form-login" onSubmit={handleSubmit}>
                
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
                    {error && <p className='errorMessage'>Usuario o contraseña incorrectos</p>}
                <br />
                <button className="submitButton" type="submit" >Ingresar</button>
                <br />
                <br />

                <a  href="/recuperacion">Olvidé mi contraseña</a>
                <br />
                <br />
                <a  href="/signin">No tengo cuenta, deseo registrarme</a>

                
            </form>
            </section>
        </>
    )
}