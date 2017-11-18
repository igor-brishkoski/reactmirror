import React from 'react';
import './event_card.css';

export class EventCard extends React.Component{
    render(){
        return(
            <div className="eventCard">
                <div className="center-croppedCard" style={{backgroundImage: "url(" + this.props.event.image_url + ")"}}>
                </div>

                <div className="details-containerCard">
                    <h2 className="eventCardTitle">{this.props.event.name}</h2>
                    <h3>{`${this.props.event.date_string} - ${this.props.event.time_string}`}</h3>
                    <h3>{this.props.event.community}</h3>
                </div>
            </div>
        );
    }
}