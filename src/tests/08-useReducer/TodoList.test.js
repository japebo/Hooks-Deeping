import { shallow } from "enzyme"
import { TodoList } from "../../components/08-useReducer/TodoList";
import { demoTodos } from "../fixtures/demoTodos"

const handleDeletion = jest.fn();
const handleToggle = jest.fn();

const wrapper = shallow(
    <TodoList 
    todos={demoTodos}
    handleDeletion={handleDeletion}
    handleToggle={handleToggle}
    />);

describe('Pruebas en <TodoList />', () => {
    test('Debe mostrarse correctamente', () => {

        expect(wrapper).toMatchSnapshot();
    })
    
    test('Debe tener dos <TodoListItem />', () => {

        expect( wrapper.find('TodoListItem').length ).toBe( demoTodos.length );

        // console.log( wrapper.find('TodoListItem').at(0).props() );

        expect(wrapper.find('TodoListItem').at(0).prop('handleDeletion')).toEqual(expect.any(Function)); //se espera que la propiedad handleDeletion contenga una función. 
        
    })
    
})
