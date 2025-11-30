import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { auth } from '../../Firebase/firebase.init';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut, onAuthStateChanged, updateProfile } from 'firebase/auth';

const googleProvider = new GoogleAuthProvider()
googleProvider.addScope('email')

const AuthProvider = ({children}) => {
    const [ user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    // console.log(user);

    // Create User
    const createUser = ( email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword( auth, email, password)
    }

    // Sign in
    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Google login
    const googleSignIn = () =>{
        setLoading(true)
        return signInWithPopup( auth, googleProvider )
    }

    // Update profile
    const updateUserProfile = (updateProfile) => {
        return updateProfile(auth.currentUser, updateProfile)
    }

    // Sign out
    const signOutUser = () => {
        setLoading(true)
        return signOut(auth)
    }

    // Observer
    useEffect(() => {
            const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
                setUser(currentUser)
                setLoading(false)
            })
        return () => unsubscribe();
    }, []);


    const authInfo = {
        user,
        setUser,
        loading,
        setLoading,
        createUser,
        signInUser,
        googleSignIn,
        updateUserProfile,
        signOutUser,

    }
    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;