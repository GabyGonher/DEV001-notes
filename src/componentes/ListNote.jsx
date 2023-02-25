import { useEffect, useState } from "react";
 import { db } from "../Firebase/Configuracion";
  import { collection, getDocs 
          // getFirestore, addDocs, getDoc, doc, delateDoc, setDoc,
  } from "firebase/firestore";

  // variables de estado
  const  [lista, setLista] = useState([])  


  // Funcion para renderizar lista de usuarios
useEffect (() =>{
  const getLista = async () => {
    try {
      // Hace la peticion a la base de datos  (getdocs trae la coleccion de usuario)
    const querySnapshot = await getDocs(collection(db, 'usuarios'))
    const docs = []
    querySnapshot.forEach((doc)=> {
      docs.push({...doc.data(), id:doc.id})
      
    });
    setLista(docs)

      
    }catch(error){
      console.log(error);
    }
  }
  getLista()
  // dependencia de variable de estado
  //agrega elemento a la lista cada que hay un cambio 
},[lista])