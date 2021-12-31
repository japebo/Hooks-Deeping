import { shallow } from "enzyme"
import { MultipleCustomHooks } from "../../../components/03-examples/MultipleCustomHooks";
// import { useCounter } from "../../../hooks/useCounter";
import { useFetch } from "../../../hooks/useFetch";
jest.mock('../../../hooks/useFetch'); //para hacer una simulacioón del useFetch, porque no nos interesa comprobar si useFetch funciona correctamente, eso ya se hizo en un unit test; en este caso lo que nos interesa son los valores que retorna el hook useFetch.  
// jest.mock('../../../hooks/useCounter'); 

describe('Pruebas en <MultipleCustomHooks/>', () => {

    // useCounter.mockReturnValue( {
    //     counter: 1,
    //     increment: () => {}
    // });

    test('Debe mostarse correctamente', () => {
        useFetch.mockReturnValue({
            data: null,
            loading: true,
            error: null
        });

        const wrapper = shallow(<MultipleCustomHooks/>);  
        expect(wrapper).toMatchSnapshot();      
    })
    
    test('Debe mostrar la información', () => {
        useFetch.mockReturnValue({
            data: [{
                author: 'Javier',
                quote: 'Hola Mundo'
            }],
            loading: false,
            error: null
        });
        
        const wrapper = shallow(<MultipleCustomHooks/>);  

        expect(wrapper.find('.alert').exists()).toBe(false);
        expect(wrapper.find('.mb-3').text().trim()).toBe('Hola Mundo');
        expect(wrapper.find('footer').text().trim()).toBe('Javier');
    })    
})
