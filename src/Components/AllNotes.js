import React, {Component} from 'react';
import NoteSubmit from './NoteSubmit';
import Note from './Note';
import './../style.css';


const mapCheckedToKey = {
    true: "checkedNotes",
    false: "uncheckedNotes"
};

class AllNotes extends Component {
    constructor(props) {
        super(props);

        this.state = {uncheckedNotes: [], checkedNotes: [], nextId: 0};
        this.renderList = this.renderList.bind(this);
        this.createNewNote = this.createNewNote.bind(this);
        this.updateNoteCheck = this.updateNoteCheck.bind(this);
    }

    renderList = (list) => list.map(elem => <li key={elem.props.id}>{elem}</li>);

    createNewNote = (noteObj) => {
        const newNote = <Note text={noteObj.text} checked={noteObj.checked}
                              handleCheck={this.updateNoteCheck} id={this.state.nextId}/>;

        const listToUpdate = mapCheckedToKey[noteObj.checked];
        this.setState({
            [listToUpdate]: [...this.state[listToUpdate], newNote],
            nextId: this.state.nextId + 1
        });
    };

    updateNoteCheck = (oldNoteProps) => {
        const newNote = <Note text={oldNoteProps.text} checked={!oldNoteProps.checked}
                              handleCheck={this.updateNoteCheck} id={oldNoteProps.id}/>;

        const addToList = mapCheckedToKey[!oldNoteProps.checked];
        const removeFromList = mapCheckedToKey[oldNoteProps.checked];

        this.setState({
            [removeFromList]: this.state[removeFromList].filter(elem => elem.props.id !== oldNoteProps.id),
            [addToList]: [...this.state[addToList], newNote]
        });
    };

    render() {
        return (
            <div className="AllNotes">
                <ol className="uncheckedNotes">
                    {this.renderList(this.state.uncheckedNotes)}
                </ol>
                <NoteSubmit updateNoteList={this.createNewNote}/>
                <ol className="checkedNotes">
                    {this.renderList(this.state.checkedNotes)}
                </ol>
            </div>
        )
    }
}

export default AllNotes;