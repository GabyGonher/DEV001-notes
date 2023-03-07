
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyAJpzCxT1sLcYPO0PNTQBaUOr1HWIXdh_8",
//   authDomain: "labnotes-e1c0f.firebaseapp.com",
//   projectId: "labnotes-e1c0f",
//   storageBucket: "labnotes-e1c0f.appspot.com",
//   messagingSenderId: "438769005645",
//   appId: "1:438769005645:web:dce7c17fecd08107899804"
// };
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
