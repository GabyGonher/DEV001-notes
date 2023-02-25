import { app, db } from "../Firebase/Configuracion";
import {
  getAuth, signInWithPopup, GoogleAuthProvider, signOut,
  // doc, getDoc, setDoc, getFirestore,
} from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";


// ----------------- AUTENTICACIÓN CON GOOGLE ---------------------------
const auth = getAuth(app)
export const loginWhitGoogle = () => {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider)
}

// ------------------------CERRAR SESIÓN-----------------------------------------

export const funcSignOut = async () => {
  await signOut(auth);
}






