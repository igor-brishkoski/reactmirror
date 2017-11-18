import React from 'react';
import './event.css';


export class Event extends React.Component {

    render() {
        return (
            <div className="event">
                <div className="event center-cropped" style={{backgroundImage: "url(" + this.props.event.image_url + ")"}}>

                </div>
                <h1>{this.props.event.name}</h1>
                <div className="details-container   ">
                    <div className="eventtime">
                        <h3>{`${this.props.event.date_string} - ${this.props.event.time_string}`}</h3>
                    </div>
                    <div className="location">
                        <h3>{this.props.event.community}</h3>
                    </div>
                </div>
                <div className="description">
                    <h3>{this.props.event.description}</h3>
                </div>
            </div>
        );
    }
}