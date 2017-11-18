import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Event} from "./event/event";

// ReactDOM.render(<Event />, document.getElementById('root'));


class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Upcoming Event</h1>
                <Event/>
            </div>
        );
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);