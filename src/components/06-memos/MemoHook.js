
import React, { useMemo, useState } from 'react'
import { procesoPesado } from '../../helpers/procesoPesado';
import { useCounter } from '../../hooks/useCounter'
import '../02-useEffect/effects.css'

export const MemoHook = () => {
    
    const { counter, increment } = useCounter(5000);
    const [show, setShow] = useState(true)

    const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter])
    
    // const message = procesoPesado(counter); //se renderizaba cada vez que se tocaban cualquiera de los 2 botones, la línea de arriba que utiliza useMemo resuelve el problema

    return (
        <div>
            <h1>MemoHook</h1>
            <h3>Counter: <small>{counter}</small> </h3>
            <hr/>
            <h3>{ memoProcesoPesado }</h3>
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
