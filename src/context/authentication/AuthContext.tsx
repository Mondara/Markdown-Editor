import React, { useContext, useState, useEffect } from "react"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail, UserCredential, User, updatePassword, updateEmail } from "firebase/auth";
import { auth } from '../../firebaseSetup';


interface Value {
    currentUser: User | null,
    login: (email: string, password: string) => Promise<UserCredential>,
    signup: (email: string, password: string) => Promise<UserCredential>,
    logout: () => Promise<void>,
    resetPassword: (email: string) => Promise<void>,
    updateUserEmail: (email: string) => Promise<void> | null,
    updateUserPassword: (password: string) => Promise<void> | null
}

const AuthContext = React.createContext<Value | null>(null);

export function useAuth() {
    return useContext(AuthContext)
}

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [currentUser, setCurrentUser] = useState<User | null>(null)
    const [loading, setLoading] = useState(true)

    function signup(email: string, password: string) {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    function login(email: string, password: string) {
        return signInWithEmailAndPassword(auth, email, password)
    }

    function logout() {
        return auth.signOut()
    }

    function resetPassword(email: string) {
        return sendPasswordResetEmail(auth, email)
    }

    function updateUserEmail(email: string) {
        return currentUser && updateEmail(currentUser, email);
    }

    function updateUserPassword(password: string) {
        return currentUser && updatePassword(currentUser, password)
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
        })

        return unsubscribe
    }, [])

    const value = {
        currentUser,
        login,
        signup,
        logout,
        resetPassword,
        updateUserEmail,
        updateUserPassword
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}