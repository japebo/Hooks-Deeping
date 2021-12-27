import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const LoginScreen = () => {

    const logged_user = {
        id: '1234',
        name: 'Javier Pérez',
    }

    const { setUser } = useContext(UserContext)

    return (
        <div>
            <h1>LoginScreen</h1>
            <hr/>
            <button
                className='btn btn-primary'
                onClick={ () => setUser( {...logged_user} )}
            >
                Login
            </button>
        </div>
    )
}
