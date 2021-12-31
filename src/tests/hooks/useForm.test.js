import { act, renderHook } from '@testing-library/react-hooks';
import { useForm } from '../../hooks/useForm';

describe('Pruebas en useForm', () => {

    const initialForm = {
        name: 'Javier',
        email: 'jpb@gmail.com'
    };

    test('Debe regresar un formulario por defecto', () => {
        const { result } = renderHook( () => useForm(initialForm)); 
        const [ values, handleInputChange, reset ] = result.current;
        expect( values ).toEqual(initialForm);
        expect( typeof handleInputChange ).toBe('function');
        expect( typeof reset ).toBe('function');
    })
    
    test('Debe cambiar el valor del formulario (cambiar name)', () => {
        const { result } = renderHook( () => useForm(initialForm));
        const [ , handleInputChange ] = result.current;

        act( () => {
            handleInputChange({target: { name: 'name', value: 'Eylen'}})
        } );
        const [ values ] = result.current;
        // console.log(values); //{ name: 'Eylen', email: 'jpb@gmail.com' }
        
        expect( values ).toEqual( {...initialForm, name: 'Eylen'} );
        
    })
    
    test('Debe re-establecer el formulario con reset', () => {
        const { result } = renderHook( () => useForm(initialForm));
        const [ , handleInputChange, reset ] = result.current;
        
        act( () => {
            handleInputChange({target: { name: 'name', value: 'Eylen'}})
            reset();
        } );
        const [ values ] = result.current;
        // console.log(values); //{ name: 'Eylen', email: 'jpb@gmail.com' }

        expect( values ).toEqual( initialForm );
        
    })
    
    
})
