import React from 'react';
import { loginWhitGoogle } from './Firebase/func';
import { useNavigate } from 'react-router-dom';
import './styles/index.css';

const Login = () => {
  const navigate = useNavigate();
  function LoginGogle() {
    loginWhitGoogle()
      .then((credentials) => {
        console.log(credentials.user);
        navigate('/notes');
      })
      .catch((error) => {});
  }

  return (
    <React.Fragment>
      <div className="contenido1">
        <img className="logo" alt="logo" src="../src/assets/logo.png" />
        <h2 className="tituloI">Iniciar sesión</h2>
        <p className="txt">
          {' '}
          Anota todo lo que no quieres olvidar <br />
          tareas pendientes, lista de compras etcétera <br />
          Yo te ayudo!
        </p>
        <br />
        <button className="btnGoogle" onClick={LoginGogle}>
          Ingresa con Google
        </button>
      </div>
    </React.Fragment>
  );
};
export default Login;
