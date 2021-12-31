import {renderHook} from '@testing-library/react-hooks'
import { useFetch } from '../../hooks/useFetch';

describe('Pruebas en useFetch', () => {
    test('Debe retornar la información por defecto', () => {
        const { result } = renderHook( () => useFetch('https://breakingbadapi.com/api/quotes/1') );

        const { data, loading, error } = result.current;

        expect(data).toBe(null);
        expect(loading).toBe(true);
        expect(error).toBe(null);
    })
    
    test('Debe retornar la información deseada, loading en false y error en false', async () => {
        const { result, waitForNextUpdate } = renderHook( () => useFetch('https://breakingbadapi.com/api/quotes/2') );

        await waitForNextUpdate();

        const { data, loading, error } = result.current;

        expect(data.length).toBe(1);
        expect(loading).toBe(false);
        expect(error).toBe(null);
    })

    test('Debe manejar el error', async () => {
        const { result, waitForNextUpdate } = renderHook( () => useFetch('https://reqres.in/apid/users?page=1') ); //url con un error, la API retorna error 404 

        await waitForNextUpdate();

        const { data, loading, error } = result.current;

        expect(data).toBe(null);
        expect(loading).toBe(false);
        expect(error).toBe('No se pudo cargar la info');
    })
    
})
