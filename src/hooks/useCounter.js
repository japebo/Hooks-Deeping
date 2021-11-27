import { useState } from "react";

export const useCounter = ( initialState = 10 ) => {
    const [state, setState] = useState(initialState)

    const increment = () => {
        setState( state + 1 );
    }

    const decrement = () => {
        setState( state - 1);
    }

    const reset = () => {
        setState( initialState );
    }

    // const increment = (factor) => {
    //     setState( state + factor );
    // }

    // const decrement = (factor) => {
    //     setState( state - factor);
    // }

    return {
        state,
        increment,
        decrement,
        reset
    };
}
