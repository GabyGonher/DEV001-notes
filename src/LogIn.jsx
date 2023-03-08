import  React from 'react';
// import {  context} from "./context/context";
import { loginWhitGoogle } from "./Firebase/func";
import { useNavigate } from "react-router-dom";

// import { logo } from "../assets/logo.jpg";
// import './styles/login.css';


const Login =() => {
  const navigate = useNavigate();
  function LoginGogle() {
    loginWhitGoogle ()
    .then ((credentials) =>{
      // console.log(credentials.user)
      navigate('/notes')
    })
    .catch((error) =>{
      console.log(error)
    })
  }


return ( 
<React.Fragment>
<div className='contenido1'>
    <img className="logo" alt="logo" src="../src/assets/logo.png" />
  <h2 className='titulo' >Iniciar sesión</h2>
<p className='txt'> Anota todo lo que no quieres olvidar <br/>
tareas pendientes, lista de compras  etcétera <br/>
Yo te ayudo!
</p>

  <button className='btnGoogle' onClick={LoginGogle}>Ingresa con Google</button>
  </div>
</React.Fragment>

)
}
export default Login;