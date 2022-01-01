import { mount } from "enzyme"
import { AppRouter } from "../../components/09-useContext/AppRouter";
import { UserContext } from "../../components/09-useContext/UserContext";

describe('Pruebas en <AppRouter />', () => {
    test('Debe mostrarse correctamente', () => {
        const user = {
            name: 'Javier',
            email: 'jpb@gmail.com'    
        }
        const wrapper = mount(
            <UserContext.Provider value={{user}}>
                <AppRouter />
            </UserContext.Provider>
        );
        expect(wrapper).toMatchSnapshot();
    })
    
})
