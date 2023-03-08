import React, { createContext, useContext } from 'react';
// import React, { createContext, useContext, useState } from 'react';
// import { db } from '../Firebase/Configuracion';
// import { getAuth, onAuthStateChanged } from 'firebase/auth';
// import { useNavigate } from 'react-router-dom';
// import { funcSignOut } from '../Firebase/func';

export const noteContext = createContext();

export function NoteProvider({ children }) {
  // NOMBRE DE USUARIO, DISPLAY -----------------------------------

  // let [name, setName] = useState('');
  // let uid;
  // const auth = getAuth();
  // onAuthStateChanged(auth, (user) => {
  //   console.log(user);
  //   uid = user.uid;
  //   const displayName = user.displayName;
  //   console.log(displayName);
  //   if (displayName !== null) {
  //     setName(displayName);
  //   } else {
  //     console.log('Cuenta no valida');
  //   }
  //   console.log(displayName, 'displayname');
  // });
  // // console.log(uid, 'uid2');

  // const navigate = useNavigate();
  // const logOut = () => {
  //   funcSignOut(auth)
  //     .then(() => {
  //       console.log('Sesión cerrada con exito');
  //       navigate('/');
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // };

  return (
    <noteContext.Provider value={{}}>
      {/* // <noteContext.Provider value={{ logOut, uid, name }}> */}
      {children}
    </noteContext.Provider>
  );
}

export const contextoNotas = () => useContext(noteContext);
//hook personalizado
