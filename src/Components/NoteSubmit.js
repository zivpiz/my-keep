import React, {Component} from 'react';

class NoteSubmit extends Component {
    constructor(props) {
        super(props);

        this.state = {text: '', checked: false};

        this.ConditionalBoxRender = this.ConditionalBoxRender.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleCheck = this.handleCheck.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.submitNote = this.submitNote.bind(this);
    }

    ConditionalBoxRender = () => this.state.text === '' ? '' : <input type ="checkbox" onChange ={this.handleCheck}/>;

    handleTextChange = (event) => this.setState({text: event.target.value});

    handleCheck = () => this.setState({checked: !this.state.checked}, () => this.submitNote());

    handleSubmit = (event) => {
        event.preventDefault();
        this.submitNote();
    };

    submitNote = () =>{
        if(this.state.text !== ''){
            this.props.updateNoteList(this.state);
            this.setState({text: '', checked: false});
        }
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                {this.ConditionalBoxRender()}
            <input type="text" placeholder="Take a note..." name="inputName"
                   value={this.state.text} onChange={this.handleTextChange} autoComplete="off"/>
            </form>
        )
    }
}

export default NoteSubmit;