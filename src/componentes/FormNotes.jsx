import React from 'react';
import { collection, addDoc, setDoc, doc } from 'firebase/firestore';
import { db } from '../Firebase/Configuracion';

export function FormNotes({ notaGuardada, setNotaGuardada, uid }) {
  // Funcion que captura el valor de texTarea
  const capturaValue = (e) => {
    const { value } = e.target;
    setNotaGuardada((prevState) => ({ ...prevState, textarea: value, uid }));
  };

  // funcion para guardar y actualizar  la informacion del textarea
  const saveData = async (e) => {
    e.preventDefault();
    if (notaGuardada.id === '') {
      try {
        await addDoc(collection(db, 'usuarios'), {
          ...notaGuardada,
        });
      } catch (error) {
        console.log(error);
      }
    } else {
      await setDoc(doc(db, 'usuarios', notaGuardada.id), {
        ...notaGuardada,
      });
    }
  };

  return (
    <form name="formNote" onSubmit={saveData}>
      <textarea
        className="spaceNote"
        name="textarea"
        placeholder="Agrega tu nota"
        onChange={capturaValue}
        value={notaGuardada.textarea}
      ></textarea>
      <button
        type="button"
        className="btn"
        onClick={() => setNotaGuardada({ id: '', uid: '', textarea: '' })}
      >
        {' '}
        {'Cancelar'}
      </button>
      <button
        type="submit"
        className="btn"
        onClick={() => setNotaGuardada({ ...notaGuardada })}
      >
        {' '}
        {notaGuardada.id ? 'Actualizar' : 'Guardar'}
      </button>
    </form>
  );
}
