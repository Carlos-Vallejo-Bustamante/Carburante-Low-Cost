import { React, createContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import profileAxios from '../services/profileAxios'

export const AuthContext = createContext()

const LOCALSTORAGE_TOKEN = 'tokenAuth'

const AuthProvider = (props) => {
    const [isloggedin, setIsloggedin] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [user, setUser] = useState(null)

    const navigate = useNavigate()

    const storeToken = (token) => {
        localStorage.setItem(LOCALSTORAGE_TOKEN, token)
    }

    const destroyToken = () => {
        localStorage.removeItem(LOCALSTORAGE_TOKEN)
    }

    const authentication = () => {
        const token = localStorage.getItem(LOCALSTORAGE_TOKEN)

        if (token) {
            profileAxios
                .me(token)
                .then((user) => {
                    console.log(user);
                    setUser(user)
                    setIsLoading(false)
                    setIsloggedin(true)
                })
                .catch((error) => {
                    console.log(error)
                    setUser(null)
                    setIsLoading(false)
                    setIsloggedin(false)
                })
        } else {
            setUser(null)
            setIsLoading(false)
            setIsloggedin(false)
        }
    }

    const logOut = () => {
        destroyToken()
        authentication()
        navigate('/')
    }

    useEffect(() => {
        authentication()
    }, [])


    return (
        <AuthContext.Provider
            value={{ isloggedin, isLoading, user, storeToken, authentication, logOut }}
        >
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthProvider