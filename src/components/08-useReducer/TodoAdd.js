import React from 'react'
import { useForm } from '../../hooks/useForm';


export const TodoAdd = ({handleAdd}) => {
    const [ formValue, handleInputChange, reset ] = useForm({
        description: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if ( formValue.description.trim().length <=1 ) {
            reset();
            return;
        }
        
        handleAdd( {
            id: new Date().getTime(),
            task: formValue.description,
            done: false    
        })

        reset();
    }

    return (
        <>
            <h4> Add Task </h4>

            <form onSubmit={ handleSubmit }>
                <input
                    type="text"
                    name="description"
                    className='form-control'
                    placeholder="Aprender..."
                    value={ formValue.description }
                    autoComplete="off"
                    onChange={ handleInputChange }
                />
                <button
                    type='submit'
                    className='btn btn-outline-primary mt-1 col-12'
                >
                    Add
                </button>
            </form>
        </>
    )
}
