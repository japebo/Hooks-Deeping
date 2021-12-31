import { act } from "@testing-library/react";
import { mount, shallow } from "enzyme"
import { TodoApp } from "../../components/08-useReducer/TodoApp";
import { demoTodos } from "../fixtures/demoTodos";

describe('Pruebas en <TodoApp />', () => {
    const wrapper = shallow(<TodoApp />);
    
    test('Debe mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    })
    
    test('Debe agregar un TODO al LocalStorage', () => {
        const wrapper = mount(<TodoApp/>);

        Storage.prototype.setItem = jest.fn();

        act( () => {
            wrapper.find('TodoAdd').prop('handleAdd')(demoTodos[0]);
            wrapper.find('TodoAdd').prop('handleAdd')(demoTodos[1]);
        });

        expect(wrapper.find('h1').text().trim()).toBe('ToDoApp ( 2 )');
        expect( localStorage.setItem ).toHaveBeenCalledTimes(1);
    })
    
    test('Debe eliminar un TODO', () => {

        wrapper.find('TodoAdd').prop('handleAdd')(demoTodos[0]);
        expect(wrapper.find('h1').text().trim()).toBe('ToDoApp ( 1 )');
        wrapper.find('TodoList').prop('handleDeletion')(demoTodos[0].id);
        expect(wrapper.find('h1').text().trim()).toBe('ToDoApp ( 0 )');

    })
    
    
})
