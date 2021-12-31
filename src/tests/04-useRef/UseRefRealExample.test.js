import { shallow } from "enzyme"
import { UseRefRealExample } from "../../components/04-useRef/UseRefRealExample";

describe('Pruebas en <UseRefRealExample/>', () => {
    const wrapper = shallow(<UseRefRealExample/>);

    test('Debe mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('MultipleCustomHooks').exists()).toBe(false);
    })
    test('Debe mostrar el componente <UseRefRealExample/>', () => {
        wrapper.find('button').simulate('click');
        expect(wrapper.find('MultipleCustomHooks').exists()).toBe(true);
    })
    
})
