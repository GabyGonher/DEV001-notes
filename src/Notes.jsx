import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { funcSignOut } from './Firebase/func';
import { ListNotes } from './componentes/ListNote';

const Notes = () => {
  let [name, setName] = useState('');
  let [uid, setUid] = useState('');
  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUid(() => {
          return user.uid;
        });
        const displayName = user.displayName;
        if (displayName !== null) {
          setName(displayName);
        } else {
          console.log('Cuenta no valida');
        }
      }
    });
  }, []);

  //  console.log(setUid, 'VALUE-UID');

  const navigate = useNavigate();
  const logOut = () => {
    funcSignOut(auth)
      .then(() => {
        console.log('Sesión cerrada con exito');
        navigate('/');
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <React.Fragment>
      <div className="header">
        <div>
          <button className="signOut" onClick={logOut}>
            {' '}
            Cerrar sesión
          </button>
        </div>
        <h2 className="titulo">Bienvenida {name}!</h2>
      </div>
      {uid ? (
        <ListNotes uid={uid} />
      ) : (
        <img className="loading" src="src\imagen\Spin.gif" />
      )}
    </React.Fragment>
  );
};
export default Notes;
