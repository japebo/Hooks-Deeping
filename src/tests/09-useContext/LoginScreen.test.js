import { mount } from "enzyme"
import { LoginScreen } from "../../components/09-useContext/LoginScreen";
import { UserContext } from "../../components/09-useContext/UserContext";

describe('Pruebas en <LoginScreen />', () => {
    const user = {
        name: 'Javier',
        email: 'jpb@gmail.com'
    };
    const setUser = jest.fn();

    const wrapper = mount(
        <UserContext.Provider value={{user, setUser}}>
            <LoginScreen/>
        </UserContext.Provider>);

    test('Debe mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    })
    
    test('Debe ejecutarse el setUser con el argumento adecuado', () => {
        // const usertoset = {
        //     name: 'Sandra',
        //     email: 'sandra@gmail.com'
        // };
        wrapper.find('button').prop('onClick')();

        expect(setUser).toHaveBeenCalledWith({id: '1234', name: 'Javier Pérez',})
    })
    
})
