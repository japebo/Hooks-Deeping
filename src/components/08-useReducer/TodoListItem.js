import React from 'react'

export const TodoListItem = ({todo, index, handleDeletion, handleToggle}) => {
    return (
        <li
            key={todo.id}
            className='list-group-item'
        >
            <p 
                className={ `${todo.done===true && 'complete'}` }
                onClick={ () => {handleToggle(todo.id)} } > {index+1}. {todo.task} </p>
            <button 
                className='btn btn-danger'
                onClick={ () => { handleDeletion(todo.id) } }
            >
                Delete
            </button>
        </li>
    )
}
