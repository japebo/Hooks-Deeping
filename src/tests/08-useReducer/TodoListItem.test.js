import { shallow } from "enzyme"
import { TodoListItem } from "../../components/08-useReducer/TodoListItem";
import { demoTodos } from "../fixtures/demoTodos";

const handleDeletion = jest.fn(); // estas mock functions nos permiten saber con qué parámetros fueron llamadas, entre otras opciones...
const handleToggle = jest.fn();

const wrapper = shallow(
    <TodoListItem 
    todo={ demoTodos[0] }
    index={0}
    handleDeletion = { handleDeletion }
    handleToggle = { handleToggle }
    />);
    
describe('Pruebas en <TodoListItem/>', () => {
    test('Debe mostrar correctamente el componente', () => {
        
        expect(wrapper).toMatchSnapshot();
    })

    test('Debe llamar la función handleDeletion', () => {
        wrapper.find('button').simulate('click');
        expect( handleDeletion ).toHaveBeenCalledWith( demoTodos[0].id );
    })

    test('Debe llamar la función handleToggle', () => {
        wrapper.find('p').simulate('click');
        expect( handleToggle ).toHaveBeenCalledWith( demoTodos[0].id );    
    })

    test('Debe mostrar el texto correctamente', () => {
        const p = wrapper.find('p');
        expect( p.text().trim() ).toBe( `1. ${demoTodos[0].task}`);
    })

    test('Debe tener la clase .complete si el TODO.done = true', () => {
        
        const todo = demoTodos[0];
        todo.done = true;

        const wrapper = shallow(
            <TodoListItem 
            todo={ todo }
            index={0}
            handleDeletion = { handleDeletion }
            handleToggle = { handleToggle }
            />);

        expect( wrapper.find('p').html() ).toContain('complete');
        expect( wrapper.find('p').hasClass('complete') ).toBe( true );

        
    })
})
