// import {createContext, useContext} from 'react'
// // permite saber si el usuario esta logeado o no
// // crear un estado por un archivo externo

// export const authContext = createContext()

// let [name, setName] = useState('');
// let [uid, setUid] = useState('');
//   export const auth = getAuth();
//   onAuthStateChanged(auth, (user) => {
//     console.log(user);
//     uid = user.uid;
//     // --- buscar el ejemplo de pasar
//     setUid = user.uid;
//      setUid (() => {
//       return {...user, }
//      })
//     // console.log(uid, 'uid1');
//     const displayName = user.displayName;
//     // console.log(displayName);
//     if (displayName !== null) {
//       setName(displayName);
//     } else {
//       console.log('Cuenta no valida');
//     }
//     // console.log(displayName, 'displayname');
//   });

// console.log(uid, 'uid2')

// export const useAuth = () => {
//   const context = useContext(authContext)
//   if (!context) throw new Error ('there is not auth provider')
//   return context
// }

// export function AuthProvider({children}) {
//   const user ={
//     login: true,
//   };

//   return (
//   <authContext.Provider value = {{user }}>
//     {children}
//     </authContext.Provider>;
//   )
// }
