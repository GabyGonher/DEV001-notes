import React from 'react';
import { collection, addDoc, setDoc, doc, updateDoc } from 'firebase/firestore';
import { db } from '../Firebase/Configuracion';
import '../styles/FormNotes.css';

export function FormNotes({ uid, notaGuardada, setNotaGuardada }) {
  // console.log(notaGuardada);
  // Funcion que captura el valor de texTarea
  const capturaValue = (e) => {
    const { value } = e.target;
    setNotaGuardada((prevState) => ({
      ...prevState,
      textarea: value,
      uid,
    }));
  };

  // funcion para guardar y actualizar  la informacion del textarea
  const saveData = async (e) => {
    e.preventDefault();
    const newNote = {
      uid: uid,
      textarea: notaGuardada.textarea,
      timestamp: new Date().getTime(),
    };
    if (notaGuardada.id === '') {
      try {
        await addDoc(collection(db, 'usuarios'), newNote);
        setNotaGuardada({ id: '', uid: '', textarea: '' });
        console.log(newNote, 'nueva nota');
      } catch (error) {
        console.log(error);
      }
    } else {
      await setDoc(doc(db, 'usuarios', notaGuardada.id), newNote).catch(
        console.error
      );
      // await updateDoc(doc(db, 'users', newNote.uid), newNote);
      setNotaGuardada({ id: '', uid: '', textarea: '' });
    }
    setNotaGuardada({ id: '', uid: '', textarea: '' });
  };

  return (
    <React.Fragment>
      <form name="formNote" className="formTex" onSubmit={saveData}>
        <textarea
          className="spaceNote"
          name="textarea"
          placeholder="Agrega tu nota"
          onChange={capturaValue}
          value={notaGuardada.textarea}
        ></textarea>
        <div className="divBtn">
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
        </div>
      </form>
    </React.Fragment>
  );
}
