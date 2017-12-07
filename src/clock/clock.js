import React from 'react';
import './clock.css'

const REFRESH_INTERVAL = 60000;

export class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            REFRESH_INTERVAL
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
            <div className="clock thin">{this.state.date.toLocaleString([], {hour: 'numeric', minute: 'numeric'})}</div>
        );
    }
}