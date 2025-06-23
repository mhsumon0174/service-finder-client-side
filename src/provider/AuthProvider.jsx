import { useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";
import { AuthContext } from "./AUthContext";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import axios from "axios";


const AuthProvider = ({children}) => {
    const [loading,setLoading]=useState(true)
    const provider=new GoogleAuthProvider
    const [user,setUser]=useState()
    
    const signIn=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const createUser=(email,password)=>{
         setLoading(true)
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
useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            setLoading(false)
            if(currentUser?.email){
                const userData={email:currentUser.email}
                axios.post('http://localhost:3000/jwt',userData,{
                    withCredentials:true
                })
                .then(res=>{
                    console.log(res.data);
                    
                })
                .catch(error=>{console.log(error);
                })
            }
        })
        return ()=>{
            unsubscribe();
        }
    },[])
    const userinfo={
user,setUser,createUser,googleSignUp,logOut,signIn,updateUser,loading,setLoading
    }
    return (
       <AuthContext value={userinfo}>
        {children}
       </AuthContext>
    );
};

export default AuthProvider;