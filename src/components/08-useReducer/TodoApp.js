import React, { useEffect, useReducer } from 'react'
import './styles.css'
import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';
import { todoReducer } from './todoReducer';

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];

    // return [{
    //     id: new Date().getTime(),
    //     task: 'Aprender React',
    //     done: false
    // }];
}

export const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init);

    useEffect(() => {
        localStorage.setItem( 'todos', JSON.stringify(todos));
    }, [todos])


    const handleAdd = (newTodo) => {
        dispatch({
            type: 'add',
            payload: newTodo
        });
    }

    const handleDeletion = ( todoID ) => {
        const action = {
            type: 'delete',
            payload: todoID
        }

        dispatch(action);

    }

    const handleToggle = ( todoID ) => {

        dispatch({
            type: 'toggle',
            payload: todoID
        });

    }

    return (
        <div>
            <h1>ToDoApp ( {todos.length} )</h1>
            <hr/>

            <div className='row'>
                <div className='col-7'>
                    < TodoList todos={todos} handleDeletion={handleDeletion} handleToggle={handleToggle}/>
                </div>

                <div className='col-5'>
                    <TodoAdd handleAdd={handleAdd}/>
                </div>
            </div>
        </div>
    )
}
