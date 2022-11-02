import React, { createContext, useEffect, useState } from 'react';
import app from '../../Firebase/Firebase.config';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

export const AuthContext = createContext();
       const auth = getAuth(app)
       const gooleprovider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Login With Email and Password 

    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password);
    }

    // Login With Google Button 

    const GoogleLogIn = () =>{
        return signInWithPopup(auth,gooleprovider)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
        })
        return ()=>{
            return unsubscribe;
        }
    },[])



    const AuthInfo ={user,loading,createUser,GoogleLogIn};
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;