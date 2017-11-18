import React from 'react';
import './event.css';
import axios from 'axios';

export class Event extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            event:{}
        }
    }

    componentDidMount() {
        axios.get(`https://staging-membersapi.wework.com/api/v5/events/b3dc8900-9bcc-0135-1118-6216183e35b7?encrypted_user_uuid=5aAWvRhO9aZY8cIEhkxs069aNiitbdNipFWE0Y-HiKEgN3D3VbT_ThvJOgLDRMJu`)
            .then(res => {
                const event = res.data;
                this.setState({ event });
            });
    }

    render(){
        return (
            <div className="event">
                <div className="center-cropped" style={{backgroundImage: "url(" + this.state.event.image_url + ")"}}>

                </div>
                <h1>{this.state.event.name}</h1>
                <div className="details-container   ">
                    <div className="eventtime">
                        <h2>{`${this.state.event.date_string} - ${this.state.event.time_string}`}</h2>
                    </div>
                    <div className="location">
                        <h2>{this.state.event.community}</h2>
                    </div>
                </div>
                <div className="description">
                    <h3>{this.state.event.description}</h3>
                </div>
            </div>
        );
    }
}