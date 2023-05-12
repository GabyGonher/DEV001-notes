
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyACDmajrcfbI5eIMaP6igw52YR7BuJsUeo",
  authDomain: "blacknotes-65019.firebaseapp.com",
  projectId: "blacknotes-65019",
  storageBucket: "blacknotes-65019.appspot.com",
  messagingSenderId: "264719022783",
  appId: "1:264719022783:web:23d91344fdfb0ff626a40a"
};

// const firebaseConfig = {
//   apiKey: "AIzaSyApkwMaIGKhvReatItDmoRFzohu0b84gyY",
//   authDomain: "black-notes-a1cce.firebaseapp.com",
//   projectId: "black-notes-a1cce",
//   storageBucket: "black-notes-a1cce.appspot.com",
//   messagingSenderId: "127220391965",
//   appId: "1:127220391965:web:d6f2c529a045590784a6f4"
// };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export { onAuthStateChanged };
