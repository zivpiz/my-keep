import Note from "../Components/Note";
import React from 'react';

describe("Test Note Component ", ()=>{

    let wrapper;
    const onChangeMock = jest.fn();

    beforeEach(()=>{
        wrapper = shallow(<Note text="Note Test" checked={true}
                                handleCheck={onChangeMock}/>);
    });

    test('Renders appropriate snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Calls onChangeMock when checkbox is clicked', () => {
        wrapper.find('input').simulate('change');
        expect(onChangeMock).toHaveBeenCalled();
    });

    test('Names label according to checked status', () => {
        const label = wrapper.find('label');
        expect(label.props().className).toBe("NoteTextChecked-true");
    });
});


