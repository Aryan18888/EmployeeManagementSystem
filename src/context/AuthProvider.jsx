import React, { useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage'
import { AuthContext } from './AuthContext'

const AuthProvider = ({ children }) => {
    // localStorage.clear()

    const [userData, setUserData] = useState(null)

    useEffect(() => {
        setLocalStorage()
        const { employees } = getLocalStorage()
        setUserData( employees )

    }, [])

    useEffect(() => {
        if (userData) {
            localStorage.setItem('employees', JSON.stringify(userData))
        }
    }, [userData])

    return (
        <div>
            <AuthContext.Provider value={[userData,setUserData]}>
                {children}
            </AuthContext.Provider>
        </div>
    )
}

export default AuthProvider
