  import { useState } from "react";
  import { collection, addDoc, 
          // getFirestore, addDocs, getDoc, doc, delateDoc, setDoc,
  } from "firebase/firestore";
  import { db } from "../Firebase/Configuracion";

  export function FormNotes (){


const valorInicial = {
  textarea: '',

}

const [user, setUser] = useState (valorInicial)
// Funcion que captura el valor de texTarea
const capturaValue = (e) => {
  const {name, value} = e.target;
  setUser ({ ... user, [name]: value});

}
// funcion para guardar la informacion del textarea
const saveData = async (e) =>{
  e.preventDefault();
  // console.log(user);
  // Agregar documento a colección de firebase
  try {
    await addDoc(collection(db,'usuarios'), {
      ...user
    })
  } catch (error) {
    console.log(error)
  }
  setUser({ ...valorInicial})
}      



return (
  <>
  <form name="formNote" onSubmit={saveData} >
<textarea className='spaceNote' name='textarea' placeholder='Agrega tu nota' onChange={capturaValue} value ={user.nombre} ></textarea>
<button className= 'btn'> Guardar </button>
  </form>
</>

)
  }


  

  