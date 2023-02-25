  import { useState } from "react";
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
// const  [lista, setLista] = useState([])  

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

// // Funcion para renderizar lista de usuarios
// useEffect (() =>{
//   const getLista = async () => {
//     try {
//       // Hace la peticion a la base de datos  (getdocs trae la coleccion de usuario)
//     const querySnapshot = await getDocs(collection(db, 'usuarios'))
//     const docs = []
//     querySnapshot.forEach((doc)=> {
//       docs.push({...doc.data(), id:doc.id})
      
//     });
//     setLista(docs)

      
//     }catch(error){
//       console.log(error);
//     }
//   }
//   getLista()
//   // dependencia de variable de estado
//   //agrega elemento a la lista cada que hay un cambio 
// },[lista])

return (
  <>
  <form name="formNote" onSubmit={saveData} >
<textarea className='spaceNote' name='textarea' placeholder='Agrega tu nota' onChange={capturaValue} value ={user.nombre} ></textarea>
<button className= 'btn'> Guardar </button>
  </form>
</>
)
  }