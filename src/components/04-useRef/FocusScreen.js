
import React, { useRef } from 'react'
import '../02-useEffect/effects.css'

export const FocusScreen = () => {
//este es un ejemplo de uso del hook useRef, pero es preferible hacerlo a través de document.queryselector(), pues no hay que importar nada, y funciona de la misma forma. 
    const inputRef = useRef(); //crea una referencia mutable a cualquier elemento HTML, en este caso al elemento input, que se le quiere hacer un focus
    
    const handleClick = () => {
        // document.querySelector('input').select();
        inputRef.current.select();
    }

    return (
        <div>
            <h1>Focus Screen</h1>
            <hr/>
            <input 
                ref={ inputRef }
                className="form-control"
                placeholder="Su nombre"
            />
            <button 
                className="btn btn-outline-primary mt-3"
                onClick={ handleClick }
            >
                Focus
            </button>
        </div>
    )
}
