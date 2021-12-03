import React from 'react'
//or 
// import React, { memo } from 'react'

export const Small = React.memo(( {counter} ) => {
    console.log('Me volví a renderizar');
    return (
        <small>
            { counter }
        </small>
    )
})
