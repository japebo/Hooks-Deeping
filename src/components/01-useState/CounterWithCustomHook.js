
import React from 'react'
import { useCounter } from '../../hooks/useCounter'

export const CounterWithCustomHook = () => {
    
    const {state, increment, decrement, reset} = useCounter();
    
    return (
        <>
            <h1>Counter With Hook: { state } </h1>
            <hr/>
            <button onClick={ increment } >+1</button>
            {/* <button onClick={ () => {increment(2)} } >+1</button> */}
            <button onClick={ decrement } >-1</button>
            {/* <button onClick={ () => {decrement(2)} } >-1</button> */}
            <button onClick={ reset } >Reset</button>
        </>
    )
}
