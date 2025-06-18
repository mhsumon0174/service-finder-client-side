import { useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";
import { AuthContext } from "./AUthContext";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";


const AuthProvider = ({children}) => {
    const provider=new GoogleAuthProvider
    const [user,setUser]=useState()
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            
        })
        return ()=>{
            unsubscribe();
        }
    },[])
    const signIn=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password )
    }
    const googleSignUp=(email,password)=>{
        return signInWithPopup(auth,provider)
    }
    const logOut=()=>{
    return signOut(auth)
}
const updateUser=(updatedData)=>{
    return updateProfile(auth.currentUser,updatedData)
}
    const userinfo={
user,setUser,createUser,googleSignUp,logOut,signIn,updateUser
    }
    return (
       <AuthContext value={userinfo}>
        {children}
       </AuthContext>
    );
};

export default AuthProvider;