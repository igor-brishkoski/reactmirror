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
            <div>
                <img className="logo"
                     src="http://probusinesschannelusa.com/wp-content/uploads/2016/01/WeWork-logo2-300x169.jpg"/>
                <h2>{this.state.date.toLocaleString([], {hour: 'numeric', minute: 'numeric'})}</h2>
            </div>
        );
    }
}