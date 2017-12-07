import React from 'react';
import './event.css';


export class Event extends React.Component {

    render() {
        return (
            <div className="event">
                <div className="event center-cropped" style={{backgroundImage: "url(" + this.props.event.image_url + ")"}}></div>
                <div className="header medium bold">{this.props.event.name}</div>
                <div className="details-container">
                    <div className="eventtime medium">{this.props.event.date_string} <br/> {this.props.event.time_string}</div>
                    <div className="location medium">{this.props.event.community}</div>
                </div>
                <div className="small thin">{this.props.event.description}</div>
            </div>
        );
    }
}