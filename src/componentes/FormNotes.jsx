  import React, { useState } from "react";
  import { collection, addDoc, 
          // getDocs, getFirestore, addDocs, getDoc, doc, delateDoc, setDoc,
  } from "firebase/firestore";
  import { db } from "../Firebase/Configuracion";


  export function FormNotes (){

const valorInicial = {
  textarea: '',

}
// Variables de estado 
const [user, setUser] = useState (valorInicial)
 const [subId, setSubId] = useState ('') 
// const  [lista, setLista] = useState([])  

// Funcion que captura el valor de texTarea
const capturaValue = (e) => {
  const {name, value} = e.target;
  setUser ({ ... user, [name]: value});

}
// funcion para guardar y actualizar  la informacion del textarea
const saveData = async (e) =>{
  e.preventDefault();
  if(subId === ''){
 try {
    await addDoc(collection(db,'usuarios'), {
      ...user
    })
  } catch (error) {
    console.log(error)
  }
}
else {
  await setDoc(doc(db, 'usuarios', subId),{
    ...user
  })
}
setUser({ ...valorInicial})
setSubId('')
  }


return (

  <form name="formNote" onSubmit={saveData} >
<textarea className='spaceNote' name='textarea' placeholder='Agrega tu nota' onChange={capturaValue} value ={user.nombre} ></textarea>
<button type= "submit" className= 'btn'> Guardar </button>
  </form>

)
  }