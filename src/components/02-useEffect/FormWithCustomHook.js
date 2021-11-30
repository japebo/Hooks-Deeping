
import React, {useEffect} from 'react'
import { useForm } from '../../hooks/useForm'

export const FormWithCustomHook = () => {
   
    const [formValues, handleInputChange] = useForm({
            name: 'name',
            email: 'email',
            password: ''
        });

    const {name, email, password} = formValues;

    // useEffect(() => {
    //    console.log('name cambió');
    // }, [name])
    
    useEffect(() => {
       console.log('email cambió');
    }, [email])

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValues);
    };

    return (
        <form onSubmit={ handleSubmit }>
            <h1>Form with Custom Hook</h1>
            <hr/>
            <div className="form-group">
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
            </div>

            <div className="form-group">
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
            </div>

            <div className="form-group">
                <input 
                    type="password"
                    className="form-control"
                    name="password"
                    value={ password }
                    placeholder="*****"
                    onChange={ handleInputChange }
                >
                </input>
            </div>

            <button type="submit">Guardar</button>
        </form>
    )
}
