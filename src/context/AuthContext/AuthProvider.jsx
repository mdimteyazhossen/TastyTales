import React, { useEffect, useState } from 'react'
import AuthContext from './Authcontext'
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import auth from '../../firebase/firebase.init';
import axios from 'axios';
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
    const [user , setUser] = useState(null);
    const[loading, setLoading] = useState(true);

    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const SignInUser = (email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email,password);
    }
    const signInWithgoogle =()=>{
        return signInWithPopup(auth, googleProvider);
    }
    const signOutUser =()=>{
        setLoading(true);
        return signOut(auth);
    }
    const updateUser = (updatedData)=>{
        return updateProfile(auth.currentUser , updatedData)
    }



    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            if(currentUser?.email){
                const user = {email:currentUser.email};

                axios.post('https://assignment-11-server-eta-six.vercel.app/jwt', user, {withCredentials:true})
                .then(res => {
                    console.log(res.data)
                    setLoading(false)
                })
            }else{
                axios.post('https://assignment-11-server-eta-six.vercel.app/logout', {}, {
                    withCredentials:true
                })
                .then(res=>{
                    console.log('logout', res.data)
                    setLoading(false)
                })
            }
            
        })

        return ()=>{
            unsubscribe();
        }
    },[])
    const authInfo = {
        user,
        loading,
        createUser,
        SignInUser,
        signOutUser,
        signInWithgoogle,
        updateUser,
        setUser
    }
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
