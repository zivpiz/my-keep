import React, {Component} from 'react';
import NoteSubmit from './NoteSubmit';
import Note from './Note';
import './../style.css';

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

        this.setState({nextId: this.state.nextId + 1});
        if (noteObj.checked)
            this.setState({checkedNotes: [...this.state.checkedNotes, newNote]});
        else this.setState({uncheckedNotes: [...this.state.uncheckedNotes, newNote]});
    };

    updateNoteCheck = (oldNote) => {
        const newNote = <Note text={oldNote.props.text} checked={!oldNote.props.checked}
                              handleCheck={this.updateNoteCheck} id={oldNote.props.id}/>;
        if (oldNote.props.checked)
            this.setState({
                checkedNotes: this.state.checkedNotes.filter(elem => elem.props.id !== oldNote.props.id),
                uncheckedNotes: [...this.state.uncheckedNotes, newNote]
            });
        else this.setState({
            checkedNotes: [...this.state.checkedNotes, newNote],
            uncheckedNotes: this.state.uncheckedNotes.filter(elem => elem.props.id !== oldNote.props.id)
        });
        this.state.uncheckedNotes.forEach(el => console.log(el.props.id));
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