import App from '../App';
import React from 'react';

describe("Test App Component Basic Rendering", ()=>{
    test('Renders appropriate snapshot', () => {
        const wrapper = shallow(<App />);
        expect(wrapper).toMatchSnapshot();
    });
});


