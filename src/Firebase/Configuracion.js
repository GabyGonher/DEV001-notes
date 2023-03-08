
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyApkwMaIGKhvReatItDmoRFzohu0b84gyY",
  authDomain: "black-notes-a1cce.firebaseapp.com",
  projectId: "black-notes-a1cce",
  storageBucket: "black-notes-a1cce.appspot.com",
  messagingSenderId: "127220391965",
  appId: "1:127220391965:web:d6f2c529a045590784a6f4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export { onAuthStateChanged };
