import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Event} from "./event/event";
//
// ReactDOM.render(<Event />, document.getElementById('root'));

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h2>{this.state.date.toLocaleTimeString()}</h2>
            </div>
        );
    }
}

class App extends React.Component {
    render(){
        return (
            <div>
                <Clock/>
                <Event/>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);