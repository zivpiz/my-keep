import AllNotes from "../Components/AllNotes";
import Note from "../Components/Note";
import React from 'react';

describe("Test NoteSubmit Component ", ()=>{

    let wrapper;
    const checkedNoteObj = {text:"checked note", checked: true};
    const uncheckedNoteObj = {text:"unchecked note", checked: false};
    const checkedNoteComp = <Note text="Checked Note" checked={true} id={0}/>;
    const uncheckedNoteComp = <Note text="Unchecked Note" checked={false} id={1}/>;

    describe("Snapshot rendering", ()=>{
        beforeEach(()=>{
            wrapper = shallow(<AllNotes />);
        });

        test('Renders appropriate snapshot', () => {
            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("Creation of new notes", ()=>{
        beforeEach(()=>{
            wrapper = shallow(<AllNotes />);
        });

        test('Creates new checked note, appends it to checked notes list and updates id', () => {
            expect(wrapper.find('.uncheckedNotes').children().length).toBe(0);
            expect(wrapper.find('.checkedNotes').children().length).toBe(0);
            const oldId = wrapper.state().nextId;

            wrapper.instance().createNewNote(checkedNoteObj);

            expect(wrapper.find('.uncheckedNotes').children().length).toBe(0);
            expect(wrapper.find('.checkedNotes').children().length).toBe(1);
            expect(wrapper.state().nextId).toBe(oldId + 1);
        });

        test('Creates new unchecked note and appends it to unchecked notes list', () => {
            expect(wrapper.find('.uncheckedNotes').children().length).toBe(0);
            expect(wrapper.find('.checkedNotes').children().length).toBe(0);

            wrapper.instance().createNewNote(uncheckedNoteObj);

            expect(wrapper.find('.uncheckedNotes').children().length).toBe(1);
            expect(wrapper.find('.checkedNotes').children().length).toBe(0);
        });
    });

    describe("Update Check for checked note", ()=>{
        beforeEach(()=>{
            wrapper = shallow(<AllNotes />);
            wrapper.instance().createNewNote(checkedNoteObj);
        });

        test('updates the two lists', () => {
            expect(wrapper.find('.uncheckedNotes').children().length).toBe(0);
            expect(wrapper.find('.checkedNotes').children().length).toBe(1);

            wrapper.instance().updateNoteCheck(checkedNoteComp);

            expect(wrapper.find('.uncheckedNotes').children().length).toBe(1);
            expect(wrapper.find('.checkedNotes').children().length).toBe(0);
        });
    });

    describe("Update Check for unchecked note", ()=>{
        beforeEach(()=>{
            wrapper = shallow(<AllNotes />);
            wrapper.instance().createNewNote(checkedNoteObj);
            wrapper.instance().createNewNote(uncheckedNoteObj);
        });

        test('updates the two lists', () => {
            expect(wrapper.find('.uncheckedNotes').children().length).toBe(1);
            expect(wrapper.find('.checkedNotes').children().length).toBe(1);

            wrapper.instance().updateNoteCheck(uncheckedNoteComp);

            expect(wrapper.find('.uncheckedNotes').children().length).toBe(0);
            expect(wrapper.find('.checkedNotes').children().length).toBe(2);
        });
    });
});


