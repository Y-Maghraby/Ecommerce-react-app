/* eslint-disable react/prop-types */

import { createContext, useEffect, useState } from "react"
import {app} from "../firebase/firebase.config.js"
import {GoogleAuthProvider,createUserWithEmailAndPassword,getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth"

 export const AuthContext = createContext();
const auth = getAuth();
const googleProvider = new GoogleAuthProvider();



const AuthProvider = ({children}) => {
  const [user,setUser] = useState(null);
  const [loading,setLoading] = useState(true);

  // create user 
const createUser = (email,password) =>{
  setLoading(true);
  return createUserWithEmailAndPassword(auth,email,password);
};

// creat user using gmail 
const signWithGmail = ()=>{
  setLoading(true);
  return signInWithPopup(auth,googleProvider)
}

// login 
const login = (email,password)=>{
  setLoading(true);
  return signInWithEmailAndPassword(auth,email,password);
}

// logout 
const logOut = ()=>{
  return signOut(auth);
}

// user is avilible or not 
useEffect(()=>{
const unsubscribe = onAuthStateChanged(auth,currentuser=>{
  setUser(currentuser);
  setLoading(false)
});
return ()=>{
  return unsubscribe()
}

},[])


    const authInfo = {
      user,
      loading,
      createUser,
      signWithGmail,
      login,
      logOut
    }
  return (
    <AuthContext.Provider value={authInfo}>
    {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider