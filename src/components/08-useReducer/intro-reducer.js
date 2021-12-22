
const initialState = [{
    id: 1,
    task: 'Botar la basura',
    done: false
}];

const todoReducer = ( state = initialState, action) => {

    if (action?.type === 'add') {
        return [...state, action.payload]
    }

    return state;
}

let todos = todoReducer();

const newTask = {
    id: 2,
    task: 'Buscar el pan',
    done: false
};

const actionToPerform = {
    type: 'add',
    payload: newTask
};

todos = todoReducer( todos, actionToPerform );

console.log(todos);