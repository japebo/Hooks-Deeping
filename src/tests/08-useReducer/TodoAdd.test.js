import { shallow } from "enzyme"
import { TodoAdd } from "../../components/08-useReducer/TodoAdd"

describe('Preubas en <TodoAdd/>', () => {
    const handleAdd = jest.fn();
    const wrapper = shallow(<TodoAdd handleAdd={handleAdd}/>);

    test('Debe mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();  
    })

    test('No debe llamar la función handleAdd', () => {
        const formSubmit = wrapper.find('form').prop('onSubmit');
        formSubmit({preventDefault(){}}); //forma corta de definir una función (shorthand method definition). Este forma de crear las funciones puede ser utilizado como método en la declaración de un objeto o en las clases de ES6.
        
        expect(handleAdd).toHaveBeenCalledTimes(0);
    })
    
    test('Debe llamar la función handleAdd', () => {
        const value = 'Aprender React';
        wrapper.find('input').simulate('change', {
            target: {
                value,
                name: 'task'
            }});
            const formSubmit = wrapper.find('form').prop('onSubmit');
            formSubmit({preventDefault(){}}); //forma corta de definir una función (shorthand method definition). Este forma de crear las funciones puede ser utilizado como método en la declaración de un objeto o en las clases de ES6.
            expect(handleAdd).toHaveBeenCalledTimes(1);
            // expect(handleAdd).toHaveBeenCalledWith(expect.any(Object));
            expect(handleAdd).toHaveBeenCalledWith({
                id: expect.any(Number),
                task: value,
                done: false
            });
            console.log(wrapper.find('input').text());
            expect(wrapper.find('input').prop('value')).toBe('');
        })
        
})
