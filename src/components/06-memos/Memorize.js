
import React, { useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import '../02-useEffect/effects.css'
import { Small } from './Small';

export const Memorize = () => {
    
    const { counter, increment } = useCounter(1);
    const [show, setShow] = useState(true)

    return (
        <div>
            <h1>Memorize</h1>
            <hr/>
            <div>Counter: <Small counter={counter} /> </div>
            <button
                className="btn btn-primary mt-4"
                onClick={ increment }
            >
                +1
            </button>
            <button
                className="btn btn-primary mt-4 ml-6"
                onClick={ () => { setShow( !show ) } }
            >
                Show/Hide { JSON.stringify( show ) }
            </button>
        </div>
    )
}
