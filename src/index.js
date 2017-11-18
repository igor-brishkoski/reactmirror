import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Event} from "./event/event";
import {EventCard} from "./event_card/event_card";
import axios from 'axios';

// ReactDOM.render(<Event />, document.getElementById('root'));

const REFRESH_INTERVAL = 1800000;

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            event: {}
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
                const event = res.data.events[0];
                console.log(res.data.events[0]);
                this.setState({event});
            });
    }

    render() {
        return (
            <div>
                <h1><u>Upcoming Event</u></h1>
                <Event event={this.state.event}/>
                <h1><u>Upcoming Events</u></h1>
                <EventCard event={this.state.event}/>
            </div>
        );
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);