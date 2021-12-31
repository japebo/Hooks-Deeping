import { shallow } from 'enzyme';
import React from 'react';
import { HooksApp } from '../HooksApp';

describe('Pruebas en <HookApp />', () => {
    test('Debe mostrarse correctamente', () => {
        const wrapper = shallow(<HooksApp />);

        expect(wrapper).toMatchSnapshot();
    })
    
    
})
