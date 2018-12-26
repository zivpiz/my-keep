import NoteSubmit from "../Components/NoteSubmit";
import React from 'react';

describe("Test NoteSubmit Component ", ()=>{

    let wrapper;
    const mockUpdateNote = jest.fn();
    const mockChangeEvent = { target: { value: "Some text"}};
    const mockSubmitEvent = { preventDefault: ()=> {}};
    beforeEach(()=>{
        wrapper = shallow(<NoteSubmit updateNoteList={mockUpdateNote}/>);
    });

    test('Renders appropriate snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Doesn’t render checkbox when there’s no text', () => {
        expect(wrapper.find('input')).toHaveLength(1);
    });

    test('Changes text appropriately', () => {
        wrapper.find('input').at(0).simulate('change', mockChangeEvent);
        expect(wrapper.find('input').at(1).props().value).toBe("Some text");
    });

    test('Renders checkbox when there’s text', () => {
        wrapper.find('input').at(0).simulate('change', mockChangeEvent);
        expect(wrapper.find('input')).toHaveLength(2);
    });

    test('Calls update function when submitting form', () => {
        wrapper.find('input').at(0).simulate('change', mockChangeEvent);
        wrapper.find('form').simulate('submit', mockSubmitEvent);
        expect(mockUpdateNote).toHaveBeenCalled();
    });

    test('Calls update function when checking checkbox', () => {
        wrapper.find('input').at(0).simulate('change', mockChangeEvent); // Text Change
        wrapper.find('input').at(0).simulate('change', mockChangeEvent); // Checkbox change
        expect(mockUpdateNote).toHaveBeenCalled();
    });

    test('Resets state when checking checkbox / submitting', () => {
        wrapper.find('input').at(0).simulate('change', mockChangeEvent);
        wrapper.find('form').simulate('submit', mockSubmitEvent);
        expect(wrapper.state().text).toBe('');
        expect(wrapper.state().checked).toBe(false);
    });

    test('Blocks update function when text is empty', () => {
        wrapper.find('form').simulate('submit', mockSubmitEvent);
        expect(mockUpdateNote).toHaveBeenCalledTimes(0);
    });

    afterEach(()=>{
        mockUpdateNote.mockRestore();
    })

});


