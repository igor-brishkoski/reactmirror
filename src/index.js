import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import './index.css';

import {Event} from "./event/event";
import {EventCard} from "./event_card/event_card";
import {Clock} from "./clock/clock";


const REFRESH_INTERVAL = 1800000;

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            event: {},
            events: [],
        };
        this.loadEvent();
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.loadEvent(),
            REFRESH_INTERVAL
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    loadEvent() {
        axios.get(`https://staging-membersapi.wework.com/api/v6/events/mobile?encrypted_user_uuid=5aAWvRhO9aZY8cIEhkxs069aNiitbdNipFWE0Y-HiKEgN3D3VbT_ThvJOgLDRMJu`)
            .then(res => {
                console.log(res.data.events);
                this.setState({
                    event: res.data.events[0],
                    events: res.data.events.slice(0, 3)
                });
            });
    }

    render() {
        return (
            <div>
                <Clock/>
                <div className="content">
                    <Event event={this.state.event}/>
                    <h1><u>Upcoming Events</u></h1>
                    <EventCard events={this.state.events}/>
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);