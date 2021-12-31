import { mount } from "enzyme"
import { HomeScreen } from "../../components/09-useContext/HomeScreen"
import { UserContext } from "../../components/09-useContext/UserContext"

describe('Pruebas en <HomeScreen/>', () => {
    test('Debe mostrarse correctamente', () => {
        const user = {
            name: 'Javier',
            email: 'jpb@gmail.com'
        };
        const wrapper = mount(
            <UserContext.Provider value={{ 
                user
            }}>
                <HomeScreen/>
            </UserContext.Provider>
        )
        expect(wrapper).toMatchSnapshot();
    })
    
})
