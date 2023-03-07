import React, { useEffect, useState } from "react";
 import { db } from "../Firebase/Configuracion";
  import { collection, getDocs, doc, deleteDoc, getDoc
          // getFirestore, addDocs, getDoc, doc,  setDoc, 
  } from "firebase/firestore";

  export function ListNotes (){
  // variables de estado
  const  [lista, setLista] = useState([])
  // const [user, setUser] = useState (valorInicial)
  const [render, setRender] = useState(false) 
  // const [subId, setSubId] = useState ('') 
  // const [save, setSave] = useState(false)
  // 


  // Funcion para renderizar lista de usuarios
useEffect (() =>{
  console.log('ensayando');
  const getLista = async () => {
    

    try {
      // Hace la peticion a la base de datos  (getdocs trae la coleccion de usuario)
    const querySnapshot = await getDocs(collection(db, 'usuarios'));
    const docs = []
    querySnapshot.forEach((doc)=> {
      docs.push({...doc.data(), id:doc.id})
      console.log(docs)
      
    });
    setLista(docs)

      
    }catch(error){
      console.log(error);
    }
  }
  getLista()
  // dependencia de variable de estado
  // agrega elemento a la lista cada que hay un cambio 
  setRender(false)
   
},[render])

// },[])

// Funcion para eliminar Notas
const delateNote = async (id) => {
  setRender(true)
  await deleteDoc (doc(db, "usuarios", id))
}
// Funcion para Editar notas (peticion de un solo formulario)
  // const getOne = async(id)=>{
  //   try {
  //     const docRef = (db, "usuarios", id)
  //     const docSnap = await getDoc(docRef)
  //     setUser(docSnap.data())
  //   } catch (error){
  //     console.log(error);
  //   }

  // }
  // useEffect(() =>{
  // if(subId !== ''){
  //   getOne(setSubId)
  // }
  // }, [subId])


return (

  <div> {
    lista.map(list => (
      <div key = {list.id}>
        <p>{`${list.textarea}`}</p>
        {/* console.log({list.doc},'Prueba'); */}
        {/* <p>{list.usurios}</p>  */}
        <button className="btn-delate" onClick={() => delateNote(list.id)}>Eliminar</button>
        <button className="edit" onClick={() => setSubId (list.textarea)}>Editar</button>
        <hr/>
      </div>
    ))
    }
  </div>
)
  }