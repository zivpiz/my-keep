import React, {Component} from 'react';
import './../style.css';

class Note extends Component {

    render() {
        return (
            <div className="Note">
                <input type="checkbox" className="NoteCheckbox" onChange={() => this.props.handleCheck(this)}
                       defaultChecked={this.props.checked}/>
                <label className={`NoteText${this.props.checked}`}>{this.props.text}</label>
            </div>
        )
    }
}

export default Note;