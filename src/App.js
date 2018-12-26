import React, {Component} from 'react';
import AllNotes from './Components/AllNotes';
import './style.css';

class App extends Component {
    render() {
        return (
            <div>
                <h1 className="ui top attached header">Your Notes</h1>
                <AllNotes />
            </div>
        );
    }
}

export default App;
