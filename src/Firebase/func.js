import { app } from "../Firebase/Configuracion";
import {
  getAuth, signInWithPopup, GoogleAuthProvider, signOut
} from "firebase/auth";


// ----------------- AUTENTICACIÓN CON GOOGLE ---------------------------
const auth = getAuth(app)
export const loginWhitGoogle = () => {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider)
}

// -----------------CERRAR SESIÓN-----------------------------------------

export const funcSignOut = async () => {
  await signOut(auth);
}