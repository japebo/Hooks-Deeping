
import React, { useEffect, useState } from 'react'
import { Message } from './Message';

export const SimpleForm = () => {
    
    const [formState, setFormState] = useState( {
        name: 'name',
        email: 'email'
    } )
    
    const {name, email} = formState;
    
    const handleInputChange = ( { target } ) => {
        // console.log(target);
        setFormState( { ...formState, [target.name]: target.value } )
    }
    
        useEffect(() => {
           console.log('name cambió');
        }, [name])
        
        useEffect(() => {
           console.log('email cambió');
        }, [email])

    return (
        <>
            <h1>useEffect</h1>
            <hr/>
            <form className="form-group">
                <input 
                    type="text"
                    className="form-control"
                    name="name"
                    value={ name }
                    placeholder="Tu nombre"
                    autoComplete="off"
                    onChange={ handleInputChange }
                >
                </input>
            </form>

            <form className="form-group">
                <input 
                    type="text"
                    className="form-control"
                    name="email"
                    value={ email }
                    placeholder="email@gmail.com"
                    autoComplete="off"
                    onChange={ handleInputChange }
                >
                </input>
            </form>

            { name === '123' && <Message /> }
        </>
    )
}
