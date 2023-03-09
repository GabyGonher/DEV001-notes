import React, { useEffect, useState } from 'react';
import { db } from '../Firebase/Configuracion';
import {
  collection,
  // getDocs,
  doc,
  deleteDoc,
  query,
  where,
  onSnapshot,
} from 'firebase/firestore';
import { FormNotes } from '../componentes/FormNotes';

export function ListNotes({ uid }) {
  // variables de estado
  // en ese estado vamos a manejar el estado de una nota que esta siendo creada o editada
  const [notaGuardada, setNotaGuardada] = useState({
    id: '',
    uid: '',
    textarea: '',
  });
  const [lista, setLista] = useState([]);

  // Funcion que trae las notas
  const getLista = (id) => {
    console.log(id, 'id');
    // Hace la peticion a la base de datos  (getdocs trae la coleccion de usuario)
    const notesRef = collection(db, 'usuarios');
    const q = query(notesRef, where('uid', '==', id));
    return onSnapshot(q, (querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        console.log(doc);
        docs.push({ ...doc.data(), id: doc.id });
      });
      console.log(docs, 'docs');
      setLista(docs);
    });
  };
  // Funcion para renderizar lista de usuarios
  useEffect(() => {
    console.log('Renderiza');
    const dejarDeObservarCambiosEnLaColecciondeNotas = getLista(uid);

    return () => {
      // esto se va a ejecutar al desmontar el componente
      dejarDeObservarCambiosEnLaColecciondeNotas();
    };

    // dependencias del useEffect
    // el array vacio indica que esta funcion se debe ejecutar una vez despues que el componente es montado
  }, []);
  // Funcion para eliminar Notas
  const delateNote = async (id) => {
    await deleteDoc(doc(db, 'usuarios', id));
  };

  return (
    <div>
      <FormNotes
        uid={uid}
        notaGuardada={notaGuardada}
        setNotaGuardada={setNotaGuardada}
      />
      {lista.map((note) => (
        <div key={note.id}>
          <p>{`${note.textarea}`}</p>
          <button className="btn-delate" onClick={() => delateNote(note.id)}>
            Eliminar
          </button>
          <button className="edit" onClick={() => setNotaGuardada(note)}>
            Editar
          </button>

          <hr />
        </div>
      ))}
    </div>
  );
}
