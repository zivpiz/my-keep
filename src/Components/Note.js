import React from 'react';
import './../style.css';


const Note = (props) =>{
    return (
        <div className="Note">
            <input type="checkbox" className="NoteCheckbox" onChange={() => props.handleCheck(props)}
                   checked={props.checked}/>
            <label className={`NoteTextChecked-${props.checked}`}>{props.text}</label>
        </div>
    )
};

export default Note;