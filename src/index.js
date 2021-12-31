import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ReactDOM from 'react-dom';
// import { FormWithCustomHook } from './components/02-useEffect/FormWithCustomHook';
// import { MultipleCustomHooks } from './components/03-examples/MultipleCustomHooks';
// import { FocusScreen } from './components/04-useRef/FocusScreen';
// import { UseRefRealExample } from './components/04-useRef/UseRefRealExample';
// import { Layout } from './components/05-useLayoutEffect/Layout';
// import { Memorize } from './components/06-memos/Memorize';
// import { MemoHook } from './components/06-memos/MemoHook';
// import { Padre } from './components/07-tarea-memo/Padre';
// import { CounterApp } from './components/01-useState/CounterApp';
// import { CounterWithCustomHook } from './components/01-useState/CounterWithCustomHook';
// import { SimpleForm } from './components/02-useEffect/SimpleForm';
// import { HooksApp } from './HooksApp';
// import { TodoApp } from "./components/08-useReducer/TodoApp";

// import { MainApp } from './components/09-useContext/MainApp';
import { TodoApp } from './components/08-useReducer/TodoApp';

// import './components/08-useReducer/intro-reducer.js';

ReactDOM.render(
    <TodoApp />,
  document.getElementById('root')
);