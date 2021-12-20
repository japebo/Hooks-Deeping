import React from 'react'
import '../../components/02-useEffect/effects.css'

export const Hijo = React.memo (( {numero, incrementar} ) => {
    console.log("Me ejecuté dentro de hijo");

    return (
        <> 
            <button 
                className='btn btn-primary'
                onClick={ () => incrementar( numero ) }
            > 
                { numero } 
            </button>
        </> 
    )
}
)