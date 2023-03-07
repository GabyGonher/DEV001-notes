import React, {useState, useEffect}  from 'react';
import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged, } from "firebase/auth";
import { funcSignOut} from "./Firebase/func"
import { FormNotes } from "./componentes/FormNotes";
import { ListNotes } from "./componentes/ListNote";
// import { buscarCrearDocumento } from "../src/Firebase/func";
// import { BtnLogOut} from "./componentes/BtnLogOut";
// import { collection, addDoc } from "firebase/firestore"; 
// import { useState } from "react";
// import './styles/App.css';


// const Notes = () => <h1>Estamos en notes</h1>;
const Notes = () => {

    let [name, setName] = useState('');
    const auth = getAuth();
    onAuthStateChanged (auth,(user) => {
      // console.log(user);
      const displayName = user.displayName;
      console.log(displayName);
      if (displayName !== null) {
          setName(displayName) 
      } else {
        console.log('Hola mundo!')
      }
    //   console.log(displayName, 'displayname');
    //  const uid = user.uid
    //  console.log(uid, 'uid');
      
    })


    const navigate = useNavigate();
    const logOut = () => {
      funcSignOut (auth).then(() =>{
        console.log("Sesión cerrada con exito");
        navigate('/')

      }).catch((error) =>{
        console.error(error)
      })
}


return (
  <React.Fragment>
  <h2 className='titulo' >Bienvenida {name}!</h2>
  
  <button className='signOut' onClick={logOut}> Cerrar sesión</button>
  <FormNotes/>
  <ListNotes/>
  {/* <BtnLogOut/> */}
  {/* <form name="formNote" >
  
   <textarea className='spaceNote' placeholder='Agrega tu nota'></textarea>
    {/* <button type="button" className='save' onClick={saveNote} > Guardar </button> */}
    

</React.Fragment>

)
}
export default Notes ;